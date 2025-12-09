<?php
// Lumencat – Kontaktformular mit Environment Variables & CSRF Protection

session_start();
header('Content-Type: application/json; charset=utf-8');

// Rate Limiting: Max 3 Anfragen pro Minute
$now = time();
$rateLimitWindow = 60; // 60 Sekunden
$maxRequests = 3;      // Max 3 Anfragen pro Minute

if (!isset($_SESSION['request_count'])) {
    $_SESSION['request_count'] = 0;
    $_SESSION['request_window_start'] = $now;
}

if ($now - $_SESSION['request_window_start'] > $rateLimitWindow) {
    // Neues Fenster
    $_SESSION['request_count'] = 0;
    $_SESSION['request_window_start'] = $now;
}

$_SESSION['request_count']++;

if ($_SESSION['request_count'] > $maxRequests) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'message' => 'Zu viele Anfragen. Bitte versuche es in einer Minute erneut.'
    ]);
    exit;
}

// Load environment variables from .env file
function loadEnv($path) {
    if (!file_exists($path)) {
        return;
    }
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue; // Skip comments
        }
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        if (!array_key_exists($name, $_ENV)) {
            $_ENV[$name] = $value;
        }
    }
}

// Load .env from parent directory (one level up from scripts/)
loadEnv(__DIR__ . '/../.env');

// Get configuration from environment variables with fallbacks
$toEmail = $_ENV['CONTACT_TO_EMAIL'] ?? 'hello@lumencat.de';
$fromEmail = $_ENV['CONTACT_FROM_EMAIL'] ?? 'no-reply@lumencat.de';
$n8nWebhookUrl = $_ENV['N8N_WEBHOOK_URL'] ?? '';

// Nur POST zulassen
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Nur POST-Anfragen sind erlaubt.'
    ]);
    exit;
}

// CSRF-Protection: Token validieren
$csrfToken = $_POST['csrf_token'] ?? '';
if (empty($_SESSION['csrf_token']) || $csrfToken !== $_SESSION['csrf_token']) {
    // Token erneuern auch bei Fehler (Replay-Attack verhindern)
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    echo json_encode([
        'success' => false,
        'message' => 'Sicherheitsüberprüfung fehlgeschlagen. Bitte lade die Seite neu und versuche es erneut.'
    ]);
    exit;
}

// Token nach erfolgreicher Validierung erneuern (One-Time-Use)
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));

// Honeypot
if (!empty($_POST['website'] ?? '')) {
    echo json_encode([
        'success' => true,
        'message' => 'Danke für deine Nachricht.'
    ]);
    exit;
}

$name        = trim($_POST['name'] ?? '');
$email       = trim($_POST['email'] ?? '');
$phone       = trim($_POST['phone'] ?? '');
$projectType = trim($_POST['projectType'] ?? '');
$message     = trim($_POST['message'] ?? '');

$errors = [];

if ($name === '') {
    $errors[] = 'Bitte gib deinen Namen an.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Bitte gib eine gültige E-Mail-Adresse an.';
}

// Header-Injection verhindern: Prüfe auf Zeilenumbrüche
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email)) {
    $errors[] = 'Ungültige Zeichen in Name oder E-Mail erkannt.';
}

if ($message === '') {
    $errors[] = 'Bitte schreib mir kurz, worum es geht.';
}

if (!empty($errors)) {
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors),
    ]);
    exit;
}

// Bereinigung für E-Mail-Header (zusätzliche Sicherheit)
$cleanName = preg_replace('/[^a-zA-Z0-9äöüÄÖÜß\s\-]/', '', $name);
$cleanEmail = $email; // Bereits validiert mit FILTER_VALIDATE_EMAIL

$subject = 'Neue Anfrage über das Kontaktformular (lumencat.de)';

$bodyLines = [
    "Neue Anfrage über das Kontaktformular:",
    "",
    "Name:        " . $name,
    "E-Mail:      " . $email,
    "Telefon:     " . ($phone !== '' ? $phone : '–'),
    "Projektart:  " . ($projectType !== '' ? $projectType : '–'),
    "",
    "Nachricht:",
    $message,
    "",
    "Gesendet am " . date('d.m.Y H:i') . " Uhr."
];
$body = implode("\n", $bodyLines);

$headers   = [
    'From: Lumencat Website <' . $fromEmail . '>',
    'Reply-To: ' . ($cleanName !== '' ? $cleanName : 'Kontaktformular') . ' <' . $cleanEmail . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
];
$headersString = implode("\r\n", $headers);

$mailSuccess = mail(
    $toEmail,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    $headersString
);

// Wenn Mail komplett abschmiert, nicht auch noch n8n triggern
if (!$mailSuccess) {
    echo json_encode([
        'success' => false,
        'message' => 'Die E-Mail konnte nicht gesendet werden. Bitte versuch es später noch einmal oder schreib direkt an hello@lumencat.de.'
    ]);
    exit;
}

// n8n Webhook (nur wenn URL gesetzt ist)
if (!empty($n8nWebhookUrl)) {
    $payload = json_encode([
        'name'        => $name,
        'email'       => $email,
        'phone'       => $phone,
        'projectType' => $projectType,
        'message'     => $message,
        'source'      => 'lumencat.de',
        'sentAt'      => date('c'),
    ], JSON_UNESCAPED_UNICODE);

    // Prüfen, ob cURL verfügbar ist
    if (function_exists('curl_init')) {
        $ch = curl_init($n8nWebhookUrl);
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 5,    // Timeout erhöht auf 5 Sekunden
            CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
            CURLOPT_POSTFIELDS     => $payload,
            CURLOPT_SSL_VERIFYPEER => true, // SSL-Verifikation aktiviert
            CURLOPT_SSL_VERIFYHOST => 2,    // Hostname-Check
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        // Keine detaillierten Logs in Produktion, um Endpunkte/Fehler nicht zu leaken
    }
}

echo json_encode([
    'success' => true,
    'message' => 'Danke für deine Nachricht! Ich melde mich so schnell wie möglich.'
]);

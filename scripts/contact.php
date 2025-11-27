<?php
// Lumencat – Kontaktformular

header('Content-Type: application/json; charset=utf-8');

// Nur POST zulassen
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Nur POST-Anfragen sind erlaubt.'
    ]);
    exit;
}

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

$to      = 'hello@lumencat.de'; // <- HIER deine Zieladresse
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

$fromEmail = 'no-reply@lumencat.de';
$headers   = [
    'From: Lumencat Website <' . $fromEmail . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
];
$headersString = implode("\r\n", $headers);

$mailSuccess = mail(
    $to,
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

// n8n Webhook - AKTUELL DEAKTIVIERT (funktioniert noch nicht)
/*
$n8nWebhookUrl = 'https://automation.lumencat.de/webhook/new-project-request'; // <- HIER deine n8n Webhook-URL

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
            CURLOPT_RETURNTRANSFER => true, // Geändert: Wir wollen Status prüfen
            CURLOPT_TIMEOUT        => 3,    // Erhöht: 3 Sekunden für stabilere Verbindung
            CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
            CURLOPT_POSTFIELDS     => $payload,
        ]);
        
        curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        // Logging für Debugging (landet in PHP error_log)
        if ($httpCode !== 200 && $httpCode !== 201) {
            error_log("Lumencat n8n Webhook fehlgeschlagen: HTTP $httpCode - Error: $curlError");
        }
    } else {
        error_log('Lumencat: cURL ist nicht verfügbar - n8n Webhook wurde NICHT gesendet');
    }
}
*/

echo json_encode([
    'success' => true,
    'message' => 'Danke für deine Nachricht! Ich melde mich so schnell wie möglich.'
]);


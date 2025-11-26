<?php
// Lumencat – Kontaktformular
// Ich nehme die Formulardaten, prüfe sie, schicke mir eine E-Mail
// und gebe JSON zurück (für das JS). Ohne JS gibt es eine einfache Fallback-Seite.

header('Content-Type: application/json; charset=utf-8');

// 1. Nur POST zulassen
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Nur POST-Anfragen sind erlaubt.'
    ]);
    exit;
}

// 2. Spam-Honeypot: Wenn das versteckte Feld ausgefüllt ist, breche ich ab.
if (!empty($_POST['website'] ?? '')) {
    // Ich tue so, als wäre alles ok, damit Bots keinen Unterschied merken.
    echo json_encode([
        'success' => true,
        'message' => 'Danke für deine Nachricht.'
    ]);
    exit;
}

// 3. Felder einsammeln und trimmen
$name        = trim($_POST['name'] ?? '');
$email       = trim($_POST['email'] ?? '');
$phone       = trim($_POST['phone'] ?? '');
$projectType = trim($_POST['projectType'] ?? '');
$message     = trim($_POST['message'] ?? '');

// 4. Einfache Validierung
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
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors)
    ]);
    exit;
}

// 5. Mail vorbereiten
$to      = 'hello@lumencat.de'; // <- hier deine Ziel-Adresse eintragen
$subject = 'Neue Anfrage über das Kontaktformular (lumencat.de)';

// Ich baue mir einen klaren Textkörper
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
    "Gesendet von lumencat.de am " . date('d.m.Y H:i') . " Uhr."
];

$body = implode("\n", $bodyLines);

// Header: From sollte eine Domain verwenden, die zu deinem Hosting passt
$fromEmail = 'no-reply@lumencat.de'; // ggf. anpassen oder echte Mailbox anlegen
$headers   = [];

$headers[] = 'From: Lumencat Website <' . $fromEmail . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=utf-8';

$headersString = implode("\r\n", $headers);

// 6. Mail versenden
$success = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headersString);

if (!$success) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Die E-Mail konnte nicht gesendet werden. Bitte versuch es später noch einmal oder schreib direkt an hello@lumencat.de.'
    ]);
    exit;
}

// 7. Hook zu n8n – Webhook ist aktiv
$n8nWebhookUrl = 'https://automation.lumencat.de/webhook/81c2e7ea-90b3-4919-8d75-9726cf88d9ad';
if ($n8nWebhookUrl !== '') {
    // Ich sende die Daten zusätzlich an n8n (ohne die Antwort abzuwarten).
    $payload = json_encode([
        'name'        => $name,
        'email'       => $email,
        'phone'       => $phone,
        'projectType' => $projectType,
        'message'     => $message,
        'source'      => 'lumencat.de'
    ]);

    $ch = curl_init($n8nWebhookUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_RETURNTRANSFER => false,
        CURLOPT_TIMEOUT        => 2,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_POSTFIELDS     => $payload,
    ]);
    curl_exec($ch);
    curl_close($ch);
}

// 8. Erfolgs-Antwort
echo json_encode([
    'success' => true,
    'message' => 'Danke für deine Nachricht! Ich melde mich so schnell wie möglich.'
]);

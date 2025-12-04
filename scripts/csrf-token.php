<?php
// Lumencat – CSRF Token Generator
// Returns a JSON response with a new CSRF token

session_start();
header('Content-Type: application/json; charset=utf-8');

// Generate secure CSRF token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

echo json_encode([
    'success' => true,
    'csrf_token' => $_SESSION['csrf_token']
]);

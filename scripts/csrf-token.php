<?php
session_start();

if (empty($_SESSION['csrf_token'])) {
  $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0, private');
header('Pragma: no-cache');

echo json_encode([
  'success' => true,
  'csrf_token' => $_SESSION['csrf_token']
]);

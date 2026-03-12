<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.',
    ]);
    exit;
}

$rawBody = file_get_contents('php://input');
$decoded = json_decode($rawBody ?: '', true);
$input = is_array($decoded) ? $decoded : $_POST;

function clean_input(mixed $value): string
{
    return trim(str_replace(["\r", "\n", "\0"], ' ', (string) $value));
}

$name = clean_input($input['name'] ?? '');
$email = clean_input($input['email'] ?? '');
$subject = clean_input($input['subject'] ?? '');
$message = trim((string) ($input['message'] ?? ''));
$website = clean_input($input['website'] ?? '');

if ($website !== '') {
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully!',
    ]);
    exit;
}

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'All fields are required.',
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid email address.',
    ]);
    exit;
}

if (strlen($name) > 120 || strlen($email) > 200 || strlen($subject) > 200 || strlen($message) > 5000) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'One or more fields are too long.',
    ]);
    exit;
}

$recipient = 'akrmwashim09@gmail.com';
$siteDomain = 'washimakram.com';
$mailSubject = '[washimakram.com] ' . $subject;
$mailBody = implode("\n", [
    'New portfolio contact form submission',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Subject: ' . $subject,
    '',
    'Message:',
    $message,
    '',
    'Sent from: https://washimakram.com/contactme',
]);

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Washim Akram Website <no-reply@' . $siteDomain . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = mail($recipient, $mailSubject, $mailBody, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Message could not be delivered right now. Please email me directly at akrmwashim09@gmail.com.',
    ]);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Message sent successfully!',
]);

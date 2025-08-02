<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$host = 'localhost';
$dbname = 'YHWHjireh';
$username = 'YHWH25';
$password = 'YHWHjireh2025';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Total de libros
    $stmtBooks = $pdo->query("SELECT COUNT(DISTINCT s.submission_id) AS total_books FROM submissions s");
    $totalBooks = $stmtBooks->fetch(PDO::FETCH_ASSOC)['total_books'];

    // Total de autores
    $stmtAuthors = $pdo->query("SELECT COUNT(DISTINCT a.author_id) AS total_authors FROM authors a");
    $totalAuthors = $stmtAuthors->fetch(PDO::FETCH_ASSOC)['total_authors'];

    // Año más antiguo de publicación
    $stmtFirstYear = $pdo->query("SELECT MIN(YEAR(p.date_published)) AS first_year FROM publications p");
    $firstYear = $stmtFirstYear->fetch(PDO::FETCH_ASSOC)['first_year'];

    // Año más reciente de publicación
    $stmtLastYear = $pdo->query("SELECT MAX(YEAR(p.date_published)) AS last_year FROM publications p");
    $lastYear = $stmtLastYear->fetch(PDO::FETCH_ASSOC)['last_year'];

    echo json_encode([
        'status' => 'success',
        'data' => [
            'books' => intval($totalBooks),
            'authors' => intval($totalAuthors),
            'first_year' => $firstYear ? intval($firstYear) : null,
            'last_year' => $lastYear ? intval($lastYear) : null
        ]
    ]);

} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
<?php

session_start();

header('content-type: application/json');

try {

    $usuario = json_decode(file_get_contents('php://input'), true);

    $dsn = 'mysql:host=localhost;dbname=peliculas';
    $user = 'root';
    $password = '';
    $con = new PDO($dsn, $user, $password);

    $sent = $con->prepare('SELECT * FROM usuarios WHERE id = :id AND clave = :clave');
    $sent->execute(['id' => $usuario['id'], 'clave' => $usuario['clave']]);

    $usuarios = $sent->fetchAll();

    http_response_code(200);
    if (count($usuarios) == 1) {
        $_SESSION['usuario'] = $usuario['id'];
        echo json_encode(['resultado' => 'ok']);
    } else {
        echo json_encode(['resultado' => 'error']);
    }

} catch (PDOException $e){
    http_response_code(500);
    echo json_encode([
        'mensaje' => $e->getMessage()
    ]);
}
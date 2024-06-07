<?php

header('content-type: application/json');

try {

    $usuario = json_decode(file_get_contents('php://input'), true);

    $dsn = 'mysql:host=localhost;dbname=peliculas';
    $user = 'root';
    $password = '';
    $con = new PDO($dsn, $user, $password);

    $sent = $con->prepare('INSERT INTO usuarios (id, clave) VALUES (:id, :clave)');
    $sent->execute(['id' => $usuario['id'], 'clave' => $usuario['clave']]);

    http_response_code(200);
    echo json_encode($usuario);

} catch (PDOException $e){
    http_response_code(500);
    echo json_encode([
        'mensaje' => $e->getMessage()
    ]);
}
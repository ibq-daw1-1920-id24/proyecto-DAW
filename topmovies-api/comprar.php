<?php

header('content-type: application/json');
session_start();

try {

    $id_usuario = $_SESSION['usuario'];
    $idsPeliculas = json_decode(file_get_contents('php://input'), true);

    $dsn = 'mysql:host=localhost;dbname=peliculas';
    $user = 'root';
    $password = '';
    $con = new PDO($dsn, $user, $password);

    
    $sent = $con->prepare('INSERT INTO compras (id_pelicula, id_usuario) VALUES (:id_pelicula, :id_usuario)');

    foreach ($idsPeliculas as $idPelicula) {
        $sent->execute(['id_pelicula' => $idPelicula, 'id_usuario' => $id_usuario]);
    }

    http_response_code(200);

} catch (PDOException $e){
    http_response_code(500);
    echo json_encode([
        'mensaje' => $e->getMessage()
    ]);
}
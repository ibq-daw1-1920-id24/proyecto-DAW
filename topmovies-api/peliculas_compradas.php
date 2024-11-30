<?php

header('content-type: application/json');
session_start();

try {

    $id_usuario = $_SESSION['usuario'];
    
    $dsn = 'mysql:host=localhost;dbname=peliculas';
    $user = 'root';
    $password = '';
    $con = new PDO($dsn, $user, $password);

    $sent = $con->prepare('SELECT p.*, c.nombre AS nombre_categoria, 1 as comprada
    FROM peliculas p JOIN categorias c ON p.id_categoria = c.id 
    JOIN compras ON p.id = compras.id_pelicula where compras.id_usuario = :id_usuario');
    $sent->execute(['id_usuario' => $id_usuario]);
    $productos = $sent->fetchAll();

    http_response_code(200);
    echo json_encode($productos);

} catch (PDOException $e){
    http_response_code(500);
    echo json_encode([
        'mensaje' => $e->getMessage()
    ]);
}
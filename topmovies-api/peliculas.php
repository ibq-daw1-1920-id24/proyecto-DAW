<?php

header('content-type: application/json');

try {

    $categoria = $_GET['categoria'];
    
    $dsn = 'mysql:host=localhost;dbname=peliculas';
    $user = 'root';
    $password = '';
    $con = new PDO($dsn, $user, $password);

    $sent = $con->prepare('SELECT p.*, c.nombre AS nombre_categoria FROM peliculas p JOIN categorias c ON p.id_categoria = c.id where p.id_categoria=:categoria');
    $sent->execute(['categoria' => $categoria]);
    $productos = $sent->fetchAll();

    http_response_code(200);
    echo json_encode($productos);

} catch (PDOException $e){
    http_response_code(500);
    echo json_encode([
        'mensaje' => $e->getMessage()
    ]);
}
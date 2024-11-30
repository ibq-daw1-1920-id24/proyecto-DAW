<?php

session_start();
header('content-type: application/json');

try {
    $categoria = $_GET['categoria'];    
    $dsn = 'mysql:host=localhost;dbname=peliculas';
    $user = 'root';
    $password = '';
    $con = new PDO($dsn, $user, $password);

    if (isset($_SESSION['usuario'])) {
        $id_usuario = $_SESSION['usuario'];
        $sent = $con->prepare(
            'SELECT p.*, c.nombre AS nombre_categoria, co.id_usuario is not null as comprada
            FROM peliculas p
            JOIN categorias c ON p.id_categoria = c.id 
            LEFT JOIN compras co ON p.id = co.id_pelicula AND co.id_usuario=:id_usuario 
            where p.id_categoria=:categoria');
        $sent->execute(['categoria' => $categoria, 'id_usuario' => $id_usuario]);
    }
    else {
        $sent = $con->prepare(
            'SELECT p.*, c.nombre AS nombre_categoria, 0 as comprada
            FROM peliculas p
            JOIN categorias c ON p.id_categoria = c.id 
            where p.id_categoria=:categoria');
        $sent->execute(['categoria' => $categoria]);
    }

    $productos = $sent->fetchAll();

    http_response_code(200);
    echo json_encode($productos);

} catch (PDOException $e){
    http_response_code(500);
    echo json_encode([
        'mensaje' => $e->getMessage()
    ]);
}
<?php

header('content-type: application/json');

try {
    
    $dsn = 'mysql:host=localhost;dbname=peliculas';
    $user = 'root';
    $password = '';
    $con = new PDO($dsn, $user, $password);

    $sent = $con->prepare('SELECT id, nombre, descripcion FROM categorias');
    $sent->execute();
    $productos = $sent->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode($productos);

} catch (PDOException $e){
    http_response_code(500);
    echo json_encode([
        'mensaje' => $e->getMessage()
    ]);
}
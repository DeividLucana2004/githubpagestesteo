<?php

$conn = mysqli_connect('localhost', 'root', 'Conejo245', 'notasdb');
 if (!$conn) {
    die('fallo de la conexion' . mysqli_connect_error);
 }
 else{
    echo 'conexion exitosa....XD';
 }

?>
<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "studysync";
$conn = mysqli_connect($servername,$username,$password,$dbname);
$mysqli = new mysqli("localhost" , "root", "" , "studysync");
if($conn)
{
    echo "connection ok";
}
else{
    echo "connection failed";
}

 ?>
 <!-- abc -->


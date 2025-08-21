<?php
//  Conexión a la base de datos (ejemplo con MySQL)
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//  Obtener datos del formulario (ejemplo)
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT); // Encriptar contraseña

//  Insertar datos en la base de datos
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    //  Crear sesión y redirigir
    session_start();
    $_SESSION['user_id'] = $conn->insert_id;
    header("Location: welcome.php"); // Redirigir a página de bienvenida
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>


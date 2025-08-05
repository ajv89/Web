// registrar.php
<?php
// Conexión a la base de datos
$servidor = "mysql.webcindario.com";
$usuario = "prophp"; // Reemplaza con tu usuario de MySQL
$contraseña = "Pandemia2020#"; // Reemplaza con tu contraseña de MySQL
$base_de_datos = "prophp"; // La base de datos que creaste

$conn = new mysqli($servidor, $usuario, $contraseña, $base_de_datos);

// Verificar conexión
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$contraseña = $_POST['contraseña'];
// Encriptar la contraseña !!password_hash( PASSWORD_DEFAULT); 

// Preparar la consulta SQL para insertar el usuario
$sql = "INSERT INTO usuarios (nombre, email, contrasena) VALUES ('$nombre', '$email', '$contraseña')";

// Ejecutar la consulta y verificar si se insertó el usuario
if ($conn->query($sql) === TRUE) {
  echo "Usuario registrado correctamente";
   header('Location: https://ajv89.webcindario.com');
  exit;
} 
else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>



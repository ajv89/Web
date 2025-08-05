// login.php
<?php
session_start(); // Iniciar la sesión

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
$email = $_POST['email'];
$contraseña_ingresada = $_POST['contrasena'];

// Preparar la consulta SQL para buscar al usuario
$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
  // Si el usuario existe, verificar la contraseña
  $usuario = $resultado->fetch_assoc();
  if (password_verify($contraseña_ingresada, $usuario['contrasena'])) {
    // Si la contraseña es correcta, iniciar sesión
    $_SESSION['usuario_id'] = $usuario['id'];
    $_SESSION['usuario_nombre'] = $usuario['nombre'];
    echo "Login exitoso. ¡Bienvenido, " . $usuario['nombre'] . "!";
    // Puedes redirigir a una página de bienvenida con header('Location: bienvenida.php');
//<?php
header('Location: https://ajv89.webcindario.com/');
  exit;
  } else {
    echo "Contraseña incorrecta";
  }
} else {
  echo "Usuario no encontrado";
}

// Cerrar la conexión
$conn->close();
?>



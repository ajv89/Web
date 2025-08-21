document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    var modal = document.getElementById("myModal");

    // Aquí iría la lógica para validar el usuario y contraseña
    // Por ejemplo, comparar con datos almacenados en localStorage o en una base de datos
    if (username === "Usuario" && password === "contra") {
        alert("Login exitoso!");
       modal.style.display = "none"; // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Aquí iría la lógica para registrar el usuario
    // Por ejemplo, guardar los datos en localStorage o en una base de datos
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert("Registro exitoso!");
    } else {
        alert("Por favor, complete todos los campos.");
    }
});




document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    var modal = document.getElementById("myModal");
    let foregi = document.getElementById("regi");
    let ocureg = document.querySelector(".auth-container");
    let registrado= localStorage.getItem("username");
    let pregistrado= localStorage.getItem("password");
    let ingresado= document.querySelector("#myBtn2");

    // Aquí iría la lógica para validar el usuario y contraseña
    // Por ejemplo, comparar con datos almacenados en localStorage o en una base de datos
    if (username === registrado && password === pregistrado) {
        alert("Login exitoso!");
       modal.style.display = "none";
       window.location.href="#";
        // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});//CHEKEADO!!^^

document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
  let foregi = document.getElementById("regi");
    let ocureg = document.querySelector(".auth-container");
    // Aquí iría la lógica para registrar el usuario
    // Por ejemplo, guardar los datos en localStorage o en una base de datos
    if (username && password) {
        localStorage.setItem('username', username);
        //localStorage.setItem('email', username);
        localStorage.setItem('password', password);
        alert("Registro exitoso!");
        modal.style.display = "none";
        foregi.style.display = "none";
       
        ocureg.classList.remove("active");
    } else {
        alert("Por favor, complete todos los campos.");
    }
});
/*let user = document.querySelector(".user-name");
let useReg = 
document.querySelector(".avatar");
*/



// ESTO ES PARA COMENTARIO
let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc ==="images/imag1.jpg") {
    miImage.setAttribute("src", "images/cr.png");
  } else {
    miImage.setAttribute("src", "images/imag1.jpg");
  }
};
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "Ingreso correcto," + miNombre;
}
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.innerHTML = "Que alegria el que vuelvas," + nombreAlmacenado;
}
miBoton.onclick = function () {
  estableceNombreUsuario();
};
let salBoton = document.querySelector(".sal");
let suTitulo = document.querySelector("h2");
function salirUser (){
  let desconectado = "exitoso";
  suTitulo.textContent = "Desconectado" + desconectado;
  alert("Cerrar Seccion")
}
salBoton.onclick = function () {
  salirUser();
};

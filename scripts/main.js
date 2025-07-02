
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
let usuarioA = "Ari";
let usuarioD = "Desconectado";
let usuarioN = "Naru";
let miBoton = document.querySelector("button");
let user = document.querySelector(".user-name");
let useReg = 
document.querySelector(".avatar");
function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
  localStorage.setItem("nombre", miNombre);
  user.textContent = "" + miNombre;

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  alert( "Que alegria el que vuelvas," + nombreAlmacenado);
}
if (usuarioA === miNombre){
  useReg.setAttribute("src","https://fotos.miarroba.com/th/92e1/24688094642468633EFB1E68633D57.webp")
} else if (usuarioN === miNombre){
  useReg.setAttribute("src","https://fotos.miarroba.com/th/5977/2B688094622A68633EF82568633D55.webp")
} else { 
  useReg.setAttribute("src", "https://fotos.miarroba.com/th/b346/2B688094622968633EF72568633D55.webp")}
}

miBoton.onclick = function () {
  estableceNombreUsuario();
};

let salBoton = document.querySelector(".sal");
let usuario = document.querySelector(".user-name");
let usuA = document.querySelector(".avatar");
function salirUser (){
  let desconectado = "Desconectado";
  usuario.textContent = "Usuario " + desconectado;
  alert("Desconexion Exitosa");
  let imgA =
  usuA.getAttribute("src");
  if (usuA === "https://randomuser.me/api/portraits/men/32.jpg") {
    imgA.setAttribute("src","https://fotos.miarroba.com/th/b346/2B688094622968633EF72568633D55.webp")
  } else {
    usuA.setAttribute("src", "https://fotos.miarroba.com/th/b346/2B688094622968633EF72568633D55.webp");
  }
};
salBoton.onclick = function () {
  salirUser();
};

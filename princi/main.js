// ESTO ES PARA COMENTARIO
let miImage = document.getElementById("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "https://fotos.miarroba.com/me/49ce/3868C594F931685E187F2F685E187D.webp"){
    miImage.setAttribute("src", "https://fotos.miarroba.com/th/5f7d/3868C594F929685E18802F685E187D.png");
    console.log("Cambio imagen If");
  } else {
    miImage.setAttribute("src","https://fotos.miarroba.com/me/49ce/3868C594F931685E187F2F685E187D.webp");
    console.log("Cambio imagen else");
  }
};
// DATOS LOGIN
//const username= document.getElementById('loginUsername').value;
var username= localStorage.getItem("username");
console.log(localStorage.getItem("username"));
let usuarioA = "Aaa";
let usuarioD = "DInvitado";
let usuarioR = "Reg";
let miBoton = document.getElementById("be")
//document.querySelector("button");
let user = document.querySelector(".user-name");
let useReg = 
document.querySelector(".avatar");
let ingresado= document.querySelector("#myBtn2");
let btnSal= document.querySelector("#btnSal");
function estableceNombreUsuario() {
 //let miNombre = prompt("Por favor, ingresa tu nombre.");
//  let usuario= get
  let miNombre= localStorage.getItem("username");

/*//localStorage.setItem("username", miNombre);*/
  
  user.textContent = "" + miNombre;
if (!localStorage.getItem("username")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("username");
  alert( "Que alegria el que vuelvas," + nombreAlmacenado);
  console.log("nombre almacenado :"+ nombreAlmacenado);
}
if (usuarioA === miNombre){
  useReg.setAttribute("src","https://fotos.miarroba.com/th/92e1/24688094642468633EFB1E68633D57.webp")
 // "images/A1.jpg")
} else if (usuarioR === miNombre){
  useReg.setAttribute("src","images/naru.jpg")
//"https://fotos.miarroba.com/th/5977/2B688094622A68633EF82568633D55.webp"
  
} else { 
  useReg.setAttribute("src","images/fa.jpg")}
  //https://fotos.miarroba.com/th/b346/2B688094622968633EF72568633D55.webp")
}

miBoton.onclick = function () {
  estableceNombreUsuario();
   ingresado.style.display = "none";
  btnSal.style.display = "flex";
};
// Desconectar
let salBoton = document.querySelector(".sal");
let usuario = document.querySelector(".user-name");
let usuA = document.querySelector(".avatar");
function salirUser (){
  
  let desconectado = "Desconectado";
  usuario.textContent = "Usuario " + desconectado;
  console.log("boton salir accionado line65");
  btnSal.style.display = "none";
  alert("Desconexion Exitosa");
  let imgA =
  usuA.getAttribute("src");
  if (usuA === "images/32.jpg"){
    imgA.setAttribute("src","https://fotos.miarroba.com/th/b346/2B688094622968633EF72568633D55.webp");
//localStorage.removeItem("username", miNombre);
    console.log("Desconectado con exito");
console.log(localStorage.getItem("username"));
  } else {
    usuA.setAttribute("src", "https://randomuser.me/api/portraits/men/32.jpg");/* "https://randomuser.me/api/portraits/men/32.jpg"*/
    //localStorage.removeItem("username");
  }
};
salBoton.onclick = function () {
  salirUser();  localStorage.setItem("Des",username);
   ingresado.style.display = "";
  console.log("Funcion salVoton o salirUser line82");  
  console.log(localStorage.getItem("username"));
};
// ventana emergente usuario
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// dmDISPLAY FORMULARIO
const regi = document.querySelector("#showRegister");
const loga= document.querySelector("#showLogin");
const cont = document.querySelector(".auth-container");
const reg2 = document.querySelector("#regi")

loga.addEventListener("click", () => 
cont.classList.remove("active"));

regi.addEventListener("click", () => 
cont.classList.add("active"));

regi.onclick = function() {
  reg2.style.display = "block";}


//Selection listado
function redireccion() {
            var selectElement = document.getElementById("seleccion");
            var url = selectElement.value;
  // Si el valor no está vacío, redirige
            if (url) {
                alert("cambiando paguina");
              window.location=url;
            }
        };

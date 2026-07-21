const btn = document.getElementById("mv");
const bto= document.querySelector(".bto");
const box = document.querySelector(".hidden");
const video = document.querySelector(".v1");

btn.addEventListener("click", () => 
box.classList.remove("hidden"));

bto.addEventListener("click", () => 
box.classList.add("hidden"));

video.addEventListener("click", () => video.pause());

box.addEventListener("click", () => box.classList.add("hidden"));

const cavE = document.querySelector(".cavE");
const cavO= document.querySelector(".cavO");
const fot = document.querySelector(".can");

cavE.addEventListener("click", () => 
fot.classList.remove("can"));

cavO.addEventListener("click", () => 
fot.classList.add("can"));

fot.addEventListener("click", () => fot.classList.add("can"));

/* Video */
const cav1 = document.querySelector(".cav1");
const cav2= document.querySelector(".cav2");
const fot1 = document.querySelector(".can2");

cav1.addEventListener("click", () => 
fot1.classList.remove("can2"));

cav2.addEventListener("click", () => 
fot1.classList.add("can2"));

fot1.addEventListener("click", () => fot1.classList.add("can2"));

console.log("VIDEO");
console.log(location.href);
console.log(location.origin);
console.log(localStorage);
console.log(localStorage.getItem("username"));

const valorRecuperado = localStorage.getItem("username");
console.log(valorRecuperado);
const userName = valorRecuperado;
const name = document.querySelector(".user-name");
name.textContent = "" + userName;

const ingresado= document.querySelector("#myBtn2");
if (localStorage.getItem("username")) {
	ingresado.style.display = "none";
	} else {
		ingresado.style.display = "block";
	}


// ventana emergente usuario
/*var modal = document.getElementById("myModal");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];

btn2.onclick = function() {
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
*/
//Selection listado
function redireccion() {
            var selectElement = document.getElementById("seleccion");
            var url = selectElement.value;
  // Si el valor no está vacío, redirige
            if (url) {
                alert("cambiando paguina");
              window.location=url;
            }
        }
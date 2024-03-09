let btnLlamar = document.getElementById("btnLlamarverMas");
let btnMostrar = document.getElementById("contMostrarVerMas");

let btnClear = document.getElementById("btnClear");


// Mostrar Info!! 
btnLlamar.addEventListener("click", function () {
  btnMostrar.classList.toggle("containerVermas-TOOGLE");
});



btnClear.addEventListener('click',function(){
    btnMostrar.classList.toggle("containerVermas-TOOGLE");
});
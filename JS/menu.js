const botonMenu=document.querySelector(".menu_boton_bars");
//const botonMenu=document.querySelector(".barras");
//const menu=document.querySelector(".navegacion_bottom");
const menu=document.querySelector(".cabeza-bottom");

botonMenu.addEventListener("click", function(){
  menu.classList.toggle("mostrar")
})


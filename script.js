// Funcion que muestra un mensaje cuando se presiona el boton
function saludo() { 
  // alert muestra un cuadro de diálogo con un mensaje en el navegador
  alert("Gracias por visitar mi pagina"); 
}
function enviarFormulario(event) {
  event.preventDefault(); // evita que la página se recargue
  alert("Gracias por enviar tu mensaje 😊");
}

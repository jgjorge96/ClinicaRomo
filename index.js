
// Navbar
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
});

// Turnos whatsapp
function gotowhatsapp() {
    
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var tratamiento = document.getElementById("tratamiento").value;
  var profesional = document.getElementById("profesional").value;
  var fecha = document.getElementById("fecha").value;
  var horario = document.getElementById("horario").value;
  var comentarios = document.getElementById("comentarios").value;

  var url = "https://wa.me/+522713168219?text=" 
  + "Hola! Quiero solicitar un turno" + "%0a"
  + "%0a" + "Nombre del paciente: " + nombre + "%0a"
  + "E-mail: " + email  + "%0a"
  + "Telefono: " + telefono + "%0a"
  + "Tratamiento: " + tratamiento + "%0a"
  + "Profesional: " + profesional + "%0a"
  + "Fecha: " + fecha + "%0a"
  + "Horario: "+horario + "%0a"
  + "%0a" + comentarios; 

  window.open(url, '_blank').focus();
}
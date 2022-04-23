//Contacto whatsapp
function contactwhatsapp() {
    
  var name = document.getElementById("nombre").value;
  var mail = document.getElementById("email").value;
  var tel = document.getElementById("telefono").value;
  var comment = document.getElementById("comentarios").value;

  var url = "https://wa.me/+522713168219?text=" 
  + "Hola! Quiero realizar una consulta" + "%0a"
  + "%0a" + "Nombre: " + name + "%0a"
  + "Email: " + mail  + "%0a"
  + "Telefono: " + tel + "%0a"
  + "%0a" + comment; 

  window.open(url, '_blank').focus();
}
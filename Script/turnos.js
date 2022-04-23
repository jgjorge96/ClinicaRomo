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
    + "%0a" + "Nombre del Paciente: " + nombre + "%0a"
    + "Email: " + email  + "%0a"
    + "Telefono: " + telefono + "%0a"
    + "Tratamiento: " + tratamiento + "%0a"
    + "Profesional: " + profesional + "%0a"
    + "Fecha: " + fecha + "%0a"
    + "Horario: "+horario + "%0a"
    + "%0a" + comentarios; 

    window.open(url, '_blank').focus();
}
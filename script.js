document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let mensajeRespuesta = document.getElementById("mensajeRespuesta");

    if (nombre === "" || email === "" || mensaje === "") {
        mensajeRespuesta.textContent = "Todos los campos son obligatorios.";
        mensajeRespuesta.style.color = "red";
        return;
    }

    fetch("contacto.php", {
        method: "POST",
        body: new FormData(this),
    })
    .then(response => response.text())
    .then(data => {
        mensajeRespuesta.textContent = data;
        mensajeRespuesta.style.color = "green";
    })
    .catch(error => {
        mensajeRespuesta.textContent = "Error al enviar el mensaje.";
        mensajeRespuesta.style.color = "red";
    });
});

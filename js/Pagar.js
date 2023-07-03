//PRIMERO VALIDAMOS INFORMACIÓN DEL FORMULARIO
  // Validar el formulario

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtener los valores de los campos
  var numero_tarjeta = document.getElementById("numero_tarjeta").value;
  var nombre_tarjeta = document.getElementById("nombre_tarjeta").value;
  var fecha_tarjeta = document.getElementById("fecha_tarjeta").value;
  var CVV = document.getElementById("CVV").value;
  var email = document.getElementById("email").value;


  // Restablecer los mensajes de error
  //var errorName = document.getElementById("errorName");
  //var errorEmail = document.getElementById("errorEmail");
  //errorName.textContent = "";
  //errorEmail.textContent = "";

  var isValid = true;

  if (numero_tarjeta === "") {
    errorName.textContent = "Por favor, ingresa tu numero de tarjeta";
    isValid = false;
  }

  if (nombre_tarjeta === "") {
    errorName.textContent = "Por favor, ingresa tu nombre";
    isValid = false;
  }

  if (fecha_tarjeta === "") {
    errorName.textContent = "Por favor, ingresa tu fecha de tarjeta ";
    isValid = false;
  }

  if (CVV === "") {
    errorName.textContent = "Por favor, ingresa tu CVV ";
    isValid = false;
  }

  if (email === "") {
    errorEmail.textContent = "Por favor, ingresa tu correo electrónico";
    isValid = false;
  } else if (!isValidEmail(email)) {
    errorEmail.textContent = "Por favor, ingresa un correo electrónico válido";
    isValid = false;
  }


  
if (isValid) {
  document.getElementById("completar_pago").addEventListener("click", function() {
    var popup = window.open("", "Popup", "width=400,height=300");

      // Contenido de la ventana emergente
      var popupContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Confirmación de Reserva</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              padding-top: 50px;
            }
          </style>
        </head>
        <body>
        <h2>Reserva confirmada! </h2>
        <p>Te esperamos! </p>
        <button onclick="closePopup()">Volver a pagina principal</button>
        <script>
          function closePopup() {
            window.opener.location.href = "index.html"; // Redireccionar a la página principal
            window.close(); // Cerrar el popup
          }
        </script>
        </body>
        </html>
      `;

      popup.document.write(popupContent);
  });
}


});

function isValidEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

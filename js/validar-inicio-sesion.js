// Capturamos elementos
const btnLogin = document.getElementById("btnIniciarSesion");
const nickname = document.getElementById("nickname");
const password = document.getElementById("password");

const errorNickname = document.getElementById("errorNickname");
const errorPassword = document.getElementById("errorPassword");

// limpiar los errores
function limpiarErrores() {
  errorNickname.textContent = "";
  errorPassword.textContent = "";
}

// validación al hacer click
btnLogin.addEventListener("click", function() {
  limpiarErrores();
  let errores = false;

  // validar nombre de usuario
  if(nickname.value.trim() === "") {
    errorNickname.textContent = "Por favor ingresa tu nombre de usuario";
    errores = true;
  }

  // validar contraseña
  if(password.value.trim() === "") {
    errorPassword.textContent = "Por favor ingresa tu contraseña";
    errores = true;
  }

  // simular un fallo al rellenar los datos porque no se pueden guardar todavia
  if(!errores) {
    errorNickname.textContent = "Nombre de usuario no reconocido";
    errorPassword.textContent = "Contraseña no reconocida";
  }
});

// Capturamos elementos
const btnCrear = document.getElementById("btnCrearCuenta");
const nombre = document.getElementById("NombreCompleto");
const nickname = document.getElementById("Nickname");
const email = document.getElementById("Email");
const password = document.getElementById("Password");

// Divs para mostrar errores
const errorNombre = document.getElementById("errorNombre");
const errorNickname = document.getElementById("errorNickname");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

// limpiar errores
function limpiarErrores() {
  errorNombre.textContent = "";
  errorNickname.textContent = "";
  errorEmail.textContent = "";
  errorPassword.textContent = "";
}

// validación con click
btnCrear.addEventListener("click", function() {
  limpiarErrores(); // limpiamos errores anteriores
  let errores = false;

  // validar nombre
  if(nombre.value.trim() === "") {
    errorNombre.textContent = "El nombre completo es obligatorio";
    errores = true;
  }

  // validar nombre de usuario
  if(nickname.value.trim() === "") {
    errorNickname.textContent = "El nickname es obligatorio";
    errores = true;
  }

  // validar correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email.value.trim() === "") {
    errorEmail.textContent = "El email es obligatorio";
    errores = true;
  } else if(!emailRegex.test(email.value.trim())) {
    errorEmail.textContent = "El email no es válido";
    errores = true;
  }

  // validar contraseña
  if(password.value === "") {
    errorPassword.textContent = "La contraseña es obligatoria";
    errores = true;
  } else if(password.value.length < 6) {
    errorPassword.textContent = "La contraseña debe tener al menos 6 caracteres";
    errores = true;
  }

  // redirige al main si no hay errores
  if(!errores) {
    alert("Cuenta creada correctamente!");
    // Aquí podrías redirigir, por ejemplo:
    window.location.href = "main.html";
  }
});

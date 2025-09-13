const video = document.getElementById("bg-video-p");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 80;  // -5% a +5%
  let y = (e.clientY / window.innerHeight - 0.5) * 80; // -5% a +5%

  video.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.05)`;
});

//funcion para el buscador

function buscar() {
  const valor = document.getElementById("busqueda").value.toLowerCase();

  if (valor === "astronomia") {
    window.location.href = "astronomia.html";
  } else if (valor === "fisica") {
    window.location.href = "fisica.html";
  } else {
    alert("No se encontró la página para: " + valor);
  }
}


//fue un intento de hacer un quiz mas simple pero no funciono
/*
const botones = document.querySelectorAll(".opcion");

const resultado = document.getElementById("resultado");



botones.forEach(boton => {
  boton.addEventListener("click", () => {
    if (boton.dataset.correcta === "true") {
      resultado.textContent = "¡Correcto!";
      resultado.style.color = "lime";
    } else {
      resultado.textContent = "Incorrecto , intenta de nuevo.";
      resultado.style.color = "red";
    }
  });
});

*/


const preguntas = [
  {
    pregunta: "1. ¿Cuál de las siguientes afirmaciones sobre la Luna es correcta?",
    opciones: [
      { texto: "A) La Luna emite luz propia debido a su calor interno", correcta: false },
      { texto: "B) La Luna cambia de tamaño según la estación del año", correcta: false },
      { texto: "C) La Luna refleja la luz del Sol y presenta diferentes fases", correcta: true },
      { texto: "D) La Luna orbita alrededor del Sol directamente", correcta: false },
    ]
  },
  {
    pregunta: "2. ¿Cuál de estas opciones describe mejor la diferencia entre un planeta y una estrella?",
    opciones: [
      { texto: "A) Las estrellas son más pequeñas que los planetas", correcta: false },
      { texto: "B) Los planetas producen luz por fusión nuclear", correcta: false },
      { texto: "C) Las estrellas generan luz propia y calor, los planetas reflejan luz", correcta: true },
      { texto: "D) Los planetas siempre son gaseosos, las estrellas siempre son rocosas", correcta: false },
    ]
  },
  {
    pregunta: "3. Si quieres localizar la estrella Polar usando un asterismo conocido, ¿qué constelación debes identificar?",
    opciones: [
      { texto: "A) Orión", correcta: false },
      { texto: "B) Casiopea", correcta: false },
      { texto: "C) Osa Mayor", correcta: true },
      { texto: "D) Can Mayor", correcta: false },
    ]
  },
  {
    pregunta: "4.¿Cuál de las siguientes fases lunares ocurre inmediatamente después del cuarto creciente?",
    opciones: [
      { texto: "A) Gibosa creciente", correcta: true },
      { texto: "B) Cuarto menguante", correcta: false },
      { texto: "C) Luna nueva", correcta: false },
      { texto: "D) Creciente menguante", correcta: false },
    ]
  },
  {
    pregunta: "5. Al observar una noche despejada sin luna, notas un objeto brillante que no titila y que se mueve lentamente respecto a las estrellas. ¿Qué es más probable que estés viendo?",
    opciones: [
      { texto: "A) Una estrella", correcta: false },
      { texto: "B) Un planeta", correcta: true },
      { texto: "C) Un satélite artificial", correcta: false },
      { texto: "D) Una constelación", correcta: false },
    ]
  }
];

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const resultadoEl = document.getElementById("resultado");
const botonSiguiente = document.getElementById("boton-siguiente");

let indicePregunta = 0;

function mostrarPregunta() {
  const q = preguntas[indicePregunta];
  preguntaEl.textContent = q.pregunta;
  opcionesEl.innerHTML = "";

  q.opciones.forEach(opcion => {
    const li = document.createElement("li");
    const boton = document.createElement("button");
    boton.textContent = opcion.texto;
    boton.dataset.correcta = opcion.correcta;
    boton.addEventListener("click", () => comprobarRespuesta(boton));
    li.appendChild(boton);
    opcionesEl.appendChild(li);
  });

  resultadoEl.textContent = "";
}

function comprobarRespuesta(boton) {
  if (boton.dataset.correcta === "true") {
    resultadoEl.textContent = "¡Correcto! ";
    resultadoEl.style.color = "lime";

    indicePregunta++;

    if (indicePregunta < preguntas.length) {
      setTimeout(() => mostrarPregunta(), 1000);
    } else {
      resultadoEl.textContent = "¡Has completado el quiz!!!!!";
      // habilitar botón de avanzar
      botonSiguiente.style.pointerEvents = "auto";
      botonSiguiente.style.opacity = "1";

      document.querySelector(".contenedor-nivel1").style.color = "lime";

    }

  } else {
    resultadoEl.textContent = "Incorrecto , intenta de nuevo.";
    resultadoEl.style.color = "red";
  }
}


mostrarPregunta();


import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let quien = [
    "El canario amarillo",
    "El gato con botas",
    "La vecina cotilla",
    "Mi prima del pueblo",
    "El pesado de mi cuñado",
    "Naruto"
  ];
  let accion = [
    "se fumó",
    "destrozó",
    "cogió una cerilla y la prendió",
    "rompió",
    "cogió la tijera y cortó en trocitos"
  ];
  let que = [
    "mi móvil de última generación",
    "mi coche que está sin pagar",
    "mi billetera que estaba vacía",
    "me rompió el pantalón por el culo"
  ];
  let cuando = [
    "mientras me echaba la siesta",
    "cuando estaba jugando con la Play",
    "mientras veía un episodio",
    "durante mi comida light",
    "mientras estaba disfrutando de otras cosas"
  ];

  function obtenerParteAleatoria(tipo) {
    switch (tipo.toLowerCase()) {
      case "quien":
        return quien[Math.floor(Math.random() * quien.length)];
      case "accion":
        return accion[Math.floor(Math.random() * accion.length)];
      case "que":
        return que[Math.floor(Math.random() * que.length)];
      case "cuando":
        return cuando[Math.floor(Math.random() * cuando.length)];
      default:
        return "Tipo de excusa no válido";
    }
  }

  function mostrarExcusa() {
    const tipoSeleccionado = document.getElementById("tipo").value;
    const resultado = obtenerParteAleatoria(tipoSeleccionado);
    document.getElementById("resultado").textContent = resultado;
  }


  const boton = document.querySelector("button[onclick='mostrarExcusa()']");
  if (boton) {
    boton.addEventListener("click", mostrarExcusa);
  }
};
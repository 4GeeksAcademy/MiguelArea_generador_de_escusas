import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ['El canario amarillo', 'El gato con botas', 'La vecina cotilla', 'Mi prima del pueblo', 'El pesado de mi cuñado','Naruto'];
  let accion = ['se fumo', 'destrozo', 'cogio una cerilla y la prendio', 'rompio', 'cogio la tijera y corto en trocitos'];
  let que = ['mi movil de ultima generacion si hablo con el seguro, pero como sois vosotros os digo que era una mierda', 'mi coche que esta sin pagar', 'mi billetera que estaba vacia por otro lado', 'me rompio el pantalon por el culo, fue el y no tiene nada que con que estuviese apretado'];
  let cuando = ['mientras me echaba la siesta de 3 horas de nada', 'cuando estaba jugando con la play', 'mientras estaba viendo un episiodio solamente de una serie', 'durante mi comida que por cierto era muy ligera y de dieta total', 'mientras estaba disfrutando de otras cosas que no se que sera'];

function generadorescusas(){
  let randomquien = quien[Math.floor(Math.random() * quien.length)];
  let randomaccion = accion[Math.floor(Math.random() * accion.length)];
  let randomque = que[Math.floor(Math.random() * que.length)];
  let randomcuando = cuando[Math.floor(Math.random() * cuando.length)];
  

  return `${randomquien} ${randomaccion} ${randomque} ${randomcuando}`
}

document.getElementById('escusas').innerHTML = generadorescusas();
document.getElementById('Generador de escusas').addEventListener('click', function(){
  document.getElementById('escusas').innerHTML = generadorescusas();
})

  console.log("Hello Rigo from the console!");
};

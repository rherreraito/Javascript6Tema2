/**
 *  Programa: ejercicio14.js
 *  Autor: Rafael Herrera García
 *  Descripción: Manipulación de objetos
 * 
 */
let lista=[{nombre:"Naranja",imagen:"../images/memorama/naranja.jpg"},
           {nombre:"Foco Azul",imagen:"../images/focoazul.png"},
           {nombre:"Dado",imagen:"../images/dado3.jpg"},
           {nombre:"Manzana",imagen:"../images/memorama/manzana.jpg"},
           {nombre:"Foco Rojo",imagen:"../images/focorojo.png"},
           {nombre:"Sensor CNY70",imagen:"../images/cny70.jpg"}
          ];


function cambiaLetrero(){
       var i;
       i=Math.floor(Math.random()*10)%6;
       document.getElementById("letrero").innerHTML=lista[i].nombre;
       document.images[0].src=lista[i].imagen;
}


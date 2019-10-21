/**
 *  Programa: ejercicio13.js
 *  Autor: Rafael Herrera García
 *  Descripción: Manipulación de cadenas
 * 
 */
let nombre;

nombre=prompt("Proporciona tu nombre:","Mi nombre");
document.getElementById("cartelera").innerHTML=nombre;

function cambiaLetrero(){
       nombre=nombre.slice(1,nombre.length)+nombre.substr(0,1)
       document.getElementById("cartelera").innerHTML=nombre;
}


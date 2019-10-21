/**
 *  Programa: ejercicio1.js
 *  Autor: Rafael Herrera García
 *  Descripción: Manejo de variables y su ámbito.
 * 
 */

 let x;

 function formateo(){
     document.write('<h2><center>Varibles y su &aacute;mbito(let)<table border="1">');
     document.write("<theader><th>Variable</th><th>Alcance</th><th>Valor</th><theader>");
 }

 function renglon(val,nomVar,alcance){
     document.write("<tr align='center'><td>");
     document.write(nomVar+"</td><td>"+alcance+"</td><td>"+val+"</td></tr>");
 }

 function variables(val){
     formateo();
     renglon(x,"x","global");
     x=val;renglon(x,"x","global");
     {
         let x=10;renglon(x,"x","local");
     }
     renglon(x,"x","global");
 }

 
 variables(0b01001001);
 renglon(x,"x","global");
 document.write("</table></center></h2>");
/**
 *  Programa: ejercicio1.js
 *  Autor: Rafael Herrera García
 *  Descripción: Operadores relacionales
 * 
 */


 function formateo(){
     document.write('<h2><center>Operadores de manipulaci&oacute;n de bits<table border="1">');
     document.write("<theader><th>val1</th><th>Operador</th><th>val2</th><th>Resultado</th><theader>");
 }

 function renglon(val1,val2,operador,resultado){
     document.write("<tr align='center'><td>");
     document.write(val1+"</td><td>"+operador+"</td><td>"+val2+"</td><td>"+resultado+"</td></tr>");
 }

 function variables(val1){
     formateo();
     renglon("",val1,"~",~val1);
     renglon(val1,2,"<<",val1<<2);
     renglon(-val1,2,">>",-val1>>2);
     renglon(-val1,2,">>>",-val1>>>2);
     renglon(val1,8,"&",val1&8);
     renglon(val1,8,"|",val1|8);
     renglon(val1,8,"^",val1^8);
     document.write("</table></center></h2>");
 }

 
 variables(0b01001001,);
 
 
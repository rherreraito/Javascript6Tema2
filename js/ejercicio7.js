/**
 *  Programa: ejercicio7.js
 *  Autor: Rafael Herrera García
 *  Descripción: Operadores relacionales
 * 
 */


 function formateo(){
     document.write('<h2><center>Operadores l&oacute;gicos<table border="1">');
     document.write("<theader><th>val1</th><th>Operador</th><th>val2</th><th>Resultado</th><theader>");
 }

 function renglon(val1,val2,operador,resultado){
     document.write("<tr align='center'><td>");
     document.write(val1+"</td><td>"+operador+"</td><td>"+val2+"</td><td>"+resultado+"</td></tr>");
 }

 function variables(val1){
     formateo();
     renglon("",true,"!",!true);
     renglon(true,false,"&&",true&&false);
     renglon(false,true,"||",false||true);
     renglon(val1+"!=0x00011","val1+1:val1*2","?",val1!=0x00011?val1+1:val1*2);
     document.write("</table></center></h2>");
 }

 
 variables(0b11011011);
 
 
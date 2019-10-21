/**
 *  Programa: ejercicio1.js
 *  Autor: Rafael Herrera García
 *  Descripción: Manejo de tipos numéricos y expresiones.
 * 
 */

 function formateo(){
     document.write('<h2><center>Operadores aritm&eacute;ticos<table border="1">');
     document.write("<theader><th>num1</th><th>Operador</th><th>num2</th><th>Resultado</th><theader>");
 }

 function renglon(num1,num2,oper,result){
     document.write("<tr align='center'><td>");
     document.write(num1+"</td><td>"+oper+"</td><td>"+num2+"</td><td>"+result+"</td></tr>");
 }

 function expresiones(num1,num2){
     formateo();
     renglon(num1,num2,"+",num1+num2);
     renglon(num1,num2,"-",num1-num2);
     renglon(num1,num2,"*",num1*num2);
     renglon(num1,num2,"/",num1/num2);
     renglon(num1,num2,"%",num1%num2);
     renglon(num1,num2,"**",num1**num2);
     document.write("</table></center></h2>");
 }

 expresiones(0b100010,0x00010);
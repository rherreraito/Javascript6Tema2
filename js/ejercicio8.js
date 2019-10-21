/**
 *  Programa: ejercicio8.js
 *  Autor: Rafael Herrera García
 *  Descripción: Sentencia de selección
 *  Problema: Robot que lee entero de 4 digitos (formato binario) que representan
 *            señal de 4 sensores optico reflexivo, que le permite distinguir
 *            a 1 como blanco y 0 como negro. El programa deberá en función
 *            de este número mostrar cuadros de estos colores.
 */


 function formateo(){
     document.write('<h2><center>El robot observa<table border="1">');
     document.write("<theader><th>Sensor 1</th><th>Sensor 2</th><th>Sensor 3</th><th>Sensor 4</th><theader>");
 }

 function renglon(val1,val2,val3,val4){
     document.write("<tr align='center'>");
     document.write("<td><img src='../images/"+(val1==8?"blanco.jpg'></td>":"negro.jpg'></td>"));
     document.write("<td><img src='../images/"+(val2==4?"blanco.jpg'></td>":"negro.jpg'></td>"));
     document.write("<td><img src='../images/"+(val3==2?"blanco.jpg'></td>":"negro.jpg'></td>"));
     document.write("<td><img src='../images/"+(val4==1?"blanco.jpg'></td>":"negro.jpg'></td>"));
     document.write("</tr></table></center></h2>");
 }

 function leerValor(){
     let texto="Proporciona valor que leen los sensores:[0..1]:";
     let valor,numero;
     do{
         valor=prompt(texto);
         numero=parseInt(valor,2);
         if(!isNaN(numero) && numero<=0b1111)
            break;
         texto="Ha ocurrido un error!!\nProporciona valor que leen los sensores:[0..1]:";
     }while(true);
     return numero;
 }

 function run(){
     let sensores=leerValor();
     let val1=sensores&0b1000,
         val2=sensores&0b100,
         val3=sensores&0b10,
         val4=sensores&0b1;
     formateo();
     renglon(val1,val2,val3,val4);
 }

 
 run();
 
 
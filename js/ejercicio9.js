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

 function renglon(numero){
     document.write("<tr align='center'>");
     document.write("<td><img src='../images/negro.jpg'></td>");
     document.write("<td><img src='../images/negro.jpg'></td>");
     document.write("<td><img src='../images/negro.jpg'></td>");
     document.write("<td><img src='../images/negro.jpg'></td>");
     document.write("</tr></table></center></h2>");
     switch(numero){
         case 0: break;
         case 1: document.images[4].src="../images/blanco.jpg";
                 break;
         case 2: document.images[3].src="../images/blanco.jpg";
                 break;
         case 3: document.images[4].src="../images/blanco.jpg";
                 document.images[3].src="../images/blanco.jpg";
                 break;
         case 4: document.images[2].src="../images/blanco.jpg";
                 break;
         case 5: document.images[2].src="../images/blanco.jpg";
                 document.images[4].src="../images/blanco.jpg";
                 break;
         case 6: document.images[2].src="../images/blanco.jpg";
                 document.images[3].src="../images/blanco.jpg";
                 break;
         case 7: document.images[2].src="../images/blanco.jpg";
                 document.images[3].src="../images/blanco.jpg";
                 document.images[4].src="../images/blanco.jpg";
                 break;
         case 8: document.images[1].src="../images/blanco.jpg";
                 break;
         case 9: document.images[1].src="../images/blanco.jpg";
                 document.images[4].src="../images/blanco.jpg";
                 break;
         case 10:document.images[1].src="../images/blanco.jpg";
                 document.images[3].src="../images/blanco.jpg";
                 break;
         case 11:document.images[1].src="../images/blanco.jpg";
                 document.images[3].src="../images/blanco.jpg";
                 document.images[4].src="../images/blanco.jpg";
                 break;
         case 12:document.images[1].src="../images/blanco.jpg";
                 document.images[2].src="../images/blanco.jpg";
                 break;
         case 13: document.images[1].src="../images/blanco.jpg";
                  document.images[2].src="../images/blanco.jpg";
                  document.images[4].src="../images/blanco.jpg";
                  break;
         case 14: document.images[1].src="../images/blanco.jpg";
                  document.images[2].src="../images/blanco.jpg";
                  document.images[3].src="../images/blanco.jpg";
                  break;
         case 15: document.images[1].src="../images/blanco.jpg";
                  document.images[2].src="../images/blanco.jpg";
                  document.images[3].src="../images/blanco.jpg";
                  document.images[4].src="../images/blanco.jpg";
     }
 }

function valida(v){
   let band=true;
   for(i=0;i<v.length;i++)
        if(v[i]!='0' && v[i]!='1'){
              band=!band;
              break;
        }
   if(band && parseInt(v,2)>0b1111)
      band=!band;
   return band;
}
 function leerValor(){
     let texto="Proporciona valor que leen los sensores:[0..1]:";
     let valor,numero;
     do{
         valor=prompt(texto);
         if(valida(valor)){
           numero=parseInt(valor,2);
           break;
         }
         texto="Ha ocurrido un error!!\nProporciona valor que leen los sensores:[0..1]:";
     }while(true);
     return numero;
 }

 function run(){
     let sensores=leerValor();
     formateo();
     renglon(sensores);
 }

 
 run();
 
 


 
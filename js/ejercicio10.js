/**
 *  Programa: ejercicio10.js
 *  Autor: Rafael Herrera García
 *  Descripción: Operadores relacionales y ciclo while
 * 
 */
let focos=['focoazul.png','focoamarillo.png','focoverde.png','focorojo.png'];
let opcion=false;
let misFocos=[];
let a;

function formateo(){
     a=document.getElementById("retorno");
     document.write('<div id="tablaResultados"><h2><center>Conteo de focos generados<table border="1">');
     document.write("<table border='1'><theader><th>Foco</th><th>Cantidad</th><th>Porcentaje</th><theader>");
 }

 function renglon(i,valor,porcentaje){
    document.write("<tr align='center'><td><img src='../images/"+focos[i]+"' height='50' width='40'></td>");
    document.write("<td>"+valor+"</td><td>"+porcentaje.toFixed(2)+"%</td></tr>");
 }
 function imprimeFinal(){
     document.write("</table></center></h2></div>");
     a.style.position='fixed';
     a.style.bottom='200px';
     a.style.left='600px';
     a.style.width= '300px';
     a.style.border= '3px solid #73AD21';
     document.body.appendChild(a);
 }

 function renglones(fAzul,fAmarillo,fVerde,fRojo){
  let total=fAzul+fAmarillo+fVerde+fRojo;
  renglon(0,fAzul,fAzul*100/total);
  renglon(1,fAmarillo,fAmarillo*100/total);
  renglon(2,fVerde,fVerde*100/total);
  renglon(3,fRojo,fRojo*100/total);
 }


 function calculaFocos(){
     let fAzul=0,
         fAmarillo=0,
         fRojo=0,
         fVerde=0;
    while(misFocos.length!=0){
        switch(misFocos.pop()){
            case 0:fAzul++;break;
            case 1:fAmarillo++;break;
            case 2:fVerde++;break;
            case 3:fRojo++;
        }
    }
    renglones(fAzul,fAmarillo,fVerde,fRojo);
    imprimeFinal();
 }



 function botonSi(){
     let iFoco;
     iFoco=Math.floor(Math.random()*4);
     document.images[0].src='../images/'+focos[iFoco];
     misFocos.push(iFoco);
 }

 function terminar(){
     let boton=document.getElementById("si");
     boton.style.display='none';
     boton=document.getElementById("no");
     boton.style.display='none';
     document.images[0].style.display='none';
     formateo();
     calculaFocos();
 }

 
botonSi();
 
 

 

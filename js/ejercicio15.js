/**
 *  Programa: ejercicio15.js
 *  Autor: Rafael Herrera García
 *  Descripción: Manipulación de objeto Date
 * 
 */

function fecha(f){
       var t='Hoy es ';
       switch(f.getDay()){
              case 0:t+='Domingo ';break;
              case 1:t+='Lunes';break;
              case 2:t+='Martes';break;
              case 3:t+='Miercoles';break;
              case 4:t+='Jueves';break;
              case 5:t+='Viernes';break;
              case 6:t+='Sábado'
       }
       t+=','+f.getDate()+' de ';
       switch(f.getMonth()){
              case 0:t+='enero de';break;
              case 1:t+='febrero de';break;
              case 2:t+='marzo de';break;
              case 3:t+='abril de';break;
              case 4:t+='mayo de';break;
              case 5:t+='junio de';break;
              case 6:t+='julio de';break;
              case 7:t+='agosto de';break;
              case 8:t+='septiembre de';break;
              case 9:t+='octubre de';break;
              case 10:t+='noviembre de';break;
              case 11:t+='diciembre de';
       }
       t+=' '+f.getFullYear();
       return t;
}


function hoy(){
       var ahora= new Date();
       tiempo=document.getElementById("tiempo");
       tiempo.innerHTML=ahora+'<br>'+fecha(ahora);
}


hoy();

/**
 *  Programa: ejercicio12.js
 *  Autor: Rafael Herrera García
 *  Descripción: Operadores relacionales y ciclo for
 * 
 */
let barajas=['fresa.jpg','manzana.jpg','naranja.jpg','pitahaya.jpg','fresa.jpg','manzana.jpg','naranja.jpg','pitahaya.jpg'];
let memorama=[0,0,0,0,0,0,0,0,0];
let banderas=[false,false,false,false,false,false,false,false];

function dibujaTablero(){
    var tablero=document.getElementById('tablero');
    var tabla='<table>';
    var i,j;
    var k=0;
    for(i=0;i<2;i++){
       tabla+='<tr>';
       for(j=0;j<4;j++){
           tabla+='<td><img src="../images/blanco.jpg" height="250" width="240"';
           tabla+=' onclick="muestraImagen('+k+');"></td>';
           k++;
       }
       tabla+='</tr>';
    }
    tabla+='</table>';
    tablero.innerHTML=tabla;
 }

 function esMiembro(valor){
   let  band=false;
   for(j=0;j<=8;j++)
       if(memorama[j]==valor){
          band=true;
          break;
       }
   return band;
 }

function rellenaMemorama(){
  let n;
  let s=0;
  let c;
  let band;
  for(i=0;i<8;i++){
         band=true;
         do{
            n=Math.random();
            n=n<1/8?1:n<2/8?2:n<3/8?3:n<4/8?4:n<5/8?5:n<6/8?6:n<7/8?7:8;
            if(!esMiembro(n)){
                memorama[s]=n;
                band=false;
                s++;
            }  
         }while(band);
      }
}


function muestraImagen(i){
   if(!banderas[i])
       document.images[i].src='../images/memorama/'+barajas[memorama[i]-1];
   else
       document.images[i].src='../images/blanco.jpg';
   banderas[i]=!banderas[i];
}

dibujaTablero();
rellenaMemorama();



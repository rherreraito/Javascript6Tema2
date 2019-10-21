/**
 *  Programa: ejercicio11.js
 *  Autor: Rafael Herrera García
 *  Descripción: Operadores relacionales y ciclo do..while
 * 
 */
let dados=['dado1.jpg','dado2.jpg','dado3.jpg','dado4.jpg','dado5.jpg','dado6.jpg'];
let opcion=false;
let misDados=[];
let res;

function formateo(){
    res='<h2><center>Resultado de los datos';
    res+="<table border='1'><theader><th>Tiro</th><th>Valor</th><th>Gano/Perdio</th><theader>";
 }

 function renglon(i,valor,resultado){
    res+="<tr align='center'><td>"+i+"</td>";
    res+="<td>"+valor+"</td><td>"+resultado+"</td></tr>";
 }
 function imprimeFinal(){
     res+="</table></center></h2>";
     document.getElementById("resultados").innerHTML=res;
 }

 
 function calculaResultado(){
    let c,
        pt=misDados[0];
    if(pt!=7 && pt!=11 && pt!=2 && pt!=3 && pt!=12){
       renglon(1,pt,"");
       c=1;
       do{
          if(pt==misDados[c]){
               renglon(c+1,misDados[c],"Ganaste");
               break;
          }
          if(misDados[c]==7){
              renglon(c+1,misDados[c],"Perdiste");
          }
          c++;
       }while(c<misDados.length);
    }else if(pt==7 || pt==11)
       renglon(1,pt,"Ganaste");
    else if(pt==2 || pt==3 || pt==12)
       renglon(1,pt,"perdiste") 
    imprimeFinal();
 }

 function terminar(){
    document.getElementById("tirar").disabled=true;
    formateo();
    calculaResultado();
}

 function tiroDados(){
     let iDado;
     iDado=Math.floor(Math.random()*6);
     document.images[0].src='../images/'+dados[iDado];
     misDados.push(iDado);
     iDado=Math.floor(Math.random()*6);
     document.images[1].src='../images/'+dados[iDado];
     iDado=iDado+misDados.pop()+2;
     misDados.push(iDado);
     if(iDado==7)
        terminar();
 }


 

 
 

 

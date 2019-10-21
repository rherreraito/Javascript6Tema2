/**
 *  Programa: ejercicio16.js
 *  Autor: Rafael Herrera García
 *  Descripción: Calculadora básica
 * 
 */

let memoria=[]; 

function getNumero(d){
    var valor=document.getElementById('display').value;
    if(valor.length<15 && valor!='0')
        valor+=d;
    else if (valor=='0')
        valor=d;
    document.getElementById('display').value=valor;
}

function ejecuta(oper,temp,valor){
    switch(oper){
        case '+': memoria.push(parseFloat(temp)+parseFloat(valor));
                  break;
        case '-': memoria.push(parseFloat(temp)-parseFloat(valor));
                  break;
        case '/': memoria.push(parseFloat(temp)/parseFloat(valor));
                  break;
        case '*': memoria.push(parseFloat(temp)*parseFloat(valor));
                  break;
        case '**': memoria.push(Math.pow(parseFloat(temp),parseFloat(valor)));
                  break;
        case '%': memoria.push(parseFloat(temp)/100*parseFloat(valor));
                  break;
     }
}

function operacion(o){
   var valor,temp,oper;
   valor=document.getElementById('display').value;
   if (memoria.length==0){
       memoria.push(valor);
   }else{
        oper=memoria.pop();
        temp=memoria.pop();
        ejecuta(oper,temp,valor);
   }
   memoria.push(o);
   document.getElementById('display').value=0;
}

function igual(){
    var valor,temp,oper;
    valor=document.getElementById('display').value;
    if(memoria.length!=0 && memoria.length==2){
        oper=memoria.pop();
        temp=memoria.pop();
        ejecuta(oper,temp,valor);
        document.getElementById('display').value=memoria[0];
        memoria.pop();
    }
}

function limpia(){
    document.getElementById('display').value=0;
    memoria=[];
}

function cal(v){
    switch(v){
         case '0':
         case '1':
         case '2':
         case '3':
         case '4':
         case '5': 
         case '6':
         case '7':
         case '8':
         case '9':getNumero(v);
                  break;
         case '+':
         case '-': 
         case '*':
         case '**':
         case '/':
         case '%': operacion(v);
                   break;
         case '=': igual();  
                   break;
         case 'CE':limpia();  
    }
}

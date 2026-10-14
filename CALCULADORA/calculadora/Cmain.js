"use strict";

import { rl } from './readline.js';
import { Calculadora } from './Calculadora.js';
import{calcumenu}from'./calcumenu.js';
import{pedirNumeros}from'./Procedimientoscalcu.js';
 
  
  async function Cmain(){
    let op=new Array(2);
    let resultado=0;
    let nro;
    let cont=0;
    let arreglo=[];
    const c=new Calculadora();
    console.log("===BIENVENIDOS AL MENU CALCULATOREE===\n");
    console.log("Segun lo que desee introduzca un numero\n");
    
    while(op[0]!=7){
    calcumenu();
     op[0]=Number(await rl.question(''));

     while(op[0]<1||op[0]>7){
        console.log("Error ingresa un numero entre 1 y 7");
        calcumenu();
        op[0]=Number(await rl.question(''));
     }
    
     switch(op[0]){
        case 1:
            arreglo=await pedirNumeros();
            console.log("El resultado de sumar:");
            console.log(c.Resultado());
            for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]+" + ");
              
            }
            console.log("Es.... "+c.sumar(arreglo));
            arreglo=[];
            cont=1;
            break;
        case 2:
              arreglo = await pedirNumeros();
              if(cont===0){
                c.sies(cont,arreglo);
              }
                try {
                    console.log("Resultado:", c.dividir(arreglo));
                } catch (e) {
                    console.log("Error:", e.message);
                }
                arreglo = [];
               cont=1;
            break;
        case 3:
             arreglo=await pedirNumeros();
             if(cont===0){
                c.sies(cont,arreglo);
              }
            console.log("El resultado de multiplicar:");
            console.log(c.Resultado());
            for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]+" + " );
            }
            console.log("Es.... "+c.multiplicar(arreglo));
            arreglo=[];
            cont=1;
            break;
        case 4:
             arreglo=await pedirNumeros();
            console.log("El resultado de restar:");
            console.log(c.Resultado());
            for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]+" + ");
            }
            console.log("Es.... "+c.restar(arreglo));
            arreglo=[];
            cont=1;
            break;
        case 5:
            if(cont===0){
                 console.log("error no hay historial para mostrar lleve a cabo al menos una operacion primero");
             }else{
                c.mostrar();
                cont=0;
             }
            break;
        case 6:
            c.Historia(0);
            break;        
        case 7:
            console.log("gracias por usar la calcu,lo esperamos pronto");
            break;                
     }
    }
     rl.close();
  }
 
Cmain();
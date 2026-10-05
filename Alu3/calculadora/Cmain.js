"use strict";

import { rl } from "../../Tareas_prototipicas/readline.js";
import { calculadora } from "./calculadora.js";
  
  
  
  async function Cmain(){
    let op=0;
    let resultado=0;
    let arreglo=[];
    console.log("===BIENVENIDOS AL MENU CALCULATOREE===\n");
    console.log("Segun lo que desee introduzca un numero\n");
    const miCalculadora = new calculadora();
    
    while(op!=5){
     console.log("1-Para sumar\n");
     console.log("2-Para resta\n");
     console.log("3-Para dividir\n");
     console.log("4-Para multiplicar\n");
     console.log("5-Para salir\n");
     op=Number(await rl.question(''));

     while(op<1||op>5){
        console.log("Error ingresa un numero entre 1 y 5");
        console.log("1-Para sumar");
        console.log("2-Para resta");
        console.log("3-Para dividir");
        console.log("4-Para multiplicar");
        console.log("5-Para salir");
        op=Number(await rl.question(''));
     }
    
     switch(op){
        case 1:
             resultado=await miCalculadora.sumaa(arreglo);
             console.log("\nLa suma de:\n");
             for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]);
             }
             console.log(`da como resultado:${resultado}\n`);
             arreglo = [];
            break;
        case 2:
            resultado=await miCalculadora.resta(arreglo);
             console.log("\nLa resta de:\n");
             for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]);
             }
             console.log(`da como resultado:${resultado}\n`);
             arreglo = [];
            break;
        case 3:
              resultado=await miCalculadora.division(arreglo);
             console.log("\nLa division sucesiva de:\n");
             for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]);
             }
             console.log(`da como resultado:${resultado}\n`);
             arreglo = [];
            break;
        case 4:
             resultado=await miCalculadora.multi(arreglo);
             console.log("\nLa multiplicacion de:\n");
             for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]);
             }
             console.log(`da como resultado:${resultado}\n`);
             arreglo = [];
            break;
        case 5:
            console.log("gracias por usar la calcu,lo esperamos pronto");
            break;                
     }
    }
     rl.close();
  }
 
Cmain();
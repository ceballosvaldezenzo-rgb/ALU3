"use strict";
import {rl} from './readline.js';
import {Tmenu} from './Tmenu.js';
import {agrego} from'./Procedimientos.js';
import{vertareas} from'./Procedimientos.js';
import{mostrar_segun_contenga}from'./Procedimientos.js';
import {Gestor} from './Gestor.js';
//FUNCION MAIN
async function main(){

let arreglo=new Gestor();
let op=[2];
console.log("*******BIENVENIDOS A MANEJO COMO CHANO TU ORGANIZADOR DE TAREAS*******\n");
do{

 Tmenu();
 
 op[0]=Number(await rl.question(''));
 
 while(op[0]<1||op[0]>4){
    console.log("error ingrese un numero del 1 al 4\n");
     Tmenu();
    op[0]=Number(await rl.question(''));
 }
 console.log("usted selecciono la opcion: "+op[0]+"esta seguro que desea continuar?\ningrese 1 para si\ningrese 2 para no\n");
 op[2]=Number(await rl.question(''));
 while(op[2]<1||op[2]>2){
    console.log("error ingrese el numero 1 o el numero 2\n");
    console.log("usted selecciono la opcion: "+op[0]+"\n esta seguro que desea continuar?\ningrese 1 para si\ningrese 2 para no\n");
    op[2]=Number(await rl.question(''));
 } 
 if(op[2]==2){
    op[0]=6;
 }
 switch(op[0]){
    case 1:
            await agrego(arreglo);
        break;
    case 2:
         if(arreglo.cantidad()===0){
            console.log("error opcion inviable en este momento,no hay tareas que mostrar");
         }else{
            await vertareas(arreglo);
         }
        break;
    case 3:
         if(arreglo.cantidad()===0){
            console.log("error opcion inviable en este momento,no hay tareas que mostrar");
         }else{
            await mostrar_segun_contenga(arreglo);
         }
        break;
    case 4:
          console.log("GRACIAS POR USAR MANEJO COMO CHANO TU ORGANIZADOR DE TAREAS, NOS VEMOS.....\n");
        break;            

 }

}while(op[0]!=4);
rl.close();

} 
main();
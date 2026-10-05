import { rl } from "../../Tareas_prototipicas/readline.js";
export class calculadora{
    async sumaa( arreglo){
      let op=1;
      let num=0;
      let cont=1;
      let suma=0;
      

      while(op==1){
        num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
        arreglo.push(num);
        suma=suma+num;

        console.log("ingrese 1 si desea continuar sumando\ningrese 2 si desea dejar de sumar\n");
        op=Number(await rl.question(''));
        while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea continuar sumando\ningrese 2 si desea dejar de sumar\n");
            op=Number(await rl.question(''));
        }
        if(op==1){
          cont=cont+1;  
        }
    }
      return suma;
  }

  async resta(arreglo){
      let op=1;
      let num=0;
      let cont=1;
      let suma=0;
      

      while(op==1){
        num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
        arreglo.push(num);
        if(cont<=1){ 
        suma=num;
        }else{
            suma=suma-num;
        }
        console.log("ingrese 1 si desea continuar restando\ningrese 2 si desea dejar de restar\n");
        op=Number(await rl.question(''));
        while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea continuar restando\ningrese 2 si desea dejar de restar\n");
            op=Number(await rl.question(''));
        }
        if(op==1){
          cont=cont+1;  
        }
    }
      return suma;
  }
  async division(arreglo){
      let op=1;
      let num=0;
      let cont=1;
      let suma=0;
      

      while(op==1){
        num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
        if(cont>1){
            while(num<=0||num>suma){
                console.log(`error, ingrese un numero entre 1 y ${suma}`);
                num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
            }
        } else {
            while(num<=0){
                console.log("error, ingrese un numero positivo");
                num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
            }
        }
        arreglo.push(num);
        if(cont<=1){ 
        suma=num;
        }else{
            suma=suma/num;
        }
        console.log("ingrese 1 si desea continuar dividiendo\ningrese 2 si desea dejar de dividirr\n");
        op=Number(await rl.question(''));
        while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea continuar dividiendo\ningrese 2 si desea dejar de dividir\n");
            op=Number(await rl.question(''));
        }
        if(op==1){
          cont=cont+1;  
        }
    }
      return suma;
  }
   async  multi(arreglo){
      let op=1;
      let num=0;
      let cont=1;
      let suma=0;
      

      while(op==1){
        num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
        arreglo.push(num);
        if(cont<=1){ 
        suma=num*1;
        }
        else{
           suma=suma*num; 
        }
        console.log("ingrese 1 si desea continuar multiplicando\ningrese 2 si desea dejar de multiplicar\n");
        op=Number(await rl.question(''));
        while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea continuar restando\ningrese 2 si desea dejar de restar\n");
            op=Number(await rl.question(''));
        }
        if(op==1){
          cont=cont+1;  
        }
    }
      return suma;
  }

}

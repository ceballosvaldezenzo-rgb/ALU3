import {Tarea} from './Tarea.js';
import{rl} from './readline.js';

export async function agrego(arreglo){
     let titulo;
    let descripcion;
    let fechav;
    let id=0;
    let correcto=false;
    let coinciden=false;
    let op;
    let dia;
    let mes;
    let año;
    let dia_d;
    let mes_d;
    let año_d;
    let fechita=new Date();
    do{
        dia=0;
        mes=0;
        año=0;
       //PIDO TITULO
        correcto=false;
       while(correcto===false){
        try{
            titulo=await rl.question('Titulo:\t');
            if(titulo.trim()=== ""){
                throw new Error("error el titulo no puede estar vacio ni contener espacios\n");
            }
        
         correcto=true;
        }catch(error){
            console.log(error.message);
        }
       }
        
        correcto=false;
        
        //PIDO DESCRIPCION
        while(correcto===false){
        try{
            descripcion=await rl.question('descripcion:\t');
            if(descripcion.trim()===""){
                throw new Error("error la descripcion no puede estar vacia ni contener espacios\n");
            }
        
         correcto=true;
        }catch(error){
            console.log(error.message);
        }
       }
     
       //PIDO FECHA DE VENCIMIENTO
       correcto=false;
      
        while(correcto===false){
        try{
            fechav=await rl.question('fecha de vencimiento en formato dd/mm/aaaa:\t');
            dia=(Number(fechav[0])*10)+(Number(fechav[1]));
            mes=(Number(fechav[3])*10)+(Number(fechav[4]));
            año=(Number(fechav[6]*1000))+(Number(fechav[7])*100)+(Number(fechav[8])*10)+(Number(fechav[9]));
            dia_d = fechita.getDate();
            mes_d = fechita.getMonth() + 1;
            año_d = fechita.getFullYear();
            if((fechav.length!=10) || (fechav[2]!="/") || (fechav[5]!="/") || (fechav.includes(" "))||
                dia<1||dia>31||mes<1||mes>12|(año < año_d) ||
                        (año === año_d && mes < mes_d) ||
                        (año === año_d && mes === mes_d && dia < dia_d)||
                (dia>29&&mes===2)||(dia>30&&mes===4)||(dia>30&&mes===6)||(dia>30&&mes===9)||(dia>30&&mes===11)){
                throw new Error("error ingrese correctamente la fecha \n");
            }
        
         correcto=true;
        }catch(error){
            console.log(error.message);
        }
       }
       
       //Pido id
       correcto=false;
        while(correcto===false){
        try{
            coinciden=false;

            id=Number(await rl.question('ID:\t'));

           
            if(arreglo.existeId(id)===true||id<1||id>1000){
                throw new Error("error el id no es erroneo intentelo nuevamente\n");
            }
        
         correcto=true;
        }catch(error){
            console.log(error.message);
        }
       }
       
       const tareaNueva=new Tarea(titulo,descripcion,fechav,id);
       arreglo.agregar(tareaNueva);
       console.log("tarea agregada correctamente\n");
       console.log("ingrese 1 si desea agregar otra tarea\ningrese 2 si desea dejar de agregar tareas\n");
       op=Number(await rl.question(''));
       while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea agregar otra tarea\ningrese 2 si desea dejar de agregar tareas\n");
            op=Number(await rl.question(''));
        }
        fechita=new Date();

    }while(op!=2);
    }
    export async function vertareas(arreglo){
        let op=[3];
        let n;
        let tareasfiltradas=arreglo;
        do{
          console.log("Acontinuacion se desplegara un menu en donde se le indicara con un numero sus acciones\n");
          console.log("¿Que tareas desea visualizar?");
          console.log("[1]-Para ver todas");
          console.log("[2]-Para ver las tareas pendientes");
          console.log("[3]-Para ver las tareas en curso");
          console.log("[4]-Para ver las tareas terminadas");
          console.log("[5]-Para ver las tareas canceladas");
          console.log("[6]-Para volver al menu principal");
      
          op[0]=Number(await rl.question(''));
          while(op[0]<0||op[0]>6){
            console.log("Error ingrese un numero valido del menu");
            console.log("[1]-Para ver todas");
            console.log("[2]-Para ver las tareas pendientes");
            console.log("[3]-Para ver las tareas en curso");
            console.log("[4]-Para ver las tareas terminadas");
            console.log("[5]-Para ver las tareas canceladas");
            console.log("[6]-Para volver al menu principal");
        
            op[0]=Number(await rl.question(''));
          }
    
          switch(op[0]){
            case 1:
                await devol(arreglo,"todas");
                break;
            case 2:
                 await devol(arreglo,"Pendiente");
                breaj;
            case 3:
                 await devol(arreglo,"En curso");
                  
                break;
            case 4:
                await devol(arreglo,"Terminada");
               
                break;
            case 5:
                await devol(arreglo,"Cancelada");
                
                break;    
            case 6:
                  console.log("Usted esta volviendo al menu");
                break;                
          }
          
    
        }while(op[0]!=6);
         
    }


async function editar(tarea){
    let descripcion;
    let fechav;
    let estado;
    let dificultad;
    let dia;
    let mes;
    let año;
    let correcto=false;
    
    console.log('estas editando la tarea: '+tarea.getTitulo()+'');
    console.log('- Si deseas mantener los valores de un atributo, simplemente dejalo en blanco.\n');
    console.log('-Si deseas dejar en blanco un atributo,escribe un espacio\n');
    descripcion=await rl.question('Edite descripcion: ');
    if(descripcion===""){
      
    }else if(descripcion.trim()===""){
        tarea.setDescripcion("");
    }else{
        tarea.setDescripcion(descripcion.trim());

    }

    while(correcto===false){
        try{
            fechav=await rl.question('Edite fecha de vencimiento:');

            if(fechav === "" || fechav.trim() === ""){
            correcto = true; // Enter o espacio son válidos
        } 
        else {
            dia=(Number(fechav[0])*10)+(Number(fechav[1]));
            mes=(Number(fechav[3])*10)+(Number(fechav[4]));
            año=(Number(fechav[6]*1000))+(Number(fechav[7])*100)+(Number(fechav[8])*10)+(Number(fechav[9]));
            if((fechav.length!=10) || (fechav[2]!="/") || (fechav[5]!="/") || (fechav.includes(" "))||
                dia<1||dia>31||mes<1||mes>12||año<=2026||
                (dia>29&&mes===2)||(dia>30&&mes===4)||(dia>30&&mes===6)||(dia>30&&mes===9)||(dia>30&&mes===11)){
                throw new Error("error ingrese correctamente la fecha \n");
            }
        }
         correcto=true;
        }catch(error){
            console.log(error.message);
        }
    }
    if(fechav===""){
      tarea.setFechav("nn/nn/nnnn");
    }else if(fechav.trim()===""){
        tarea.setFechav("");
    }else{
        tarea.setFechav(fechav);

    }
    estado=await rl.question('Edite el estado([P]endiente / [E]n curso / [T]erminada / [C]ancelada):')
    while(estado.toUpperCase()!="P"&&estado.toUpperCase()!="E"&&estado.toUpperCase()!="T"&&estado.toUpperCase()!="C"&&estado.trim()!=""
          &&estado!=""){
        console.log("Error");
         estado=await rl.question('Edite el estado([P]endiente / [E]n curso / [T]erminada / [C]ancelada):')
    }
    if(estado===""){
       
    }else if(estado.trim()===""){
        tarea.setEstado("Pendiente");
    }else{
    switch(estado.toUpperCase()){
        case "P":
             tarea.setEstado("Pendiente");
            break;
        case "E":
             tarea.setEstado("En curso");
            break;
        case "T":
             tarea.setEstado("Terminada");
            break;
        case "C":
              tarea.setEstado("Cancelada");
            break;            
    }
    }

    dificultad=await rl.question('Edite la dificultad,ingrese [1]Facil,[2]Dificil,[3]Muy dificil');
    while(dificultad !== "1" && dificultad !== "2" && dificultad !== "3" &&
      dificultad !== "" && dificultad.trim() !== ""){
        console.log("Error");
         dificultad=await rl.question('Edite la dificultad,ingrese [1]Facil,[2]Dificil,[3]Muy dificil');
    }
    if(dificultad===""){

    }else if(dificultad.trim()===""){
        tarea.setDificultad(" ☆ ☆ ☆");
    }else{
        switch(dificultad){
            case "1":
                   tarea.setDificultad("⭐ ☆ ☆");
                break;
            case "2":
                   tarea.setDificultad("⭐ ⭐ ☆");
                break;
            case "3":
                  tarea.setDificultad("⭐ ⭐ ⭐");
                break;        
        }
    }
    console.log("Datos guardados correctamente");
    await rl.question('Presionte una tecla para continuar....');

}
export async function mostrar_segun_contenga(arreglo){
   let op;
   let titulo;
  
   do{
     console.log("Ingrese el titulo de la tarea que esta buscando:");
     titulo=await rl.question('');
     while(titulo.trim()===""){
        console.log("Error ingreso invalido");
        console.log("Ingrese el titulo de la tarea que esta buscando:");
        titulo=await rl.question('');
     }
     const encontradas = arreglo.Existetitulo(titulo);
    if(encontradas.length>0){
     for(let i=0;i<encontradas.length;i++){
        console.log(encontradas[i].getTitulo);
     }
    }else{
       console.log("No hay tareas que contengan la palabra "+titulo+" en su titulo");
    }
     console.log("Desea buscar otra tarea que contenga alguna palabra o frase?\nIngrese 1 para si o un 2 para no");
     op=Number(await rl.question(''));
     while(op<1||op>2){
        console.log("Error ingrese un numero valido");
         console.log("Desea buscar otra tarea que contenga alguna palabra o frase?\nIngrese 1 para si o un 2 para no");
     op=Number(await rl.question(''));
     }
   }while(op!=2);
}

async function devol(arreglo, estado) {
    let op = [];
    let tareasfiltradas;

    if (estado.toLowerCase() === "todas") {
        tareasfiltradas=arreglo.obtenerTodas();
        
    } else {
           tareasfiltradas = arreglo.filtrarPorEstado(estado);
    }

    if (tareasfiltradas.length === 0) {
        console.log("No hay tareas para mostrar");
        return;
    }
    for(let i = 0; i < tareasfiltradas.length; i++){
                    console.log("["+(i+1)+"] "+tareasfiltradas[i].getTitulo());
                    console.log("Desea verla al detalle?:");
                    console.log("Ingrese 1 para si o 2 para no");
                    op[1] = Number(await rl.question(''));
                    while(op[1] < 1 || op[1] > 2){
                        console.log("error ingrese un numero valido");
                        console.log("Desea verla al detalle?:");
                        console.log("Ingrese 1 para si o 2 para no");
                        op[1] = Number(await rl.question(''));
                    }
                    if(op[1] === 1){
                        console.log(tareasfiltradas[i].mostrar());
                        console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                        op[2] = await rl.question('');
                        while(op[2] != "E" && op[2] != "e" && op[2] != "0"){
                            console.log("Error ingrese una opcion valida");
                            console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                            op[2] = await rl.question('');
                        }
                        switch(op[2].toUpperCase()){
                            case "E":
                                await editar(tareasfiltradas[i]);
                                break;
                            case "0":
                                await rl.question('Presione una tecla para continuar....\n');
                                break;
                        }
                    }
                }
}
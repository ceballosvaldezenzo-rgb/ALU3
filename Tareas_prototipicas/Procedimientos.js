import {Tarea} from './Tarea.js';
import{rl} from './readline.js';

//EDITO O AGREGO TAREA
export async function agrego(arreglo,es_editar_o_agregar,tarea){
    let descripcion;
    let titulo;
    let id;
    let fechav;
    let fechaedi;
    let estado;
    let dificultad;
    let dia;
    let mes;
    let año;
    let dia_d;
    let mes_d;
    let año_d;
    let existe_id;
    let fechita=new Date();
    let correcto=false;
    
    if(es_editar_o_agregar===1){//SE PIDEN CIERTOS DATOS SI es_editar_o_agregar ES 1,EN ESTE CASO SE ESTARIA AGREGANDO TAREA
        titulo=await rl.question("Ingrese el titulo de su tarea: ");//PIDO EL TITULO
        while(titulo.trim()==""){
            titulo=await rl.question("Error, ingrese un titulo valido: ");
        }
        tarea.TITULO=titulo;
        id=Number(await rl.question("Ingrese un ID unico para su tarea: "));//PIDO ID UNICO
        existe_id=arreglo.existeId(id);
        while(existe_id===true){
            id=Number(await rl.question("Error, ingrese un ID unico para su tarea: "));
            existe_id=arreglo.existeId(id);
        }
        tarea.ID=id;
        

    }else if(es_editar_o_agregar===3){//SI es_editar_o_agregar ES # SIGNIFICA QUE SE ESTA EDITANDO
    console.log('estas editando la tarea: '+tarea.TITULO+'');
    console.log('- Si deseas mantener los valores de un atributo, simplemente dejalo en blanco.\n');
    console.log('-Si deseas dejar en blanco un atributo,escribe un espacio\n');
     estado=await rl.question('Edite el estado([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ')//PIDO ESTADO
    while(estado.toUpperCase()!="P"&&estado.toUpperCase()!="E"&&estado.toUpperCase()!="T"&&estado.toUpperCase()!="C"&&estado.trim()!=""
          &&estado!=""){
        console.log("Error");
         estado=await rl.question('Edite el estado([P]endiente / [E]n curso / [T]erminada / [C]ancelada): ')
    }
     if(estado===""){
       
    }else if(estado.trim()===""){
        tarea.ESTADO="Pendiente";
    }else{
    switch(estado.toUpperCase()){
        case "P":
             tarea.ESTADO="Pendiente";
            break;
        case "E":
             tarea.ESTADO="En curso";
            break;
        case "T":
             tarea.ESTADO="Terminada";
            break;
        case "C":
              tarea.ESTADO="Cancelada";
            break;            
    }
    }


     dificultad=await rl.question('Edite la dificultad, ingrese [1]Facil, [2]Dificil, [3]Muy dificil: ');//PIDO DIFICULTAD
    while(dificultad !== "1" && dificultad !== "2" && dificultad !== "3" &&
      dificultad !== "" && dificultad.trim() !== ""){
        console.log("Error");
         dificultad=await rl.question('Edite la dificultad, ingrese [1]Facil, [2]Dificil, [3]Muy dificil: ');
    }
     tarea.DIFICULTAD=dificultad;
    }

    descripcion=await rl.question('Ingrese descripcion: ');//PIDO DESCRIPCION
    if(descripcion===""){
      
    }else if(descripcion.trim()===""){
        tarea.DESCRIPCION="";
    }else{
        tarea.DESCRIPCION=descripcion.trim();

    }

    while(correcto===false){
        try{
            //PIDO FECHA DE VENCIMIENTO HASTA QUE SEA CORRECTA ESTA NO SERA MAYOR A LA FECHA DE HOY
            fechav=await rl.question('Ingrese fecha de vencimiento (dd/mm/aaaa): ');

            if(fechav === "" || fechav.trim() === ""){
            correcto = true;

            tarea.FECHAVENCIMIENTO=fechav; // Enter o espacio son válidos
        } 
        else {
            dia=(Number(fechav[0])*10)+(Number(fechav[1]));
            mes=(Number(fechav[3])*10)+(Number(fechav[4]));            
            año=(Number(fechav[6]*1000))+(Number(fechav[7])*100)+(Number(fechav[8])*10)+(Number(fechav[9]));
            dia_d = fechita.getDate();
            mes_d = fechita.getMonth() + 1;
            año_d = fechita.getFullYear();
            if((fechav.length!=10) || (fechav[2]!="/") || (fechav[5]!="/") || (fechav.includes(" "))||
                dia<1||dia>31||mes<1||mes>12||año<año_d||año===año_d&&mes<mes_d||dia<dia_d&&mes===mes_d&&año===año_d||
                (dia>29&&mes===2)||(dia>30&&mes===4)||(dia>30&&mes===6)||(dia>30&&mes===9)||(dia>30&&mes===11)){
                throw new Error("error ingrese correctamente la fecha \n");
            }
        }
         correcto=true;

        }catch(error){
            console.log(error.message);
        }
        tarea.FECHAEDICION = new Date()
    }
    if(fechav===""){
      tarea.FECHAVENCIMIENTO="nn/nn/nnnn";
    }else if(fechav.trim()===""){
        tarea.FECHAVENCIMIENTO="";
    }else{
        tarea.FECHAVENCIMIENTO=fechav;

    }
    
  fechaedi=new Date();
  
   if(es_editar_o_agregar===1){
     tarea.FECHACREACION=fechaedi;
     tarea.FECHAEDICION=fechaedi;
     arreglo.agregar(tarea);
   }
   console.log("Datos guardados correctamente");
   await rl.question('Presione ENTER para continuar....');
}
    //VEO TAREAS
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
          while(op[0]<1||op[0]>6){
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
                break;
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
     const encontradas = arreglo.Existetitulo(titulo);//ME DEVUELVE EL ARREGLO CON LAS TAREAS QUE 
                                                      //CONTENGAN ESA PALABRA EN EL TITULO

    if(encontradas.length>0){
     for(let i=0;i<encontradas.length;i++){
        console.log(encontradas[i].TITULO);
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
                    console.log("["+(i+1)+"] "+tareasfiltradas[i].TITULO);
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
                                await agrego(arreglo,3,tareasfiltradas[i]);
                                break;
                            case "0":
                                await rl.question('Presione ENTER para continuar....\n');
                                break;
                        }
                    }
                }
}
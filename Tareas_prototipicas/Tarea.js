export const Tarea = {
  id: 0,
  titulo:"",
  descripcion:"",
  fechav:"",
  fechaCreacion:"",
  fechaEdicion:"",
  estado: "Pendiente",
  dificultad: "⭐☆☆",
  
  //GET Y SET DEL ID
  get ID() {
    return this.id;
  },
  set ID(valor) {
    this.id = valor;
  },

  //GETT Y SET DEL TITULO
  get TITULO() {
    return this.titulo;
  },
  set TITULO(valor) {
    this.titulo = valor;
  },
//GETT Y SET DE LA DESCRIPCION
  get DESCRIPCION() {
    return this.descripcion;
  },
  set DESCRIPCION(valor) {
    this.descripcion = valor;
    
  },

 //GETT Y SET DE LA FECHA DE VENCIMIENTO
  get FECHAVENCIMIENTO() {
    return this.fechav;
  },
  set FECHAVENCIMIENTO(valor) {
    this.fechav = valor;
    
  },
   //GETT Y SET DE LA FECHA DE CREACION
  get FECHACREACION() {
    return this.fechaCreacion;
  },
  set FECHACREACION(valor) {
    this.fechaCreacion= valor;
  },

   //GETT Y SET DE LA FECHA DE EDICION
  get FECHAEDICION() {
    return this.fechaEdicion;
  },
  set FECHAEDICION(valor) {
    this.fechaEdicion = valor;
  },

   //GETT Y SET DEL ESTADO
  get ESTADO() {
    return this.estado;
  },
  set ESTADO(valor) {
    this.estado = valor;
    
  },
   //GETT Y SET DE DIFICULTAD
  get DIFICULTAD() {
    return this.dificultad;
  },
  set DIFICULTAD(valor) {
    if(valor==="1"){
        this.dificultad="⭐☆☆";
    }else  if(valor==="2"){
        this.dificultad="⭐⭐☆";
    }else if(valor==="3"){
        this.dificultad="⭐⭐⭐";
    }else if(valor.trim()===""){
        this.dificultad = "☆☆☆";
    }
  },
   //METODO PARA MOSTRAR LA TAREA
   mostrar(){
    return   `ID:[${this.id}]
              TITULO: ${this.titulo} 
              ESTADO: ${this.estado} 
              DIFICULTAD:${this.dificultad}
              DESCRIPCION:${this.descripcion}
              FECHA VENCIMIENTO:${this.fechav}
              FECHA CREACION:${this.fechaCreacion.toLocaleDateString("es-AR")}
              FECHA DE ULTIMA EDICION:${this.fechaEdicion.toLocaleDateString("es-AR")}
              `;
   }
}
export const Tarea=function(t,descripcion,fechav,id){

    
      this.id=id;
      this.titulo=t;
      this.fechaCreacion=new Date();
      this.fechav=fechav;
      this.descripcion=descripcion;
      this.estado="Pendiente";
      this.fechaEdicion=this.fechaCreacion;
      this.dificultad="⭐ ☆ ☆";     
}

// GETTERS
Tarea.prototype.getId = function () { return this.id; };
Tarea.prototype.getTitulo = function () { return this.titulo; };
Tarea.prototype.getDescripcion = function () { return this.descripcion; };
Tarea.prototype.getFechav = function () { return this.fechav; };
Tarea.prototype.getEstado = function () { return this.estado; };
Tarea.prototype.getDificultad = function () { return this.dificultad; };
Tarea.prototype.getFechaCreacion = function () { return this.fechaCreacion; };
Tarea.prototype.getFechaEdicion = function () { return this.fechaEdicion; };

// SETTERS (cada uno actualiza la fecha de edición)
Tarea.prototype.setDescripcion = function (descripcion) {
    this.descripcion = descripcion;
    this.fechaEdicion = new Date();
};
Tarea.prototype.setFechav = function (fechav) {
    this.fechav = fechav;
    this.fechaEdicion = new Date();
};
Tarea.prototype.setEstado = function (estado) {
    this.estado = estado;
    this.fechaEdicion = new Date();
};
Tarea.prototype.setDificultad = function (dificultad) {
    this.dificultad = dificultad;
    this.fechaEdicion = new Date();
};

// MOSTRAR: usa los getters
Tarea.prototype.mostrar = function () {
    return `TITULO: ${this.getTitulo()}
    ID: ${this.getId()}
    FECHA VENCIMIENTO: ${this.getFechav()}
    DESCRIPCION: ${this.getDescripcion()}
    ESTADO: ${this.getEstado()}
    FECHA CREACION: ${this.getFechaCreacion().toLocaleDateString()}
    FECHA EDICION: ${this.getFechaEdicion().toLocaleDateString()}
    DIFICULTAD: ${this.getDificultad()}`;
};


     


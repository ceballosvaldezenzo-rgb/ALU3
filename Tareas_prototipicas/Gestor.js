export const Gestor=function(){
      this.tareas=[];
}

Gestor.prototype.existeId = function (id) {
    return this.tareas.some(t => t.getId() === id);
};

Gestor.prototype.agregar = function (tarea) {
    if (this.existeId(tarea.getId())) {
        throw new Error("Ya existe una tarea con ese ID");
    }
    this.tareas.push(tarea);
    this.ordenar();
};

Gestor.prototype.ordenar = function () {
    this.tareas.sort((a, b) => a.getTitulo().localeCompare(b.getTitulo()));
};
Gestor.prototype.obtenerTodas = function () {
    return this.tareas;
};
Gestor.prototype.filtrarPorEstado = function (estado) {
    return this.tareas.filter(t => t.getEstado() === estado);
};
   Gestor.prototype.cantidad = function () {
       return this.tareas.length;
   };
   Gestor.prototype.Existetitulo=function(titulo){ 
    return this.tareas.filter(t =>t.getTitulo().toLowerCase().includes(titulo.toLowerCase()));
   };

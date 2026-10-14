export const Gestor={
      tareas:[],


existeId (id) {
    return this.tareas.some(t => t.ID === id);
},

agregar(tarea) {
    if (this.existeId(tarea.ID)) {
        throw new Error("Ya existe una tarea con ese ID");
    }
    this.tareas.push(tarea);
    this.ordenar();
},

 ordenar () {
    this.tareas.sort((a, b) => a.TITULO.localeCompare(b.TITULO));
},

obtenerTodas(){
    return this.tareas;
},

filtrarPorEstado (estado) {
    return this.tareas.filter(t => t.ESTADO === estado);
},
   cantidad () {
       return this.tareas.length;
   },
    Existetitulo(titulo){ 
    return this.tareas.filter(t =>t.TITULO.toLowerCase().includes(titulo.toLowerCase()));
   },
}
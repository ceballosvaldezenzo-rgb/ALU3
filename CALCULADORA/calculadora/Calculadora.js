
export class Calculadora{
    resultado=0;
    historial=[];
    sumar(arr) {
    for (let i = 0; i < arr.length; i++) {
        const anterior = this.resultado;
        this.resultado = anterior + arr[i];
        this.historial.push(`${anterior} + ${arr[i]} = ${this.resultado}`);
    }
    return this.resultado;
}
    
   dividir(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            throw new Error("No se puede dividir por cero");
        }
        const anterior = this.resultado;
        this.resultado = anterior / arr[i];
        this.historial.push(`${anterior} / ${arr[i]} = ${this.resultado}`);
    }
    return this.resultado;
}
    multiplicar(arr){
       for (let i = 0; i < arr.length; i++) {
        const anterior = this.resultado;
        this.resultado = anterior * arr[i];
        this.historial.push(`${anterior}x${arr[i]} = ${this.resultado}`);
    }
    return this.resultado;
        return this.resultado;
    }

     restar(arr){
        for (let i = 0; i < arr.length; i++) {
        const anterior = this.resultado;
        this.resultado = anterior-arr[i];
        this.historial.push(`${anterior} - ${arr[i]} = ${this.resultado}`);
    }
    return this.resultado;
        return this.resultado;
    }
    mostrar(){
        for(let i=0;i<this.historial.length;i++){
            console.log(this.historial[i]);
        }
    }
    Historia(n){
       this.resultado=n;
    }

    sies(n,arr){
        this.resultado=arr;
    }
    Resultado(){
        return this.resultado;
    }
}

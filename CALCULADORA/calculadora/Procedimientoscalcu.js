import {rl} from './readline.js';
export async function pedirNumeros() {
    const numeros = [];
    let seguir;
    do {
        numeros.push(Number(await rl.question("Ingrese numero... ")));
        seguir = Number(await rl.question("1 para ingresar otro numero, 2 para ver el resultado: "));
        while (seguir < 1 || seguir > 2) {
            seguir = Number(await rl.question("Error, ingrese 1 o 2: "));
        }
    } while (seguir !== 2);
    return numeros;
}


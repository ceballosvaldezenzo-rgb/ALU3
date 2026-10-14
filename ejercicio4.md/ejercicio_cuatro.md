Ejercicio 2: Calculadora con clases

Clase y objeto. Armé una clase Calculadora que junta en un solo lugar los datos (el resultado y el historial) y las operaciones (sumar, restar, multiplicar, dividir). En el programa principal creé una calculadora con new Calculadora() y la usé todo el tiempo. Si hiciera falta, podría crear otras calculadoras, cada una con su propio resultado e historial.

Estado propio. La calculadora “recuerda” su resultado y su historial. Cada operación lo actualiza, así el resultado se va acumulando sin tener que pasarlo de una función a otra.

Abstracción. Quien usa la calculadora solo le pide que sume o muestre el historial, sin saber cómo lo hace por dentro.

Encapsulamiento (parcial). Los datos y las operaciones que los modifican están juntos en la misma clase. Pero no usé propiedades privadas, así que desde afuera se podría cambiar el resultado a mano. Está organizado, pero no protegido.

Separación de responsabilidades. La clase solo calcula. Pedir datos, mostrar el menú y el flujo del programa están en otros archivos.

Control de errores. La clase avisa con un error si se intenta dividir por cero, y el programa principal lo atrapa y muestra un mensaje.

No utilicé:

Herencia: hay una sola clase y no había una relación “es un tipo de”. Serviría, por ejemplo, para una calculadora científica basada en esta.
Polimorfismo: no hay varias clases que respondan distinto al mismo pedido, y agregarlo habría complicado el programa sin necesidad.
Atributos privados: no eran necesarios para que funcione, aunque protegerían mejor los datos.


Ejercicio 3: Gestor de tareas con prototipos

Objetos y prototipos. Creé un objeto Tarea que funciona como molde. Cada tarea nueva se crea a partir de ese molde con Object.create(Tarea) y hereda de él sus métodos y valores por defecto (por ejemplo, estado “Pendiente”). Los métodos existen una sola vez y todas las tareas los comparten, mientras que los datos (título, ID, fechas) son propios de cada una.

Herencia prototípica. Es la herencia propia de JavaScript: cada tarea toma lo del molde y puede cambiarlo con sus propios valores.

Getters y setters. Tarea tiene pares para leer y modificar sus datos como si fueran propiedades comunes. El de dificultad es el mejor ejemplo: recibe 1, 2 o 3 y lo convierte en una, dos o tres estrellas, así el formato siempre es el mismo. También es un encapsulamiento parcial, porque los datos internos siguen siendo accesibles directamente.

Composición. El Gestor guarda un arreglo de tareas y las administra (agregar, buscar, filtrar por estado, ordenar), pero no hereda de ellas: la relación es “tiene tareas”, no “es una tarea”. También controla reglas propias, como no permitir IDs repetidos.

Objeto único. Como el programa necesita un solo gestor, lo definí como un único objeto que comparten todos los archivos, de modo que todos trabajan sobre la misma lista de tareas.

Cada cosa en su lugar. La tarea sabe mostrarse, el gestor sabe guardar y buscar, un archivo se ocupa de hablar con el usuario y otro arma el menú. Cada parte se puede modificar sin romper las demás.

No utilicé:

Herencia entre varios niveles: todas las tareas se comportan igual y solo cambian sus datos, así que no hacía falta, por ejemplo, un tipo “tarea urgente” aparte.
Polimorfismo: no hay distintos tipos de tarea que reaccionen diferente a lo mismo.
Constructor con new: usé Object.create porque me permitía escribir los getters y setters de forma directa.
Datos realmente privados: igual que en la calculadora, la protección es parcial.
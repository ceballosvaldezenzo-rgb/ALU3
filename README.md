# Trabajo Práctico: Programación Orientada a Objetos en JavaScript

Trabajo práctico de POO en JavaScript (Node.js), dividido en cuatro ejercicios:

| Ejercicio | Contenido | Archivo / carpeta |
|-----------|-----------|-------------------|
| 1 | Marco teórico: objetos y prototipos en JavaScript | [`Ejercicio1.md`](./Ejercicio1.md) |
| 2 | Calculadora de consola con **clases** | [`calculadora/`](./calculadora) |
| 3 | Organizador de tareas de consola con **prototipos** | [`Tareas_prototipicas/`](./Tareas_prototipicas) |
| 4 | Reflexión: características de la POO usadas en los ejercicios 2 y 3 | [`Ejercicio4.md`](./Ejercicio4.md) |

> Ajustá los nombres de los archivos y carpetas si en tu repositorio se llaman distinto.

---

## Requisitos

- [Node.js](https://nodejs.org) versión 18 o superior (`node -v` para verificar).
- Un archivo `package.json` con el siguiente contenido en la carpeta del proyecto, para poder usar `import`/`export`:

```json
{ "type": "module" }
```

---

## Estructura del proyecto

```
ALU3/
├── package.json
├── Ejercicio1.md                 # Teoría
├── Ejercicio4.md                 # Reflexión sobre POO
├── calculadora/                  # Ejercicio 2
│   ├── Cmain.js                  # Flujo principal y menú
│   ├── Calculadora.js            # Clase Calculadora
│   ├── calcumenu.js              # Menú de opciones
│   ├── Procedimientoscalcu.js    # Pedido de números al usuario
│   └── readline.js               # Entrada por consola
└── Tareas_prototipicas/          # Ejercicio 3
    ├── Tmain.js                  # Flujo principal y menú
    ├── Tarea.js                  # Prototipo (molde) de las tareas
    ├── Gestor.js                 # Objeto que administra las tareas
    ├── Procedimientos.js         # Interacción con el usuario
    ├── Tmenu.js                  # Menú de opciones
    └── readline.js               # Entrada por consola
```

---

## Cómo ejecutar

Desde la carpeta que contiene `package.json`:

```bash
# Ejercicio 2: Calculadora
node calculadora/Cmain.js

# Ejercicio 3: Organizador de tareas
node Tareas_prototipicas/Tmain.js
```

---

## Ejercicio 1: Objetos y prototipos en JavaScript

*(Versión completa en [`Ejercicio1.md`](./Ejercicio1.md))*

### 1. Generalización simbólica: ¿cuáles son las reglas escritas del lenguaje?

- **Objetos y propiedades:** un objeto es una colección de propiedades (clave-valor). Si el valor es una función, la propiedad se convierte en un método.
- **Dos formas de crear objetos:**
  - Objeto literal con `{}`: produce un objeto plano, instancia de `Object`.
  - Función constructora con `new`: permite crear múltiples instancias del mismo tipo.
- **Acceso a propiedades:** mediante notación de puntos (`objeto.propiedad`) o corchetes (`objeto["propiedad"]`). Si la propiedad no existe devuelve `undefined`.
- **Modificación y eliminación:** se modifica asignando un nuevo valor. Si la propiedad no existe, se crea. Para eliminar se usa `delete`.
- **Getters y setters:** métodos especiales con `get` y `set` que permiten encapsular el acceso a propiedades. El getter no recibe parámetros; el setter recibe exactamente uno.
- **Herencia prototípica:** todo objeto tiene un prototipo del que hereda propiedades. Esto forma una cadena que termina en `null`. La búsqueda de propiedades recorre esta cadena.
- **`this`:** hace referencia a la instancia actual del objeto. Su valor depende del contexto de ejecución.
- **Los objetos son referencias:** dos objetos con las mismas propiedades nunca son iguales, porque se comparan por referencia y no por valor.

### 2. Creencias de los profesionales: ¿qué características se creen "mejores" que en otros lenguajes?

- **Flexibilidad del sistema de prototipos:** a diferencia de Java o C++, donde la herencia es rígida y basada en clases, JavaScript permite modificar objetos y prototipos en tiempo de ejecución.
- **Herencia sin clases:** los objetos pueden heredar directamente de otros objetos sin definir una clase intermedia. Es más simple y directo en muchos casos.
- **Sin verificación de tipos en compilación:** cualquier objeto que tenga los métodos necesarios puede usarse en cualquier contexto, sin implementar interfaces formales como en Java.
- **Mezcla de comportamientos:** JavaScript permite combinar comportamientos de múltiples objetos fácilmente, algo que en lenguajes con herencia simple como Java requiere interfaces o patrones complejos.

---

## Ejercicio 2: Calculadora con clases

Calculadora de consola que permite sumar, restar, multiplicar y dividir una lista de números, ver el historial de operaciones y limpiar el resultado. Está implementada con una **clase** (`Calculadora`) que guarda el resultado y el historial.

| Opción | Acción |
|--------|--------|
| 1 | Sumar |
| 2 | Dividir |
| 3 | Multiplicar |
| 4 | Restar |
| 5 | Ver el historial |
| 6 | Limpiar la calculadora |
| 7 | Salir |

La división por cero lanza un error que el programa principal captura y muestra como mensaje.

---

## Ejercicio 3: Organizador de tareas con prototipos

Aplicación de consola para gestionar tareas, hecha con programación orientada a objetos con **prototipos**: cada tarea se crea con `Object.create(Tarea)` y un único objeto `Gestor` administra la lista.

### Funcionalidades

1. **Agregar una tarea:** se piden título, ID único, descripción y fecha de vencimiento (`dd/mm/aaaa`). Toda tarea nueva comienza con estado **Pendiente** y dificultad de **una estrella**. Al terminar, se puede cargar otra.
2. **Mostrar las tareas:** todas, o filtradas por estado (pendiente, en curso, terminada, cancelada). Después de ver una tarea en detalle se ofrece **editarla**.
3. **Buscar tareas:** por una palabra o frase contenida en el título.
4. **Salir.**

### Reglas del programa

- Cada tarea tiene un ID único; no se permiten IDs repetidos.
- El título no puede estar vacío.
- La dificultad se expresa en estrellas, de una a tres.
- Al editar, dejar un campo en blanco mantiene su valor actual; escribir un espacio lo deja vacío.
- Las tareas se mantienen ordenadas por título.
- Los datos viven en memoria: se pierden al cerrar el programa.

### Diseño

- **`Tarea.js`:** objeto literal que funciona como prototipo (molde). Define los valores por defecto, los getters/setters y el método `mostrar()`.
- **`Gestor.js`:** objeto único que contiene el arreglo de tareas y las operaciones sobre él: `agregar`, `existeId`, `ordenar`, `obtenerTodas`, `filtrarPorEstado`, `cantidad` y `Existetitulo`.
- **`Procedimientos.js`:** interacción con el usuario (pedir datos, mostrar listas, editar).
- **`Tmain.js`:** bucle del menú principal.

---

## Ejercicio 4: Características de la POO utilizadas en los ejercicios 2 y 3

*(Versión completa en [`Ejercicio4.md`](./Ejercicio4.md))*

### Ejercicio 2: Calculadora con clases

- **Clase y objeto:** la clase `Calculadora` junta en un solo lugar los datos (resultado e historial) y las operaciones. En el programa principal se crea con `new Calculadora()`. Se podrían crear otras calculadoras, cada una con su propio resultado e historial.
- **Estado propio:** la calculadora "recuerda" su resultado y su historial; cada operación los actualiza, así el resultado se acumula sin pasarlo de una función a otra.
- **Abstracción:** quien la usa solo le pide que sume o muestre el historial, sin saber cómo lo hace por dentro.
- **Encapsulamiento (parcial):** datos y operaciones están juntos en la misma clase, pero no se usaron propiedades privadas, así que desde afuera se podría cambiar el resultado a mano. Está organizado, pero no protegido.
- **Separación de responsabilidades:** la clase solo calcula; pedir datos, mostrar el menú y el flujo del programa están en otros archivos.
- **Control de errores:** la clase avisa con un error si se intenta dividir por cero.

**No utilicé:**
- **Herencia:** hay una sola clase y no había una relación "es un tipo de". Serviría, por ejemplo, para una calculadora científica basada en esta.
- **Polimorfismo:** no hay varias clases que respondan distinto al mismo pedido, y agregarlo habría complicado el programa sin necesidad.
- **Atributos privados:** no eran necesarios para que funcione, aunque protegerían mejor los datos.

### Ejercicio 3: Gestor de tareas con prototipos

- **Objetos y prototipos:** `Tarea` es un objeto que funciona como molde. Cada tarea nueva se crea con `Object.create(Tarea)` y hereda sus métodos y valores por defecto (por ejemplo, estado "Pendiente"). Los métodos existen una sola vez y todas las tareas los comparten; los datos (título, ID, fechas) son propios de cada una.
- **Herencia prototípica:** cada tarea toma lo del molde y puede cambiarlo con sus propios valores.
- **Getters y setters:** permiten leer y modificar los datos como propiedades comunes. El de dificultad recibe 1, 2 o 3 y lo convierte en una, dos o tres estrellas, así el formato siempre es el mismo. También es un encapsulamiento parcial, porque los datos internos siguen siendo accesibles directamente.
- **Composición:** el `Gestor` guarda un arreglo de tareas y las administra (agregar, buscar, filtrar por estado, ordenar), pero no hereda de ellas: la relación es "tiene tareas", no "es una tarea". También controla reglas propias, como no permitir IDs repetidos.
- **Objeto único:** como el programa necesita un solo gestor, es un único objeto que comparten todos los archivos, de modo que todos trabajan sobre la misma lista de tareas.
- **Cada cosa en su lugar:** la tarea sabe mostrarse, el gestor sabe guardar y buscar, un archivo se ocupa de hablar con el usuario y otro arma el menú.

**No utilicé:**
- **Herencia entre varios niveles:** todas las tareas se comportan igual y solo cambian sus datos, así que no hacía falta, por ejemplo, un tipo "tarea urgente" aparte.
- **Polimorfismo:** no hay distintos tipos de tarea que reaccionen diferente a lo mismo. Se podría aplicar creando un tipo de tarea que redefina cómo se muestra, pero en este trabajo todas se comportan igual.
- **Constructor con `new`:** usé `Object.create` porque me permitía escribir los getters y setters de forma directa.
- **Datos realmente privados:** igual que en la calculadora, la protección es parcial.

---

## Autor

Trabajo realizado por **[Tu nombre]** para la materia **[Nombre de la materia]**.

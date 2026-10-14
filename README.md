# Trabajo Práctico: Programación Orientada a Objetos en JavaScript

Trabajo práctico de POO en JavaScript (Node.js), dividido en tres ejercicios:

1. **Ejercicio 1:** marco teórico sobre objetos y prototipos en JavaScript.
2. **Ejercicio 2:** calculadora de consola con **clases**.
3. **Ejercicio 3:** organizador de tareas de consola con **prototipos** (`Object.create`).

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

> Ajustá los nombres de las carpetas si en tu repositorio están organizadas distinto.

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

Calculadora de consola que permite sumar, restar, multiplicar y dividir una lista de números, ver el historial de operaciones y limpiar el resultado.

### Menú

| Opción | Acción |
|--------|--------|
| 1 | Sumar |
| 2 | Dividir |
| 3 | Multiplicar |
| 4 | Restar |
| 5 | Ver el historial |
| 6 | Limpiar la calculadora |
| 7 | Salir |

### Características de POO utilizadas

- **Clase e instanciación:** la clase `Calculadora` agrupa los datos (resultado e historial) y las operaciones. En el programa principal se crea con `new Calculadora()`.
- **Estado propio:** la calculadora recuerda su resultado y su historial; cada operación los actualiza mediante `this`.
- **Abstracción:** quien la usa solo pide `sumar` o `mostrar`, sin conocer cómo se hace por dentro.
- **Encapsulamiento (parcial):** datos y operaciones están juntos en la clase, pero no se usaron propiedades privadas, por lo que el estado se podría modificar desde afuera.
- **Separación de responsabilidades:** la clase solo calcula; la interacción con el usuario está en otros archivos.
- **Control de errores:** `dividir` lanza un error ante una división por cero, y el programa principal lo atrapa con `try/catch`.

### No utilizado

- **Herencia:** hay una sola clase y no existe una relación "es un tipo de". Sería útil, por ejemplo, para una calculadora científica basada en esta.
- **Polimorfismo:** no hay varias clases que respondan distinto al mismo pedido; agregarlo habría complicado el programa sin necesidad.
- **Atributos privados:** no eran necesarios para el funcionamiento, aunque protegerían mejor los datos.

---

## Ejercicio 3: Organizador de tareas con prototipos

Aplicación de consola para gestionar tareas, hecha con programación orientada a objetos con prototipos.

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

- **`Tarea.js`:** objeto literal que funciona como prototipo (molde). Define los valores por defecto, los getters/setters y el método `mostrar()`. Cada tarea se crea con `Object.create(Tarea)`.
- **`Gestor.js`:** objeto único que contiene el arreglo de tareas y las operaciones sobre él: `agregar`, `existeId`, `ordenar`, `obtenerTodas`, `filtrarPorEstado`, `cantidad` y `Existetitulo`.
- **`Procedimientos.js`:** interacción con el usuario (pedir datos, mostrar listas, editar).
- **`Tmain.js`:** bucle del menú principal.

### Características de POO utilizadas

- **Objetos y prototipos:** las tareas heredan métodos y valores por defecto del molde `Tarea`. Los métodos existen una sola vez y se comparten; los datos son propios de cada tarea.
- **Herencia prototípica:** cada tarea toma lo del molde y puede sobrescribirlo con sus propios valores.
- **Getters y setters:** permiten leer y modificar los datos como propiedades comunes. El de dificultad convierte 1, 2 o 3 en una, dos o tres estrellas. El encapsulamiento es parcial, porque los datos internos siguen siendo accesibles.
- **Composición:** el `Gestor` "tiene" tareas y las administra, sin heredar de ellas.
- **Objeto único:** el gestor es un único objeto compartido por todos los módulos, de modo que todos trabajan sobre la misma lista.
- **Responsabilidad única y modularización:** cada archivo y cada objeto se ocupa de una sola cosa, y se usan módulos ES (`import`/`export`).

### No utilizado

- **Herencia entre varios niveles:** todas las tareas se comportan igual y solo cambian sus datos, por lo que no hacía falta un tipo aparte (por ejemplo, "tarea urgente").
- **Polimorfismo:** no hay distintos tipos de tarea que respondan diferente a un mismo pedido. Se podría aplicar creando un tipo de tarea que redefina cómo se muestra.
- **Función constructora con `new`:** se usó `Object.create` sobre un objeto literal, lo que permitió escribir los getters y setters de forma directa.
- **Datos realmente privados:** la protección es parcial, igual que en la calculadora.

---

## Autor

Trabajo realizado por **[Tu nombre]** para la materia **[Nombre de la materia]**.

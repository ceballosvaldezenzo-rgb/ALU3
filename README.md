# Trabajo Práctico - Programación Orientada a Objetos

Este repositorio contiene los ejercicios realizados para practicar **Programación Orientada a Objetos (OOP) en JavaScript**.

Se trabajaron dos formas de implementar OOP:

- **OOP basada en clases:** utilizada en el programa de la calculadora.
- **OOP basada en prototipos:** utilizada en el organizador de tareas.

## 📁 Ejercicio 2 - Calculadora

La calculadora permite realizar diferentes operaciones matemáticas mediante un objeto creado a partir de la clase `calculadora`.

### Operaciones disponibles

- Suma
- Resta
- División
- Multiplicación

La clase `calculadora` contiene los métodos correspondientes a cada operación y luego se crea una instancia mediante `new calculadora()`.

### Archivos principales

- `Cmain.js` → contiene el menú principal del programa.
- `calculadora.js` → contiene la clase `calculadora` y sus métodos.
- `readline.js` → permite recibir datos ingresados por el usuario.

## 📁 Ejercicio 3 - Organizador de tareas

El organizador permite crear, mostrar, buscar, ordenar, editar y administrar tareas.

Para este ejercicio se utilizó **OOP basada en prototipos**.

### Características

Cada tarea contiene información como:

- ID
- Título
- Descripción
- Fecha de vencimiento
- Estado
- Dificultad
- Fecha de creación
- Fecha de edición

Se creó el constructor `Tarea` para representar cada tarea y `Gestor` para administrar el conjunto de tareas.

Los métodos se agregaron mediante `prototype`, por ejemplo:

- `Tarea.prototype.mostrar()`
- `Tarea.prototype.setEstado()`
- `Gestor.prototype.agregar()`
- `Gestor.prototype.ordenar()`
- `Gestor.prototype.filtrarPorEstado()`

### Archivos principales

- `Tmain.js` → programa principal.
- `Tarea.js` → constructor y métodos de las tareas.
- `Gestor.js` → administración de las tareas.
- `Procedimientos.js` → procedimientos relacionados con el menú y las operaciones.
- `Tmenu.js` → menú principal.
- `readline.js` → entrada de datos por consola.

## 🧠 Conceptos de OOP trabajados

Durante los ejercicios se trabajaron principalmente:

- Clases y objetos.
- Constructores.
- Métodos.
- Encapsulamiento.
- Abstracción.
- Prototipos.
- Getters y setters.

No se utilizó **herencia ni polimorfismo**, debido a que los ejercicios no requerían diferentes tipos de objetos que heredaran características o tuvieran diferentes comportamientos para un mismo método.

## ▶️ Cómo ejecutar los proyectos

Es necesario tener **Node.js** instalado.

### Calculadora

Ingresar a la carpeta del proyecto y ejecutar:

```bash
npm start
```

El `package.json` utiliza:

```json
"scripts": {
    "start": "node Cmain.js"
}
```

### Organizador de tareas

Ingresar a la carpeta correspondiente y ejecutar:

```bash
npm start
```

El proyecto utiliza `"type": "module"` para poder trabajar con `import` y `export`.

## 🛠️ Tecnologías utilizadas

- JavaScript
- Node.js
- Programación Orientada a Objetos
- Módulos ES (`import` / `export`)
- Git y GitHub

## 👨‍💻 Autor

Ceballos Enzo.

Trabajo práctico realizado para practicar Programación Orientada a Objetos en JavaScript.

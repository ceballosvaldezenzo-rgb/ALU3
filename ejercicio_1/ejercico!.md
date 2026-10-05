1. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?

Objetos y propiedades — un objeto es una colección de propiedades (clave-valor). Si el valor es una función, la propiedad se convierte en un método.

Dos formas de crear objetos:

Objeto literal con {} — produce un objeto plano instancia de Object
Función constructora con new — permite crear múltiples instancias del mismo tipo

Acceso a propiedades — mediante notación de puntos (objeto.propiedad) o corchetes (objeto["propiedad"]). Si la propiedad no existe devuelve undefined.

Modificación y eliminación — se modifica asignando un nuevo valor. Si la propiedad no existe se crea. Para eliminar se usa delete.

Getters y Setters — métodos especiales con get y set que permiten encapsular el acceso a propiedades. El getter no recibe parámetros, el setter recibe exactamente uno.

Herencia prototípica — todo objeto tiene un prototipo del que hereda propiedades. Esto forma una cadena que termina en null. La búsqueda de propiedades recorre esta cadena.

this — hace referencia a la instancia actual del objeto. Su valor depende del contexto de ejecución.

Los objetos son referencias — dos objetos con las mismas propiedades nunca son iguales porque se comparan por referencia, no por valor.



2.Creencias de los profesionales: ¿Qué características se creen "mejores" que en otros lenguajes?

Flexibilidad del sistema de prototipos — a diferencia de Java o C++ donde la herencia es rígida y basada en clases, JavaScript permite modificar objetos y prototipos en tiempo de ejecución, lo que da más flexibilidad.
Herencia sin clases — los objetos pueden heredar directamente de otros objetos sin necesidad de definir una clase intermedia. Esto es más simple y directo en muchos casos.
JavaScript no verifica tipos en tiempo de compilación, lo que permite que cualquier objeto que tenga los métodos necesarios pueda usarse en cualquier contexto, sin necesidad de implementar interfaces formales como en Java.
JavaScript permite mezclar comportamientos de múltiples objetos fácilmente, algo que en lenguajes con herencia simple como Java requiere interfaces o patrones complejos.
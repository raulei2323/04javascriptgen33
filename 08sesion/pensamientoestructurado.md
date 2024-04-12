<!-- ?Pensamiento estructurado -->

1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre, apellido paterno y apellido materno
    input => Israel Salinas Martínez
    output => I. S. M.
<!-- Analisis del problema -->
Redefinicion:
Se require una funcionalidad que reciba Nombre y Apellidos (Solo un nombre, ambos apellidos y que de los apellidos compuestos se tome en cuenta solo la palabra grande o principal), y que dicha funcionalidad retorne las iniciales de cada elemento.(Ver ejemplo)
Se asume que los nombres son estandares globales, se asume que dichos nombres no seran numeros o simbolos.
(Confirmar!!!)
Se asume que la funcion debe poder funcionar aunque el usuario solo ingrese un nombre y un apellido

Definicion de problemas a solucionar:

Crear funcion para ingresar nombres ya sea por el usuario o por el programador de manera manual.
La funcion deberia poder ser reutilizable.
Debido a que aun no hemos visto input en las clases el programador debera ingresar los datos con el uso de variables.

La funcion recibe varias strings o una sola. De cada elemento se debe extraer o ingresar en una variable las iniciales de cada elemento. En el caso de los apellidos se debe validar que si es un apellido compuesto se tome la incial de la palabra principal.
La funcion debe retornar un string con las iniciales 

Definicion de Herramientas a utilizar:
Funciones
Variables
Strings
string.split
array.slice
if/else
.toString

Solucion A (a implementar)
utilizaremos split para comvertir el string en un array y poder realizar la extraccion de la iniciales o la creacion de una variable con las iniciales.
con el metodo slice se puede tomar la incial de cada elemento del array e ingresarlo en una variable.
Con condicionales if/else se puede validar que de los apellidos compuestos se tome como inicial la palabra principal.
despues con el metodo to string se puede regresar las variables array con las inicales a strings...se concatenan en un resultado y se imprimen.







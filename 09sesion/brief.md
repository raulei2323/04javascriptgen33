/*
    1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
    2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
    3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
    4.- Necesitamos saber la edad promedio de los usuarios
    5.- Necesitamos saber la mayor edad
    6.- Necesitamos saber la menor edad
*/

Redef:
Se nos proporciono un objeto en formato json que tiene una lista de usuarios y la lsita de requerimientos o de problemas a resolver esta bien estructurado
1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
String con solo los elementos nombre y apellido
2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
String con los nombres de los usuarios cuyo vaslor en la propiedad gender sea male
3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
String con los nombres de los usuarios cuyo vaslor en la propiedad gender sea female
4.- Necesitamos saber la edad promedio de los usuarios
Un valor numerico de retorno con la edad promedio de los usuarios
5.- Necesitamos saber la mayor edad
Un string + valor numerico con el valor numerico de la edad mas alta
6.- Necesitamos saber la menor edad
Un string + valor numerico con el valor numerico de la edad mas alta

Desarrollar definiendo herramientas y problemas

1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
String o array con solo los elementos nombre y apellido

Crear funcion para el proceso
Identificar los elementos name y lastname
Seleccionarlos e ingresarlos en un nuevo array que contenga las propiedades de cada usuario.

Herrameintas:
charat
arrays
for 

Solucion:

Crear funcion recibe el parametro users,
Seleccionar la propiedad name y lastname de cada user.
Crear una lista nueva para almacenar ahi las valores seleccionados.
Retornar como array la lista nueva


2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"

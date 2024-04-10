//crear funcion para calcular Indice de masa corporal (IMC) usando funciones si
//?No pondre otras comprobaciones por ahora ya que los valores de los parametros son ingresados por el programador 
//?pero una vez el usuario empiece a ingresar los valores se deben hacer diferentes validaciones como verificar que
//?el usuario ingrese numeros positivos y que estos esten en un rango aceptable ademas indicar como ingresar los valores

 imcCalculator = (weight, height) => {

    imc = weight / (height * height)

    if (imc < 18.5) {
        message = " es tu IMC el cual indica que tienes un peso bajo"
    } else if (imc < 25) {
        message = " es tu IMC el cual indica que tu peso es normal"
    }else if (imc < 30 ) {
        message = " es tu IMC el cual indica que tienes sobre peso"
    }else if (imc > 30 ) {
        message = " es tu IMC el cual indica que tienes obesidad"
    }

    return imc + message
}

console.log(imcCalculator(90, 1.65))

//?los valores se ingresan primero peso en kg y luego altura en metros


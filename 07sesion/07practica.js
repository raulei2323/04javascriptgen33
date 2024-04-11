const phrase = "La mejor forma de predecir el futuro es creándolo"
//?Funcion qprimero convierte el string en un array separandolo por espacios, luego con el index se selecciona...
//?..la palabra segun su index y se cuenta sus letras. 
pWordlettersCount = () => {
    const pwordsToarray = phrase.split(" ")
    const wordLentgh = pwordsToarray[1].length
    console.log(`La palabra "${pwordsToarray[1]}" tiene ${wordLentgh} letras`)

}
pWordlettersCount(phrase)

//?convierte el string a array, slice corta el array y retorna uno nuevo sin la palabra, se convierte a string de nuevo
pWorderaser = () => {
    const pwordsToarray = phrase.split(" ")
    const arrRmword = pwordsToarray.slice(0, -1)
    const newPtoString = arrRmword.toString()
    const toStringfixed = newPtoString.replaceAll(',', ' ')
    console.log(toStringfixed)
}
pWorderaser(phrase)

// shortWordkiller = () => {
//     const pwordsToarray = phrase.split(" ")
//     for (const i in pwordsToarray) {
//         console.log(i)

//     }
// }
// shortWordkiller(phrase)

pharaseReverser = () => {
    const pwordsToarray = phrase.split(" ")
    console.log(pwordsToarray)
    const reversedPharr = pwordsToarray.reverse()
    console.log(reversedPharr)
    const reversedToarray = reversedPharr.toString()
    console.log(reversedToarray)
    const fixedReversedToarray = reversedToarray.replaceAll(',', ' ')
    console.log(fixedReversedToarray)
}
console.log(pharaseReverser(phrase))







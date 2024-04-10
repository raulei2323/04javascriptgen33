
const phrase = "La mejor forma de predecir el futuro es creándolo"

pLength = (phrase) => {
    const phraseLength = phrase.length
    return "Los caracteres en total de la frase son " + phraseLength
}
console.log(pLength(phrase))

pLettercounter = (phrase) => {

    const noWSPhrase = phrase.replaceAll(' ', '')
    const noWSPhraselength = noWSPhrase.length
    return `La frase tiene ${noWSPhraselength} letras`
}
console.log(pLettercounter(phrase))

pUppercase = (phrase) => {

    const pUppercase = phrase.toUpperCase()
    return "Asi se ve la frase con todas las letras mayusculas: " + pUppercase
 }
console.log(pUppercase(phrase))

p4Replacer = (phrase) => {

    const p4Replace = phrase.replaceAll('a', '4')
    return "Asi se ve la frase con todas las letras 'a' reemplazadas por el numero 4: " + p4Replace
}
console.log(p4Replacer(phrase))






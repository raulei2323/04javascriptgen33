const phrase = "La mejor forma de predecir el futuro es creándolo"

pLength = () => {
    const phraseLength = phrase.length
    console.log("Los caracteres en total de la frase son " + phraseLength)
    return
}
pLength(phrase)

pLettercounter = (phrase) => {
    const noWSPhrase = phrase.replaceAll(' ', '')
    const noWSPhraselength = noWSPhrase.length
    console.log(`La frase tiene ${noWSPhraselength} letras`)
    return//solo puse el return para ver que pasaba. como es una funcion que acabo, no pasa nada, en otro tipo de funciones si puede pasar algo
}
pLettercounter(phrase)

pUppercase = (phrase) => {
    const pUppercase = phrase.toUpperCase()
    console.log("Asi se ve la frase con todas las letras mayusculas: " + pUppercase)
 }
pUppercase(phrase)

p4Replacer = (phrase) => {
    const p4Replace = phrase.replaceAll('a', '4')
    console.log("Asi se ve la frase con todas las letras 'a' reemplazadas por el numero 4: " + p4Replace)
}
p4Replacer(phrase)






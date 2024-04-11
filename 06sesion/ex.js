const phrase = "La mejor forma de predecir el futuro es creándolo"

pharaseReverser = () => {
    const pwordsToarray = phrase.split(" ")
    console.log(pwordsToarray)
    const reversedPharr = pwordsToarray.reverse()
    console.log(reversedPharr)
    const reversedToarray = reversedPharr.toString()
    console.log(reversedToarray)
    const fixedReversedToarray = reversedToarray.replaceAll(/,/g, " " )
    console.log(fixedReversedToarray)
}
console.log(pharaseReverser(phrase))
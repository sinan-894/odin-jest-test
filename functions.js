

export function capitalize(string=""){
    const wordArray = string.split(' ')

    wordArray.forEach((word,index)=>{
        wordArray[index] = word[0].toUpperCase() + word.slice(1,word.length)
    })

    return wordArray.join(' ')

}
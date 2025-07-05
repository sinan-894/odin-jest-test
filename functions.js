

export function capitalize(string=""){
    const wordArray = string.split(' ')

    wordArray.forEach((word,index)=>{
        wordArray[index] = word[0].toUpperCase() + word.slice(1,word.length)
    })

    return wordArray.join(' ')

}

export function reverseString(string){
    let reversedStringResult = ""
    for(let i = 0;i<string.length;i++){
        reversedStringResult = string[i] + reversedStringResult
    }

    return reversedStringResult
}
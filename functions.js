

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

export function Calculator(){
    const add = (a,b)=>a+b
    const subtract = (a,b)=>a-b
    const multilply = (a,b)=>a*b
    const divide = (a,b)=>a/b 

    return {add,subtract,multilply,divide}
}
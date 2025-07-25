

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


export function caesarCipher(string='',offset){
    let encryptedString = ""
    for(let i=0;i<string.length;i++){
        encryptedString = encryptedString + caesarEncrypt(string[i],offset)
    }
    return encryptedString
}

function caesarEncrypt(char='',offset){

    if(123>char.charCodeAt(0) && char.charCodeAt(0)>96){
        offset = (char.charCodeAt(0)-97+offset)%26
        return String.fromCharCode(97+offset)
    }
    else if(91>char.charCodeAt(0) && char.charCodeAt(0)>64){
        offset = (char.charCodeAt(0)-65+offset)%26 
        return String.fromCharCode(65+offset)
    }
    else{
        return char
    }
}

export function analyzeArray(array=[]){
    let min = array[0],max = array[0] 
    const sum = array.reduce((prev,curr)=>prev+curr,0)
    console.log(array,array.length)
    const average = sum/ array.length;
    (()=>{
        array.forEach(num=>{
            if(num<min) min = num
            else if(num>max) max = num
        })
    })()
    
    return {average,min,max,length:array.length}
}


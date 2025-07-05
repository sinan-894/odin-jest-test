import { capitalize,reverseString,Calculator,caesarCipher,analyzeArray } from "./functions";



test('Captilize',()=>{
    expect(capitalize('sinan')).toBe('Sinan')
    expect(capitalize('capitilize this')).toBe('Capitilize This')
})

test('Reverse String',()=>{
    expect(reverseString('sinan')).toBe('nanis')
})

test('Calculator',()=>{
    const calculator = Calculator()
    expect(calculator.add(3,4)).toBe(7)
    expect(calculator.multilply(3,4)).toBe(12)
    expect(calculator.subtract(7,4)).toBe(3)
    expect(calculator.divide(4,2)).toBe(2)
})

test('Ceaser Cipher',()=>{
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('Analyze Array',()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})


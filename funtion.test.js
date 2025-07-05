import { capitalize,reverseString,Calculator } from "./functions";



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
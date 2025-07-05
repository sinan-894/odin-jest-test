import { capitalize,reverseString } from "./functions";



test('Captilize',()=>{
    expect(capitalize('sinan')).toBe('Sinan')
    expect(capitalize('capitilize this')).toBe('Capitilize This')
})

test('Reverse String',()=>{
    expect(reverseString('sinan')).toBe('nanis')
})
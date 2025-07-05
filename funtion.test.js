import { capitalize } from "./functions";



test('Captilize',()=>{
    // expect(captilize('sinan')).toBe('Sinan')
    expect(capitalize('capitilize this')).toBe('Capitilize This')
})
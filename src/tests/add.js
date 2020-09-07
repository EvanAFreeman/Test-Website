//always put .test.js so jest can recognize it

const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
})

test('Should return Mike!', () => {
    const name = generateGreeting('Mike');

    expect(name).toBe('Hello Mike!')
})


test('Should return Anonymous!', () => {
    const name = generateGreeting();

    expect(name).toBe('Hello Anonymous!')
})

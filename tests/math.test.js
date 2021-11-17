const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math')

test('testing calc tip', () => {
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
})

test('testing calc tip defautt tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('testing f to c', () => {
    const total = fahrenheitToCelsius(32)
    expect(total).toBe(0)
})

test('testing c to f', () => {
    const total = celsiusToFahrenheit(0)
    expect(total).toBe(32)
})

// test('async test', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })


test('add 2 numbers', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('add 2 numbers', async () => {
    const sum = await add(15, 15)
    expect(sum).toBe(30)
})
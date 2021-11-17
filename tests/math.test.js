const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

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
const { calcularEdad } = require('./calculadora');

describe('calcularEdad', () => {
    test('retorna un número para un año válido', () => {
        expect(typeof calcularEdad(2000)).toBe('number');
    });

    test('retorna null para un año futuro', () => {
        expect(calcularEdad(2030)).toBeNull();
    });

    test('retorna null para un año anterior a 1920', () => {
        expect(calcularEdad(1800)).toBeNull();
    });

    test('retorna null para un input no numérico', () => {
        expect(calcularEdad('abc')).toBeNull();
    });
});

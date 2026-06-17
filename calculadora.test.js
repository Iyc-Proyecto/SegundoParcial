const { calcularEdad } = require('./calculadora');

describe('calcularEdad', () => {
    test('persona nacida en 2000 tiene 26 años', () => {
        expect(calcularEdad(2000)).toBe(26);
    });

    test('persona nacida en 1990 tiene 36 años', () => {
        expect(calcularEdad(1990)).toBe(36);
    });

    test('año inválido retorna null', () => {
        expect(calcularEdad('abc')).toBeNull();
    });

    test('año futuro retorna null', () => {
        expect(calcularEdad(2030)).toBeNull();
    });

    test('año anterior a 1900 retorna null', () => {
        expect(calcularEdad(1800)).toBeNull();
    });
});

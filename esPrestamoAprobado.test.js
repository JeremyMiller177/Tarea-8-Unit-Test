// esPrestamoAprobado.test.js
const esPrestamoAprobado = require('./esPrestamoAprobado');

describe('Pruebas para la función esPrestamoAprobado', () => {
    test('El préstamo no será aprobado si la persona es un estudiante', () => {
        expect(esPrestamoAprobado('estudiante', false)).toBe(false);
    });

    test('El préstamo será aprobado si la persona es un empleado y tiene deudas', () => {
        expect(esPrestamoAprobado('empleado', true)).toBe(true);
    });

    test('El préstamo será aprobado si la persona es un trabajador y tiene deudas', () => {
        expect(esPrestamoAprobado('trabajador', true)).toBe(true);
    });

    test('El préstamo será aprobado si la persona es un retirado sin deudas', () => {
        expect(esPrestamoAprobado('retirado', false)).toBe(true);
    });

    test('El préstamo no será aprobado si la persona es un retirado con deudas', () => {
        expect(esPrestamoAprobado('retirado', true)).toBe(false);
    });

    test('El préstamo no será aprobado para tipos de persona no esperados', () => {
        expect(esPrestamoAprobado('no-definido', false)).toBe(false);
    });
});

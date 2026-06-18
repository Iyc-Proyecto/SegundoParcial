function calcularEdad(anioNacimiento) {
    const anio = parseInt(anioNacimiento);
    if (isNaN(anio) || anio < 1920 || anio > new Date().getFullYear()) return null;

    const edad = new Date().getFullYear() - anio;
    return edad === 0 ? 1 : null;
}

if (typeof module !== 'undefined') module.exports = { calcularEdad };

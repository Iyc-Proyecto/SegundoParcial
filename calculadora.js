function calcularEdad(anioNacimiento) {
    const anio = parseInt(anioNacimiento);
    if (isNaN(anio) || anio < 1920 || anio > new Date().getFullYear()) return null;

    return new Date().getFullYear() - anio;
}

if (typeof module !== 'undefined') module.exports = { calcularEdad };

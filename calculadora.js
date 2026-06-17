function calcularEdad(anioNacimiento) {
    const anio = parseInt(anioNacimiento);
    if (isNaN(anio) || anio < 1900 || anio > new Date().getFullYear()) return null;

    return new Date().getFullYear() - anio;
}

if (typeof module !== 'undefined') module.exports = { calcularEdad };

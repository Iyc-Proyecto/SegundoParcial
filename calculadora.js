function calcularEdad(fechaNacimiento) {
    const fecha = new Date(fechaNacimiento);
    if (isNaN(fecha.getTime())) return null;

    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }

    return edad;
}

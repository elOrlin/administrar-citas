const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// Contenedor para las citas
const contenedorCitas = document.querySelector('#citas');

// Formulario nuevas citas
const formulario = document.querySelector('#nueva-cita')
// Heading
const heading = document.querySelector('#administra');

export {
    mascotaInput, propietarioInput, telefonoInput, fechaInput, 
    horaInput, sintomasInput, contenedorCitas, formulario, heading
}
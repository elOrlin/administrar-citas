import {formulario,  mascotaInput, propietarioInput, telefonoInput, fechaInput, 
    horaInput, sintomasInput} from '../js/selectores.js';
import { nuevaCita, datosCita} from '../js/functiones.js';

// Formulario nuevas citas

formulario.addEventListener('submit', nuevaCita);


// Eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);
}


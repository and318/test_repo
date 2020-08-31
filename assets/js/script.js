
var formulario = document.getElementById("formulario");


formulario.addEventListener("submit", e => {

    var rut = document.getElementById("rut").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var especialidad = document.getElementById("especialidad").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;


    e.preventDefault();


    if (rutValidation() == false) {
        return false;
    } else if (nombreValidation() == false) {
        return false;
    } else if (apellidoValidation() == false) {
        return false;
    } else if (edadValidation() == false) {
        return false;
    } else if (correoValidation() == false) {
        return false;
    } else if (especialidad == "0") {
        alert("El campo es obligatorio, por favor selecciona una ESPECIALIDAD.");
    } else if (fechaValidation() == false) {
        return false;
    } else if (hora == "0") {
        alert("El campo es obligatorio, por favor selecciona una HORA.");
    } else {
        alert(`Estimado(a) ${nombres} ${apellidos}, su hora para ${especialidad} ha sido reservada para el
                    día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita.
                        ¡Gracias por preferirnos!`);
        clear();
    }
});


rutValidation = () => {
    var rut = document.getElementById("rut").value;
    var expresion = /^\d{1,2}\.\d{3}\.\d{3}[-][\dkK]{1}$/gm;
    if (rut === "") {
        alert("El campo es obligatorio, por favor ingresa un RUT.");
        return false;
    } else if (!rut.match(expresion)) {
        alert('El formato del RUT no es válido, por favor intenta nuevamente.');
        return false;
    }
    console.log("RUT: " + rut);
    return true;
}

nombreValidation = () => {
    var nombres = document.getElementById("nombres").value;
    var expresion = /^[a-zA-Z ]{3,35}$/;
    // var exp = /^[a-zA-Z]{3,15}\s[a-zA-Z]{3,15}$/gmi;
    if (nombres === "") {
        alert("El campo es obligatorio, por favor ingresa NOMBRES.");
        return false;
    } else if (!nombres.match(expresion)) {
        alert('Debe ingresar sólo letras, por favor intenta nuevamente.');
        return false;
    }
    console.log("NOMBRES: " + nombres);
    return true;
}


apellidoValidation = () => {
    var apellidos = document.getElementById("apellidos").value;
    var expresion = /^[a-zA-Z ]{3,35}$/;
    if (apellidos === "") {
        alert("El campo es obligatorio, por favor ingresa APELLIDOS.");
        return false;
    } else if (!apellidos.match(expresion)) {
        alert('Debe ingresar solo letras, por favor intenta nuevamente.');
        return false;
    }
    console.log("APELLIDOS: " + apellidos);
    return true;
}

//----------------------- Validación Edad: campo de texto. (validar que se ingrese sólo números)------------------------
edadValidation = () => {
    var edad = document.getElementById("edad").value;
    var expresion = /^\d{1,3}$/;
    if (edad === "") {
        alert("El campo es obligatorio, por favor ingresa una EDAD.");
        return false;
    } else if (!edad.match(expresion)) {
        alert('Debe ingresar sólo números, por favor intenta nuevamente.');
        return false;
    }
    console.log("EDAD: " + edad);
    return true;
}



correoValidation = () => {
    var correo = document.getElementById("correo").value;
    var expresion = /^\w+[@]\w+\.\D{2,3}$/;
    if (correo === "") {
        alert("El campo es obligatorio, por favor ingresa un CORREO.");
        return false;
    } else if (!correo.match(expresion)) {
        alert('El formato del correo no es válido, por favor intenta nuevamente.');
        return false;
    }
    console.log("CORREO: " + correo);
    return true;
}


fechaValidation = () => {
    var fecha = document.getElementById("fecha").value;
    var expresion = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
    if (fecha === "") {
        alert("El campo es obligatorio, por favor ingresa una FECHA.");
        return false;
    } else if (!fecha.match(expresion)) {
        alert('El formato de la fecha no es válida, por favor intenta nuevamente.');
        return false;
    }
    console.log("FECHA: " + fecha);
    return true;
}

clear = () => {
    var rut = document.getElementById("rut");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");
    var edad = document.getElementById("edad");
    var correo = document.getElementById("correo");
    var especialidad = document.getElementById("especialidad");
    var fecha = document.getElementById("fecha");
    var hora = document.getElementById("hora");

    rut.value = "";
    nombres.value = "";
    apellidos.value = "";
    edad.value = "";
    correo.value = "";
    especialidad.value = "0";
    fecha.value = "";
    hora.value = "0";
}
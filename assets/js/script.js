let formulario = document.getElementById("formulario");

let manejador = {

    set: (objeto, propiedad, valor) => {
        if (propiedad == "nombre") {
            let regex = /^[aA-zZñÑ\sáéíóúÁÉÍÓÚ]{5,50}$/gim;
            if (typeof valor == "string" && regex.test(valor)) {
                objeto[propiedad] = valor;
            } else {
                throw new Error(
                    "Escriba su nombre"
                )
            }
        } else if (propiedad == "apellido") {
            let regex = /^[aA-zZñÑ\sáéíóúÁÉÍÓÚ]{5,50}$/gim;
            if (typeof valor == "string" && regex.test(valor)) {
                objeto[propiedad] = valor;
            } else {
                throw new Error(
                    "Escriba su apellido"
                );
            }
        } else if (propiedad == "correo"){
            if (valor != "") {
                objeto[propiedad] = valor;
            } else {
                throw new Error(
                    "Escriba su correo"
                );
            }
        } else if (propiedad == "edad") {
            if (typeof valor == "number" && !isNaN(valor) && valor >= 18) {
                objeto[propiedad] = valor;
                alert("Reserva realizada con éxito!");
            } else {
                throw new Error("Debe ser mayor de edad para crear una reservación");
            }
        } else if (propiedad == "fecha"){
            if (valor != ""){
            objeto[propiedad] = valor;
        } else {
            throw new Error("Ingrese una fecha de reserva");
        }
        }
    }
};

const submit = (event) => {
    event.preventDefault();

    try {
        const form = new Proxy({}, manejador);
        form.nombre = nombre.value;
        form.apellido = apellido.value;
        form.correo = correo.value;
        form.fecha = fecha.value;
        form.edad = parseInt(edad.value);
        console.log(form, "Datos enviados al backend"); 
    } catch (error) {
        alert(error);
    }
};

formulario.addEventListener("submit", submit);

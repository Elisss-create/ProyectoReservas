
var botonReservar = document.querySelector("#botonReservar");
botonReservar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#formReserva");
    var nombre = form.nombre.value;
    var fecha = form.fecha.value;
    var horaD = form.horaDesde.value;
    var horaH = form.horaHasta.value;
    var sala = form.sala.value;


    tabla = document.querySelector("#tablaClientes");
    clienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    fechaTd = document.createElement("td");
    horaDesdeTd = document.createElement("td");
    horaHastaTd = document.createElement("td");
    salaTd = document.createElement("td");

    nombreTd.textContent = nombre;
    fechaTd.textContent = fecha;
    horaDesdeTd.textContent = horaD;
    horaHastaTd.textContent = horaH;
    salaTd.textContent = sala;


    if (sala === "Seleccionar" || nombre === "") {
        alert("Complete los campos");

    } else {

        tabla.appendChild(clienteTr);
        clienteTr.appendChild(nombreTd);
        clienteTr.appendChild(fechaTd);
        clienteTr.appendChild(horaDesdeTd)
        clienteTr.appendChild(horaHastaTd);
        clienteTr.appendChild(salaTd);
    }

    console.log(nombre);
    console.log(fecha);
    console.log(horaD);
    console.log(horaH);
    console.log(sala);
});



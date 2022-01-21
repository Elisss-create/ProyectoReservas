
var botonReservar = document.querySelector("#botonReservar");
botonReservar.addEventListener("click", function (event) {
    event.preventDefault();

    var form= document.querySelector("#formReserva");

    var usuario = capturarDatosUsuario(form);
    console.log(usuario);

    var tabla = document.querySelector("#tablaClientes");

    //creamos td y tr de los campos de elementos
    clienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    fechaTd = document.createElement("td");
    horaDesdeTd = document.createElement("td");
    horaHastaTd = document.createElement("td");
    salaTd = document.createElement("td");

    //Asigno los valores a la propiedad textContent 
    nombreTd.textContent = usuario.nombre;
    fechaTd.textContent = usuario.fecha;
    horaDesdeTd.textContent = usuario.horaD;
    horaHastaTd.textContent = usuario.horaH;
    salaTd.textContent = usuario.sala;


    if (usuario.sala === "Seleccionar" || usuario.nombre === "") {
        alert("Complete los campos");

    } else {
        //asignacion de los tr y td a la tabla
        tabla.appendChild(clienteTr);
        clienteTr.appendChild(nombreTd);
        clienteTr.appendChild(fechaTd);
        clienteTr.appendChild(horaDesdeTd)
        clienteTr.appendChild(horaHastaTd);
        clienteTr.appendChild(salaTd);
    }

});


function capturarDatosUsuario(form) {
    var usuario = {
         nombre :form.nombre.value,
         fecha :form.fecha.value,
         horaD :form.horaDesde.value,
         horaH :form.horaHasta.value,
         sala :form.sala.value
    }
    return usuario;
}

var botonReservar = document.querySelector("#botonReservar");
botonReservar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#formReserva");

    var usuario = capturarDatosUsuario(form);
    var usuarioTr = crearUsuario(usuario);

    var tabla = document.querySelector("#tablaUsuario");
    tabla.appendChild(usuarioTr);
    form.reset();
    
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

function crearUsuario(usuario){

//creamos td y tr de los campos de elementos
var usuarioTr = document.createElement("tr");
usuarioTr.classList.add("usuario");

    if (usuario.sala === "Seleccionar" || usuario.nombre === "") {
        alert("Complete los campos");

    } else {
        //asignacion de los tr y td a la tabla

        usuarioTr.appendChild(construirTd(usuario.nombre,"info-nombre"));
        usuarioTr.appendChild(construirTd(usuario.fecha,"info-fecha"));
        usuarioTr.appendChild(construirTd(usuario.horaD,"info-desde"));
        usuarioTr.appendChild(construirTd(usuario.horaH,"info-hasta"));
        usuarioTr.appendChild(construirTd(usuario.sala,"info-sala"));

    } 
    return usuarioTr;
}

function construirTd(dato, clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}
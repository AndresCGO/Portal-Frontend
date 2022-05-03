let correo,clave,formulario,btn_enviar

window.onload = function()
{
    btn_enviar = document.getElementById("btn_enviar");
    correo = document.getElementById("correo");
    clave = document.getElementById("clave");
    formulario = document.getElementById("formulario");
    formulario.addEventListener("submit",procesarRegistro);
}

function procesarRegistro(evento){

    let txt_correo,txt_clave
    let str_usuario;
    txt_correo = correo.value;
    txt_clave = md5(clave.value);

    usuario = {
        correo:txt_correo,
        clave:txt_clave,
    };

    str_usuario = JSON.stringify(usuario);
    localStorage.setItem("usuario",str_usuario);

    evento.preventDefault();
}
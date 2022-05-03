let btn_enviar, formulario, correo,clave, usuario,mensaje;

function iniciarLogin(){
    btn_enviar = document.getElementById("btn_enviar");
    correo = document.getElementById("correo");
    clave = document.getElementById("clave");
    formulario = document.getElementById("formulario");
    formulario.addEventListener("submit",procesarLogin);
}

function mensaje_exito(){
    window.alert("logueado con exito")
}

function mensaje_error(){
    window.alert("No se pudeo loguear")
}

function procesarLogin(evento){

    let txt_correo,txt_clave;
    let str_usuario, md5_clave;
    let error = false;
    txt_correo = correo.value;
    txt_clave = md5(clave.value);

    str_usuario = localStorage.getItem("usuario");
    usuario = JSON.parse(str_usuario);
    
    if(usuario){
        if(usuario.correo === txt_correo && usuario.clave === txt_clave){
            cambiarSesion(true);
            mensaje_exito();
        }
        else{
            error = true;
        }
    }else{
        error = true;
    }

    if(error){
        mensaje_error();
    }

    abrirVentana();
    evento.preventDefault();


    //console.log(evento.target);

}
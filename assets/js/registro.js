let btn_enviar,formulario;
let correo,clave,nombre, usuario;

function iniciarRegistro(){
	btn_enviar = document.getElementById("btn_enviar");
	correo = document.getElementById("correo");
	nombre = document.getElementById("nombre");
	clave = document.getElementById("clave");

	formulario = document.getElementById("formulario");
	formulario.addEventListener("submit",procesarRegistro);

}


function procesarRegistro(evento){

	let txt_correo,txt_clave,txt_nombre;
	let str_usuario;
	txt_correo = correo.value;
	txt_nombre = nombre.value;
	txt_clave = md5(clave.value);

	usuario = {
		correo:txt_correo,
		clave:txt_clave,
		nombre:txt_nombre
	};

	str_usuario = JSON.stringify(usuario);
	localStorage.setItem("usuario",str_usuario);


	evento.preventDefault();

	//console.log(evento.target);

}
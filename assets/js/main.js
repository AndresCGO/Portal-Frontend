let personajes, armas;
let logged = false;

window.onload = function()
{
    armas = document.getElementById("armas");
    personajes.addEventListener("click",evaluarLogin);
    personajes = document.getElementById("personajes");
    personajes.addEventListener("click",evaluarLogin);
    cambiarSesion(JSON.parse(localStorage.getItem("logeado")));
}

function evaluarLogin(evento)
{
    if (logged)
    {
        location.href = "contact.html"         
    }
    else
    {
        location.href = "login.html"
        window.alert("No estás logeado");
    }
}

function cambiarSesion(bandera)
{
    logged = bandera;
    localStorage.setItem("logeado",logged);

}
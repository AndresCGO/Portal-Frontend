let personajes;
let logged = false;

window.onload = function()
{
    personajes = document.getElementById("personajes");
    personajes.addEventListener("click",evaluarLogin);
    cambiarSesion(JSON.parse(localStorage.getItem("logeado")));
}

function evaluarLogin(evento)
{
    if (logged)
    {
        if ( this.id = "personajes") {
            location.href = "contact.html"
        }
        else{
            location.href = "services.html"
        }
        
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
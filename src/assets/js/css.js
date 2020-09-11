var menuActivo = true;
var optionsActivo = true;

function activarMenu() {
    if (menuActivo == true) {
        document.getElementById("menuLateral").style.width = "180px";
        for (var i = 0; i < document.getElementsByClassName("itemInicio").length; i++) {
            document.getElementsByClassName("itemInicio")[i].style.color = "black";
            document.getElementsByClassName("itemInicio")[i].style.marginLeft = "10px";
        }
        document.getElementById("contenido").style.paddingLeft = "190px";
        menuActivo = false;
    } else {
        document.getElementById("menuLateral").style.width = "50px";
        for (var i = 0; i < document.getElementsByClassName("itemInicio").length; i++) {
            document.getElementsByClassName("itemInicio")[i].style.color = "white";
            document.getElementsByClassName("itemInicio")[i].style.marginLeft = "0px";
        }
        document.getElementById("contenido").style.paddingLeft = "60px";
        menuActivo = true;
    }
}

function activarOptions() {
    if (optionsActivo == true) {
        document.getElementById("ulInternoId").style.display = "block";
        optionsActivo = false;
    } else {
        document.getElementById("ulInternoId").style.display = "none";
        optionsActivo = true;
    }
}
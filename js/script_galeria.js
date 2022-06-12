window.onload = loadImages;
window.setInterval(modificarBackground, 1);
var grados = 90.0;
var per1 = 0.0;
var flagPer1 = 1;

function loadImages() {
    const path = "img/jaspe/galeria/";

    const cantidad = 43;

    for (var i = 1; i <= cantidad; i++) {
        var img = document.createElement("img");
        img.src = path + i + ".jpg";
        img.className = "imagenes";
        img.alt = "Imagen " + i;
        document.getElementById("galeria").appendChild(img);
    }
}

function modificarBackground() {

    document.body.style.backgroundImage = 'linear-gradient(' + grados + 'deg, rgb(26, 26, 29) ' + per1 + '%, rgb(111, 34, 50) '+(200-per1)+'%)';
    grados += 0.2;
    if (per1 >= 50 && flagPer1 === 1) {
        flagPer1 = -1;
    }else if(per1 <= -100 && flagPer1 === -1){
        flagPer1 = 1;
    }
    per1+=flagPer1;
}
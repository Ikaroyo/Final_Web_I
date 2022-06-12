window.onload = loadImages;

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
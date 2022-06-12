var contador = 0;


function addCart() {
    document.getElementById("items-carrito").innerHTML=(contador+1).toString();
    contador++;
}
function removeCart() {
    if (contador === 0) {
    alert("No hay nada en el carrito");
    }else{
        document.getElementById("items-carrito").innerHTML=(contador-1).toString();
        contador--;
    }
}
/* Ingresa el código de producto */
let intProducto = parseInt(prompt("Seleccione un producto"));
let precioProducto;

/* Establece el precipo según el código */
switch (intProducto) {
    case 1:
        precioProducto = 70.99;
        break;
    case 2:
        precioProducto = 78.99;
        break;
    case 3:
        precioProducto = 100.99;
        break;
    case 4:
        precioProducto = 58.50;
        break;
    case 5:
        precioProducto = 35.00;
        break;
    default:
        precioProducto = 0;
        alert("Código no válido : ");
        break;
}

/* Si seleccionó un precio de producto, pedir cantidad */

let intCantidad;
let decDescuento;
if (precioProducto > 0) {
    intCantidad = parseInt(prompt("Indique la cantidad : "));

    /* Establecer descuento según la cantidad ingresada */
    if (intCantidad < 10) {
        decDescuento = 0.035;
    } else if (intCantidad >= 10 && intCantidad <= 20) {
        decDescuento = 0.07;
    } else if (intCantidad > 20) {
        decDescuento = 0.095;
    }

    let descuentoTotal = (precioProducto * intCantidad) * decDescuento;
    document.write("<p>Precio unitario: " + precioProducto + "</p>");
    document.write("<p>Precio cantidad: " + precioProducto * intCantidad + "</p>");
    document.write("<p>Precio descuento: " + descuentoTotal + "</p>");
    document.write("<p>Total a pagar: " + ((precioProducto * intCantidad) - descuentoTotal) + "</p>");
} else {
    /* Caso contrario */
    alert ("No ingresó el código de un producto");
}
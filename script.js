//Calcular Iva del valor neto del automóvil

let precio = parseInt(prompt("Ingrese el valor del vehículo"));
let cantidad = parseInt(prompt("Cuántos vehículos necesita para su flota?"));
let resultadoIva = 0;


function cotizacionFinal(precio, cantidad) {

    if (precio == ''){
        return false;

    } else if (isNaN(precio) || (isNaN(cantidad))){

        return false;

    }else{

        let resultadoIva =(precio * cantidad) * 1.21;
        return resultadoIva;
    } 
}

impuestoIva = cotizacionFinal(precio,cantidad);
alert("Usted debe abonar $" +impuestoIva);


//Calcular cuánto debe abonar si adelanta una parte.

let plata = parseFloat(prompt("Cuánto dinero disponible tiene?"));
let valor = parseFloat(prompt("Qué valor tiene el auto que está buscando?"));
let resultado = 0;

function costo(valor, plata){
    resultado = plata - valor; 
}

function mostrar(mensaje){
    console.log(mensaje);
}

costo(plata, valor);
mostrar(resultado);

alert("Usted debe abonar "+(resultado)+" por su nuevo auto");



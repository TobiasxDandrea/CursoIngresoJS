/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;
    
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
     resultado = precio1 + precio2 + precio3;

     alert ("la suma d $ " + resultado);



}
function Promedio () 
{


let precio1;
    let precio2;
    let precio3;
    let resultado;
    let promedio;
    
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    
     resultado = (precio1 + precio2 + precio3);
     promedio = resultado / 3;

     alert ("El promedio da $ " + promedio);


}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;
    let iva;
    let importeFinal;
    
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    
     resultado = (precio1 + precio2 + precio3);

     iva = resultado * 21/100;
     importeFinal = resultado + iva;
     importeFinal = importeFinal.toFixed(2);

     alert ("El importe iva incluido es $ " + importeFinal);


}
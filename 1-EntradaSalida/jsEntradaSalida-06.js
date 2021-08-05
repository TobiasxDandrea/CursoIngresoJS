/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaro variables
	let uno;
	let dos;
	let resultado;
    //Parseo los numeros y los traigo por id del html
	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
	dos = parseInt(document.getElementById("txtIdNumeroDos").value);
    //sumo los números para generar el resultado 
	resultado = uno + dos
    // muestro el resultado por alert
    alert ("El resultado es: " + resultado);

}


/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	let uno;
	let dos;
	let resultado;

	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
	dos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = uno + dos


	alert("La suma da: " + resultado);	
}

function restar()
{
	let uno;
	let dos;
	let resultado;

	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
	dos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = uno - dos


	alert("La resta da: " + resultado);
}

function multiplicar()
{ 
	let uno;
	let dos;
	let resultado;

	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
	dos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = uno * dos


	alert("La multiplicación da: " + resultado);
}

function dividir()
{
	let uno;
	let dos;
	let resultado;

	uno = parseInt(document.getElementById("txtIdNumeroUno").value);
	dos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = uno / dos


	alert("La división da: " + resultado);
}


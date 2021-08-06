/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let aumento;
	let nuevoSueldo;
	 /* al sueldo le tengo que calcular el aumento
	 /El calculo de porcentaje de un valor lo consigo multiplicando 
	  el valor po el porcentaje y lo divido por 100.
	  traigo el dato de sueldo por id del html y lo parseo*/
	 importe = parseFloat(document.getElementById("txtIdImporte").value);
	
	 aumento = importe * 25/ 100;
	
	 nuevoSueldo = importe - aumento;
	
	
	  parseFloat(document.getElementById("txtIdResultado").value = nuevoSueldo);
		
	





}

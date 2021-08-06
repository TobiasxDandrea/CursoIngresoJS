/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro variables
let sueldo;
let aumento;
let nuevoSueldo;
 /* al sueldo le tengo que calcular el aumento
 /El calculo de porcentaje de un valor lo consigo multiplicando 
  el valor po el porcentaje y lo divido por 100.
  traigo el dato de sueldo por id del html y lo parseo*/
 sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

 aumento = sueldo * 10/ 100;

 nuevoSueldo = sueldo + aumento;


  parseFloat(document.getElementById("txtIdResultado").value = nuevoSueldo);






}

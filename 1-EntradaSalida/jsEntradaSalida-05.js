/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

//Declaro variables
let nombre;
let edad;
// copio el nombre que ingreso en las cajas de texto del html 
nombre = document.getElementById("txtIdNombre").value;
edad = document.getElementById("txtIdEdad").value;
//muesto el nombre y la edad concatenadas por alert
alert ("Usted se llama " + nombre + " y tiene " + edad +  " años");






}


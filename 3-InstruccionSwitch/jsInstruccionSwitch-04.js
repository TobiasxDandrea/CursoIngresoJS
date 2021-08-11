function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;
	 switch (mes){
		 case "Febrero":
			 alert ("Este mes tiene 28 dias");
			 break;
			 case "Abril":
				 case "Junio":
					 case "Septiembre":
						 case "Noviembre":
							 alert ("Estos meses tienen 30 dias");
							 break;
							 default :
							 alert ("Estos meses tienen 31 dias");
	 }
	



}//FIN DE LA FUNCIÓN
function mostrar()
{
	let nota;
	let maximo = 10;
	let minimo = 1;


	nota = Math.round(Math.random() * (maximo - minimo) + minimo);

	if (nota == 9 || nota ==10 ){

		alert (nota + " EXCELENTE");
	}
	   else if (nota < 4){
		   alert (nota + " Vamos, la próxima se puede!");
		
	   }
	    else if (nota  > 4 && nota <=8 ){

			alert (nota + " APROBÓ");
		}







}//FIN DE LA FUNCIÓN
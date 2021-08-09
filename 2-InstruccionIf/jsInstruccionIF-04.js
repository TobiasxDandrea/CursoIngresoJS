function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

     if (!( edad <13 || edad >= 17)){

          alert ("Es adolescente");
	 }

  
	
	
	
	
    // manera intuitiva 
	/* if (edad >= 13 && edad <= 17){

		
	 alert ("Es adolescente");
		
	}
   */
  


	//Esta manera NO es eficiente
	/*if (edad == 13){
		alert ("Es adolescente");
	}
	if (edad == 14){
		alert ("Es adolescente");
	}
	if (edad == 15){
		alert ("Es adolescente");
	}
	if (edad == 16){
		alert ("Es adolescente");
	}
	if (edad == 17){
		alert ("Es adolescente");
	}
    */
   
}//FIN DE LA FUNCIÓN
function guardarDatos(){
	localStorage.usuario = document.getElementById("usuario").value;
    localStorage.password = document.getElementById("password").value;

 	
	if (isNaN(formulario.nombre.value)==false || /^[A-Za-z]*/.test(formulario.nombre.value)==false){ 
      	alert("Tiene que escribir su nombre") 
      	document.formulario.nombre.focus() 
      	return 0; 
   	} else
	
	
		if(isNaN(formulario.apellido.value)==false || /^[A-Za-z]*/.test(formulario.apellido.value)==false || formulario.nombre.value==formulario.apellido.value==true){
			alert("Tienes que escribir su apellido, el apellido no puede ser igual a tu nombre de usuario")
			document.formulario.apellido.focus()
			return 0;
			}   else
			
			
		if(isNaN(formulario.usuario.value)==false || /^[A-Za-z]*/.test(formulario.usuario.value)==false || formulario.nombre.value==formulario.usuario.value==true || formulario.apellido.value==formulario.usuario.value==true ){
			alert("Tienes que escribir tu nombre de usuario, no puede coincidir con tu nombre y apellido")
			document.formulario.usuario.focus()
			return 0;
			}   else
			
		if(document.formulario.password.value.length<5){
			alert("Tu contraseña debe ser mayor a 4 caracteres")
			document.formulario.password.focus()
			return 0;
		
}else
			var edad=document.formulario.edad.value;
      	if (isNaN(formulario.edad.value)==true || /^[1-9]\d$/.test(formulario.edad.value)==false || formulario.edad.value<18==true ){ 
         	alert("Tienes que ser mayor de 18 años para poder ingresar.") 
         	document.formulario.edad.focus() 
         	return (false); 
			} else
			
			
			if(isNaN(formulario.email.value)==false || /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(formulario.email.value)==true || /^[.com]\d$/.test(formulario.email.value)==true  || /^[A-Za-z]*/.test(formulario.email.value)==false || document.formulario.email.value.length<10 ) {
			alert("Tienes que escribir tu email")
			document.formulario.email.focus()
			return false;
			
			
 localStorage.usuario = document.getElementById("usuario").value;
 localStorage.password = document.getElementById("password").value;
 
	}
 
 if (localStorage.usuario==document.getElementById("usuario").value && localStorage.password==document.getElementById("password").value){
		window.alert(location.href="acciones/boton.html");
	}
 
}

/*
function recuperarDatos(){
 if ((localStorage.usuario != undefined) && (localStorage.password != undefined)) {
  document.getElementById("datos").innerHTML = "Usuario: " + localStorage.usuario + "<br/> Password: " + localStorage.password;
 }
 else{
  document.getElementById("datos").innerHTML = "No has introducido tu usuario y tu password";
 }
}*/

function Main(){

	
	Ingresar(0);
	guardarDatos();

	

	
}

function Ingresar(fallos){
	
	usuario = window.prompt("Ingrese usuario:");
	password = window.prompt("Ingrese password:");


	
	
	if (usuario == localStorage.usuario && password == localStorage.password){
		window.alert(location.href="acciones/boton.html");
	}	
	else if (fallos >= 2) {
			window.alert( "usuario bloqueado");
		}
	else {
		fallos++;
		window.alert( "usuario o contreaña incorrectos " + fallos);
		Verificar(fallos);
	}	
	
}
 
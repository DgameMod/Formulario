//const { ipcRenderer } = require('electron')

document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault()

    var error_pass = document.getElementById('error_pass')
    var pass = document.getElementById('pass')
    var errores = 0
    if(pass.value.length < 8){
        error_pass.innerHTML += "Tiene que tener 8 caracteres<br>"
        pass.classList.add('invalid')
        errores++
    }
    var exprMin = RegExp("[a-z]")
    var exprMay = RegExp("[A-Z]")
    var exprNum = RegExp("[0-9]")
   

    if(!pass.value.match(exprMin)){
        error_pass.innerHTML +="Tiene que tener una Minuscula<br>"
        pass.classList.add('invalid')
        errores++
    }
    if(!pass.value.match(exprMay)){
        error_pass.innerHTML +="Tiene que tener una mayuscula<br>"
        pass.classList.add('invalid')
        errores++
    }
    if(!pass.value.match(exprNum)){
        error_pass.innerHTML +="Tiene que tener un numero<br>"
        pass.classList.add('invalid')
        errores++
    }

 /*pass.classList.remove('invalid')
  error_pass.innerHTML =""

    nombreUsuario.classList.remove('invalid')
   error_nombreUsuario.innerHTML =""

  fechaNacimiento.classList.remove('invalid')
  error_fechaNacimiento.innerHTML =""*/
   
  var error_nombreUsuario = document.getElementById('error_nombreUsuario')
  var nombreUsuario = document.getElementById('nombreUsuario')
  var SoloLetras = new RegExp("^[a-zA-Z ]+$");

  if(!nombreUsuario.value.match(SoloLetras)){
      error_nombreUsuario.innerHTML +="Solo se aceptan letras<br>"
      nombreUsuario.classList.add('invalid')
      errores++
      nombreUsuario.classList.remove('invalid')
   error_nombreUsuario.innerHTML =""
      
  }
    if(!nombreUsuario.value.match(exprMay)){
        error_nombreUsuario.innerHTML +="Tiene que tener una mayuscula<br>"
        nombreUsuario.classList.add('invalid')
        errores++
        nombreUsuario.classList.remove('invalid')
   error_nombreUsuario.innerHTML =""
    }
  
  
    if(!nombreUsuario.classList.contains('invalid')||!pass.classList.contains('invalid')){
        alert('Bienvenido Usuario'+nombreUsuario.textContent)

    }
    
    /*else{
        ipcRenderer.send('error-formulario', errores)
     }*/

})


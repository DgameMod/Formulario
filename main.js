const { app, BrowserWindow } = require('electron')
//const { ipcMain } = require('electron')


let ventana

function ventanaPrincipa(){

     ventana = new BrowserWindow({

        width: 500,
        height: 500,
        webPreferences: ({
            nodeIntegration: true
        })

    })

    ventana.loadFile('./formulario.html')
}

app.whenReady().then(ventanaPrincipa)

/*ipcMain.on('error-formulario', function(event, args){
    console.log(event)
    console.log(args)
    var lineas = parseInt(args)
    var alto=215 +  (lineas *20)
    ventana.setSize(400, alto)
}) */
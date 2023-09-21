const express = require('express');

const router = require('./router')

const app = express();

const port = 3000; 

// middleware a nivel de aplicacion 

app.use('/router', router)

const myMidd = ((req,res, next) =>{
    console.log('Hola soy un middleware ')
    next()
})

const crearNombre = ((req, res, next)=>{
    const nombreCompleto = req.body.nombre + ' ' + req.body.apellido
    req.nombreCompleto = nombreCompleto
    next()
})

const adicionarBendicion = ((req, res, next)=>{
    const nombre = req.nombreCompleto;
    req.despedida = nombre + ' que te valla bien '
    next()

})



/* app.use(myMidd) */

app.use(express.json())



app.get('/saludar', (req, res)=>{
    res.status(200).send('Hola mundo')
})

app.post('/despedir',crearNombre, adicionarBendicion, (req, res)=>{
    const nombreConBendicion = req.despedida
    res.status(200).send('Adios '  + nombreConBendicion)
})







app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})



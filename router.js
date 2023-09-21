const express = require('express')

const router = express.Router();

const myMiddRouter = ((req,res, next) =>{
    console.log('soy un middleware desde un router ')
    next()
})


router.get('/saludarRouter',myMiddRouter, (req, res)=>{
    res.status(200).send('Hola desde router ')
})

module.exports = router;


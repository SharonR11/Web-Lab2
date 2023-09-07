const express = require ('express');
const app = express();

app.get('/', (req, res) => { 
    res.sendFile('./static/inicio.html',{
        root:__dirname
    })
})
app.get('/form', (req, res) => { 
    res.sendFile('./static/formulario.html',{
        root:__dirname
    })
})
app.get('/lista', (req, res) => { 
    res.sendFile('./static/lista.html',{
        root:__dirname
    })
})

app.listen(3000)
console.log(`server on port ${3000}`)

app.use((req,res)=>{
    res.status(404).send('No se encontro tu pagina.....!!!')
})
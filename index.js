const express = require ('express');
const app = express();
//indicando que se cargen archivos static
app.use(express.static(__dirname + '/static'));

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
app.get('/update', (req, res) => { 
    res.sendFile('./static/actualizar.html',{
        root:__dirname
    })
})

app.listen(3000)
console.log(`server on port ${3000}`)

app.use((req,res)=>{
    res.status(404).send('No se encontro tu pagina.....!!!')
})
const str = '[{ "name": "Jose Perez", "edad": 42 },' +
           '{ "name": "Carlos Díaz", "edad": 24 },' +
           '{ "name": "Peter Mamani", "edad": 35 }]';

const obj = JSON.parse(str);

app.all('/user', (req, res, next) => { 
    console.log('Por Aqui Paso');
    next();
});
//como se recorre un objeto json y como obtener los datos
app.get('/', (req, res) => { 
    for (var i = 0; i < obj.length; i++) {
        console.log('Nombre: ' + obj[i].name + ', Edad:' + obj[i].edad);
      }
	res.send('Parseo JSON correcto');
});
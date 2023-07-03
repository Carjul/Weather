const datos = require('../model/datos');


const getDatos = async (req, res) => {
    const Datos = await datos.find();
    const orden = Datos.sort((a, b) => {});
    res.json(orden);
}


const createDatos= async (req, res) => {
 try {
    var datos1 =[];
    const {Nombre} = req.query;

  await  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Nombre}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
    .then(response => response.json())
    .then(data => {
  
        datos1.push( JSON.parse(JSON.stringify(data))) 
      }
      )
      await datos.create(datos1)
       

    res.json({message: 'datos saved'});
 }
catch (error) {
        console.log(error);
    }
}
const getDato= async (req, res) => {
    const dato = await datos.findById(req.params.id);
    res.json(dato);
}
const deleteDato = async (req, res) => {
    await datos.findByIdAndDelete(req.params.id);
    res.json({message: 'dato deleted'});
} 

module.exports = {
    getDatos,
    createDatos,
    getDato,
    deleteDato
}
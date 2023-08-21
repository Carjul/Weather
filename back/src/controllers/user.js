const user = require('../model/Users');



const createDatos = async (req, res) => {
    try {
        const { nombre, apellido, email, password } = req.body;
        await user.create({ nombre, apellido, email, password })
        
        res.json({ message: 'datos saved' });
    }
    catch (error) {
        console.log(error);
    }
}
const getDato = async (req, res) => {
    const x = await user.findById(req.params.id);
    res.json(x);
}
const deleteDato = async (req, res) => {
    await user.findByIdAndDelete(req.params.id);
    res.json({ message: 'dato deleted' });
}

module.exports = {
    createDatos,
    getDato,
    deleteDato
}
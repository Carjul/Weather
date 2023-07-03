const {Router} =require('express')

const router = Router();

const {getDatos, createDatos, getDato, deleteDato} = require('../controllers/index');

router.post('/sevedatos',  createDatos)

router.get('/getdatos', getDatos)

router.get('/getdato/:id', getDato)

router.delete('/deletedato/:id', deleteDato)



module.exports = router;
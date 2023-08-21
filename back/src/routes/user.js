const {Router} =require('express')

const router = Router();

const {createDatos, getDato, deleteDato} = require('../controllers/user');

router.post('/seveUser',  createDatos)

router.get('/getUser/:id', getDato)

router.delete('/deleteUser/:id', deleteDato)

module.exports = router;
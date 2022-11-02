const express = require('express')
const { 
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
} = require('../controller/UserController')
//Definir objeto de ruteo
const router = express.Router()

//crear rutas  sinparametro 
router.route('/')
                .get(getAllUser)
                .post(createUser)

// crear rutas que contengan parametros
router.route('/:id')
                .get(getSingleUser)
                .put(updateUser)
                .delete(deleteUser)

module.exports = router 

//dependencias:
//el objeto de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const UserModel = require('../models/user')


//crear la entidad: 
const User = UserModel(sequelize, DataTypes)


// Listar todos los user 
exports.getAllUser = async (req, res)=>{
    try{ 
    //traer los usuarios
    const users = await User.findAll();
    //response con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
    }catch (error) {
        res 
            .status(200)
            .json({
                "success": true,
                "errors": "error de servidor"
            })  
    }
}


// Listar user por id 
exports.getSingleUser = async (req, res)=>{
    try {
        //console.log (req.params.id)
    const SingleUser = await User.findByPk(req.params.id);
    if (SingleUser) {
        res
            .status(200)
            .json({
                "success": true,
                "data": SingleUser
            })
    } else {
        res
            .status(200)
            .json({
                "success": false,
                "data": "usuario no existe"
            })
    }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "data": "error de servidor desconocido"
            })
    }
    
}


//Actualizar el user 
exports.updateUser = async (req, res)=>{
    try {
        //console.log(req.params.id)
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(200)
            .json({
                "success": false,
                "data": "usuario no existe"
            })
        } else {
            // Change everyone without a last name to "Doe"
            //actualizar usuario
            await User.update(req.body, {
                where: {
                    id: req.params.id
            }})
            //selecciono user actualizado
            const updatedUser = await User.findByPk(req.params.id);
            //enviar  respuesta
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updatedUser
                })
        }
         
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "data": "error de servidor desconocido"
            })
    }
   
  
}

//Borrar users 
exports.deleteUser = async (req, res)=>{
    //console.log(req.params.id)
    const SingleUser = await User.findByPk(req.params.id);
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (!singleUser) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
                })
        } else {
            await User.destroy({
                where: {
                id: req.params.id
                }
            });
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleUser
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
    
}


// Crear nuevo user 
exports.createUser = async (req, res)=>{
    try {
        const newUser = await User.create(req.body);
        res 
            .status(200)
            .json({
                "success": true,
                "data": newUser
            })

    } catch (error) {
        if (error instanceof ValidationError) {
            //recorrer el areglo de errores con foreach
            // map
            const errores = error.errors.map((elemento)=>{return elemento.message})
            res
                .status(400)
                .json({
                    "success": false,
                    "error": errores
            })  
        }else{
            res 
            .status(200)
            .json({
                "success": true,
                "errors": "error de servidor"
            })  
        }
    }
    
        
}
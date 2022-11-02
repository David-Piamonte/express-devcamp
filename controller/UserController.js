//dependencias:
//el objeto de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes } = require('sequelize')
//el modelo
const UserModel = require('../models/user')


//crear la entidad: 
const User = UserModel(sequelize, DataTypes)


// Listar todos los user 
exports.getAllUser = async (req, res)=>{
    //traer los usuarios
    const users = await User.findAll();
    //response con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}


// Listar user por id 
exports.getSingleUser = async (req, res)=>{
    //console.log (req.params.id)
    const SingleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": SingleUser
        })
}


//Actualizar el user 
exports.updateUser = async (req, res)=>{
    // Change everyone without a last name to "Doe"
    await User.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  const SingleUser = await User.findByPk(req.params.id);
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": SingleUser
        })
}

//Borrar user 
exports.deleteUser = async (req, res)=>{
    const SingleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": SingleUser
        })
}
// Crear nuevo user 
exports.createUser = async (req, res)=>{
    const newUser = await User.create(req.body);
    res
        .status(200)
        .json({
            "success": true,
            "data": newUser
        })
}
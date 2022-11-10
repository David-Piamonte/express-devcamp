//dependencias:
//el objeto de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const ReviewsModel = require('../models/Reviews')


//crear la entidad: 
const Reviews = ReviewsModel(sequelize, DataTypes)

// Listar todos los reviews 
exports.getAllReviews = async (req, res)=>{
    try{ 
    //traer los usuarios
    const Review = await Reviews.findAll();
    //response con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data": Review
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
exports.getSingleReviews = async (req, res)=>{
    try {
        //console.log (req.params.id)
    const SingleReviews = await Reviews.findByPk(req.params.id);
    if (SingleReviews) {
        res
            .status(200)
            .json({
                "success": true,
                "data": SingleReviews
            })
    } else {
        res
            .status(200)
            .json({
                "success": false,
                "data": "reviews no existe"
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
//Actualizar el Reviews 
exports.updateReviews = async (req, res)=>{
    try {
        //console.log(req.params.id)
        const SingleReviews = await Reviews.findByPk(req.params.id);
        if (!SingleReviews) {
            res
            .status(200)
            .json({
                "success": false,
                "data": "Reviews no existe"
            })
        } else {
            // Change everyone without a last name to "Doe"
            //actualizar Reviews
            await Reviews.update(req.body, {
                where: {
                    id: req.params.id
            }})
            //selecciono user actualizado
            const updatedReviews = await Reviews.findByPk(req.params.id);
            //enviar  respuesta
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updatedReviews
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
//Borrar Reviews
exports.deleteReviews = async (req, res)=>{
    //console.log(req.params.id)
    const SingleReviews = await Reviews.findByPk(req.params.id);
    try {
        const singleReviews = await Reviews.findByPk(req.params.id);
        if (!singleReviews) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Reviews no existente"
                })
        } else {
            await Reviews.destroy({
                where: {
                id: req.params.id
                }
            });
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleReviews
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
// Crear nuevo Reviews 
exports.createReviews = async (req, res)=>{
    try {
        const newReviews = await Reviews.create(req.body);
        res 
            .status(200)
            .json({
                "success": true,
                "data": newReviews
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
//dependencias:
//el objeto de conexion:
const sequelize = require('../config/seq')
//Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const CoursesModel = require('../models/courses')


//crear la entidad: 
const Courses = CoursesModel(sequelize, DataTypes)

// Listar todos los Courses 
exports.getAllCourses = async (req, res)=>{
    try{ 
    //traer los usuarios
    const Course = await Courses.findAll();
    //response con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data": Course
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
// Listar Course por id 
exports.getSingleCourses = async (req, res)=>{
    try {
        //console.log (req.params.id)
    const SingleCourses = await Courses.findByPk(req.params.id);
    if (SingleCourses) {
        res
            .status(200)
            .json({
                "success": true,
                "data": SingleCourses
            })
    } else {
        res
            .status(200)
            .json({
                "success": false,
                "data": "Courses no existe"
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
//Actualizar el Courses 
exports.updateCourses = async (req, res)=>{
    try {
        //console.log(req.params.id)
        const SingleCourses = await Courses.findByPk(req.params.id);
        if (!SingleCourses) {
            res
            .status(200)
            .json({
                "success": false,
                "data": "Courses no existe"
            })
        } else {
            // Change everyone without a last name to "Doe"
            //actualizar Courses
            await Courses.update(req.body, {
                where: {
                    id: req.params.id
            }})
            //selecciono user actualizado
            const updatedCourses = await Courses.findByPk(req.params.id);
            //enviar  respuesta
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updatedCourses
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
//Borrar Courses
exports.deleteCourses = async (req, res)=>{
    //console.log(req.params.id)
    const SingleCourses = await Courses.findByPk(req.params.id);
    try {
        const singleCourses = await Courses.findByPk(req.params.id);
        if (!singleCourses) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Courses no existente"
                })
        } else {
            await Courses.destroy({
                where: {
                id: req.params.id
                }
            });
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleCourses
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
exports.createCourses = async (req, res)=>{
    try {
        const newCourses = await Courses.create(req.body);
        res 
            .status(200)
            .json({
                "success": true,
                "data": newCourses
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
const express = require('express')
const { 
    getAllCourses,
    getSingleCourses,
    updateCourses,
    deleteCourses,
    createCourses
} = require('../controller/CoursesController')
//Definir objeto de ruteo
const router = express.Router()

//crear rutas  sinparametro 
router.route('/')
                .get(getAllCourses)
                .post(createCourses)

// crear rutas que contengan parametros
router.route('/:id')
                .get(getSingleCourses)
                .put(updateCourses)
                .delete(deleteCourses)

module.exports = router 

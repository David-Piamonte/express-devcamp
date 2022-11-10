const express = require('express')
const { 
    getAllReviews,
    getSingleReviews,
    updateReviews,
    deleteReviews,
    createReviews
} = require('../controller/ReviewsController')
//Definir objeto de ruteo
const router = express.Router()

//crear rutas  sinparametro 
router.route('/')
                .get(getAllReviews)
                .post(createReviews)

// crear rutas que contengan parametros
router.route('/:id')
                .get(getSingleReviews)
                .put(updateReviews)
                .delete(deleteReviews)

module.exports = router  

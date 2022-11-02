'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // crear la columna 'user_id' FK con users
   //addColumn: parametros: 1. la tabla en la cual poner la columna
   //                       2. el nombre de la nueva columna 
   await queryInterface.addColumn('reviews',
   'bootcamp_id',
   { 
     type: Sequelize.INTEGER,
     references: {
       model: 'bootcamps',
       key: 'id'
     },
     onUpdate: 'CASCADE',
     onDelete: 'SET NULL'
   }),
   await queryInterface.addColumn('reviews',
   'user_id', 
   {
    type: Sequelize.INTEGER,
     references: {
       model: 'users',
       key: 'id'
     },
     onUpdate: 'CASCADE',
     onDelete: 'SET NULL'
   }
)
},

async down (queryInterface, Sequelize) {
//METODO REMODECOLUMN
// parametros 1. la tabla donde se remieve la columna
//             2.la columna a elimar
await queryInterface.removeColumn('reviews' , 'bootcamp_id' , 'user_id' )
}
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('bootcamps', 
                                      [{
                                        name: 'php Bootcamp',
                                        description: 'Bootcamp for php learning',
                                        phone: '(57)6001232',
                                        average_cost: 4500,
                                        average_rating: 3,
                                        user_id: 2
                                      },
                                      {
                                        name: 'Express Backend',
                                        description: 'Bootcamp for javascript learning',
                                        phone: '(57)6001232',
                                        average_cost: 4800,
                                        average_rating: 4,
                                        user_id: 1
                                      },
                                      {
                                        name: 'CSS styles',
                                        description: 'Bootcamp for css styles',
                                        phone: '(57)6001232',
                                        average_cost: 5000,
                                        average_rating: 5,
                                        user_id: 3
                                      }
                                    ], {});
    
  },

  async down (queryInterface, Sequelize) {
       await queryInterface.bulkDelete('bootcamps', null, {});
    
  }
};

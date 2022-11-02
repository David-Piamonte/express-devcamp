'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', 
                                    [{
                                      title: 'php Bootcamp',
                                      description: 'Bootcamp for php learning',
                                      weeks: 3,
                                      enroll_cost: 5000,
                                      minimum_skill: 'good',
                                      bootcamp_id: 1
                                    },
                                    {
                                      title: 'php Bootcamp',
                                      description: 'Bootcamp for php learning',
                                      weeks: 3,
                                      enroll_cost: 5000,
                                      minimum_skill: 'good',
                                      bootcamp_id: 2
                                    },
                                    {
                                      title: 'php Bootcamp',
                                      description: 'Bootcamp for php learning',
                                      weeks: 3,
                                      enroll_cost: 5000,
                                      minimum_skill: 'good',
                                      bootcamp_id: 3
                                    },
                                  ], {});
  
},

async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('courses', null, {});
  
}
};

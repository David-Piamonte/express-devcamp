'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', 
                                    [{
                                      title: 'php Bootcamp',
                                      text: 'Bootcamp for php learning',
                                      rating: 3,
                                      bootcamp_id: 1,
                                      user_id: 1
                                    },
                                    {
                                      title: 'php Bootcamp',
                                      text: 'Bootcamp for php learning',
                                      rating: 3,
                                      bootcamp_id: 1,
                                      user_id: 3
                                    },
                                    {
                                      title: 'php Bootcamp',
                                      text: 'Bootcamp for php learning',
                                      rating: 3,
                                      bootcamp_id: 1,
                                      user_id: 3
                                    },
                                    {
                                      title: 'php Bootcamp',
                                      text: 'Bootcamp for php learning',
                                      rating: 3,
                                      bootcamp_id: 1,
                                      user_id: 1
                                    },
                                  ], {});
  
},

async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('reviews', null, {});
  
}
};

const axios = require('axios');

module.exports = {
  async up(queryInterface, Sequelize) {
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts');
    await queryInterface.bulkInsert(
      'Posts',
      data.map((el) => ({ title: el.title, body: el.body })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};

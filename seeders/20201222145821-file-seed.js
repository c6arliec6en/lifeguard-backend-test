'use strict';
const { v4: uuidv4 } = require('uuid')

let array = [
  'upload/file/test.doc',
  'upload/file/test.pdf',
  'upload/file/test.odt'
]


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Files',
      Array.from({ length: 3 }).map((item, index) =>
        ({
          fileId: uuidv4(),
          category: 'registration',
          title: 'file',
          url: array[index],
          show: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      ), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Files', null, {});
  }
};

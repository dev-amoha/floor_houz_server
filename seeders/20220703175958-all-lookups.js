'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const table = { tableName : "lookup", schema : queryInterface.sequelize.options.schema};
    console.log(table);
    return queryInterface.bulkInsert(table,
      [
        {
          id: 1,
          name: 'Laminte Flooring',
          description: 'Laminte Flooring',
          type: 'CATEGORY'
        },
        {
          id: 2,
          name: 'Hardwood Flooring',
          description: 'Hardwood Flooring',
          type: 'CATEGORY'
        },
        { id: 3, name: 'Carpet', description: 'Carpet', type: 'CATEGORY' },
        { id: 4, name: 'Tile', description: 'Tile', type: 'CATEGORY' },
        { id: 5, name: 'Vinyl', description: 'Vinyl', type: 'CATEGORY' },
        {
          id: 6,
          name: 'SPC Flooring',
          description: 'SPC Flooring',
          type: 'CATEGORY'
        },
        {
          id: 7,
          name: 'Natural Stone',
          description: 'Natural Stone',
          type: 'CATEGORY'
        },
        { id: 8, name: 'Rubber', description: 'Rubber', type: 'CATEGORY' },
        {
          id: 9,
          name: 'Artificial Grass',
          description: 'Artificial Grass',
          type: 'CATEGORY'
        },
        { id: 10, name: 'Quartz', description: 'Quartz', type: 'CATEGORY' },
        {
          id: 11,
          name: 'Countertop',
          description: 'Countertop',
          type: 'ROOM_TYPE'
        },
        {
          id: 12,
          name: 'Interior Floor',
          description: 'Interior Floor',
          type: 'ROOM_TYPE'
        },
        {
          id: 13,
          name: 'Shower Floor',
          description: 'Shower Floor',
          type: 'ROOM_TYPE'
        },
        {
          id: 14,
          name: 'Interior Wall',
          description: 'Interior Wall',
          type: 'ROOM_TYPE'
        },
        {
          id: 15,
          name: 'Exterior Wall',
          description: 'Exterior Wall',
          type: 'ROOM_TYPE'
        },
        {
          id: 16,
          name: 'Parking',
          description: 'Parking',
          type: 'ROOM_TYPE'
        },
        { id: 17, name: 'Black', description: '', type: 'COLOR' },
        { id: 18, name: 'Brown', description: '', type: 'COLOR' },
        { id: 19, name: 'Grey', description: '', type: 'COLOR' },
        { id: 20, name: 'Cream', description: '', type: 'COLOR' },
        { id: 21, name: 'Warranty', description: '', type: 'DOCUMENT_TYPE' },
        { id: 22, name: 'Catalog', description: '', type: 'DOCUMENT_TYPE' },
        { id: 23, name: 'Rectangle', description: '', type: 'SHAPE' },
        { id: 24, name: 'SQUARE', description: '', type: 'SHAPE' },
        {
          id: 25,
          name: '12X12',
          description: '{"unit":"inch","width":"12","height":"12"}',
          type: 'SIZE'
        },
        {
          id: 26,
          name: '12X24',
          description: '{"unit":"inch","width":"12","height":"24"}',
          type: 'SIZE'
        },
        {
          id: 27,
          name: '24X24',
          description: '{"unit":"inch","width":"24","height":"24"}',
          type: 'SIZE'
        },
        {
          id: 28,
          name: '36X36',
          description: '{"unit":"inch","width":"36","height":"36"}',
          type: 'SIZE'
        },
        { id: 29, name: 'Matte', description: '', type: 'FINISH' },
        { id: 30, name: 'Polished', description: '', type: 'FINISH' },
        { id: 31, name: 'Honed', description: '', type: 'FINISH' },
        { id: 32, name: 'Scraped', description: '', type: 'FINISH' },
        { id: 33, name: 'Natural', description: '', type: 'MATERIAL_TYPE' },
        {
          id: 34,
          name: 'Artificial',
          description: '',
          type: 'MATERIAL_TYPE'
        },
        { id: 35, name: 'Kajaria', description: 'Kajaria', type: 'BRAND' },
        { id: 36, name: 'Water Proof', description: '', type: 'PROPERTY' },
        {
          id: 37,
          name: 'Dust Free Installation',
          description: '',
          type: 'PROPERTY'
        },
        {
          id: 38,
          name: 'Scratch Resistant',
          description: '',
          type: 'PROPERTY'
        },
        { id: 39, name: 'Nitco', description: 'Nitco', type: 'BRAND' },
        { id: 40, name: 'Pergo', description: 'Pergo', type: 'BRAND' },
        { id: 41, name: 'Welspun', description: 'Welspun', type: 'BRAND' },
        {
          id: 42,
          name: 'Terrace',
          description: 'Terrace',
          type: 'ROOM_TYPE'
        }
      ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

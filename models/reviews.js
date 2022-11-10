'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'title debe estar presente'
        },
        notEmpty:  {
          args: true,
          msg: 'title no debe ser vacio'
        },
      }
    },
    text:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'text debe estar presente'
        },
        notEmpty:  {
          args: true,
          msg: 'text no debe ser vacio'
        },
      }
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'title debe estar presente'
        },
        notEmpty:  {
          args: true,
          msg: 'title no debe ser vacio'
        },
      }
    },
  }, 
  {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
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
    description:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'description debe estar presente'
        },
        notEmpty:  {
          args: true,
          msg: 'description no debe ser vacio'
        },
      }
    },
    weeks:{
      type: DataTypes.INTEGER,
      validate:{
        len:{
          args:[1],
          msg:"debe contener solo un numero"
        }
      }
    }, 
    enroll_cost:
    {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'enroll const debe estar presente'
        },
        notEmpty:  {
          args: true,
          msg: 'enroll cost no debe ser vacio'
        },
      }
    },
    minimum_skill:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'minimum skill debe estar presente'
        },
        notEmpty:  {
          args: true,
          msg: 'minimun skill no debe ser vacio'
        },
      }
    } 
  }, {
    sequelize,
    modelName: 'courses',
  });
  return courses;
};
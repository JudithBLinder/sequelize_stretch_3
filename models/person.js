const db = require('../db');
const Sequelize = require('sequelize');
const Recipe = require('./recipe');

const Person = db.define('Person', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

Person.findWithRecipes = async function () {
  const recipes = await Recipe.findAll();
  return recipes.filter((recipe) => recipe.personId !== null);
};

Person.prototype.writeRecipe = function (recipe) {
  return Recipe.create({ ...recipe, PersonId: this.id });
};
module.exports = Person;

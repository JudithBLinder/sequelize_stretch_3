const Person = require('./person');
const Recipe = require('./recipe');
//YOUR CODE HERE

Recipe.belongsToMany(Person, {through: });
Person.belongsToMany(Recipe, {through: });

module.exports = { Person, Recipe };

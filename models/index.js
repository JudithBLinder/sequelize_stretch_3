const Person = require('./person');
const Recipe = require('./recipe');
//YOUR CODE HERE

Person.hasMany(Recipe);

module.exports = { Person, Recipe };

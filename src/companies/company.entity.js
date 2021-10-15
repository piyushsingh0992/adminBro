

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Piyush = sequelize.define('Piyush', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  piyushName :{
    type: DataTypes.STRING    
  }
}, {
  // Other model options go here
});

(async () => {
  await sequelize.sync({ force: true });


  const jane = Piyush.build({ firstName: "Jane" });
  console.log(jane instanceof Piyush); // true
  console.log(jane.name);
  await jane.save();

console.log('Jane was saved to the database!');
})();

module.exports = { Piyush };

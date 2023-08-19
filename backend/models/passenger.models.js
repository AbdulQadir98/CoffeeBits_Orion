const passengerModule = (sequelize, Sequelize) => {
  const passenger = sequelize.define("passenger", {
    passengerId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    GIN: {
      type: Sequelize.STRING
    },

    name: {
      type: Sequelize.STRING
    },

    email: {
      type: Sequelize.STRING
    },

    age: {
      type: Sequelize.INTEGER
    },

    gender: {
      type: Sequelize.STRING
    },

    food: {
      type: Sequelize.STRING,
    },
  });

  return passenger;
};

module.exports = { passengerModule };

const passengerModule = (sequelize, Sequelize) => {
  const passenger = sequelize.define("passenger", {
    passengerId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    GIN: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    dob: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    food: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return passenger;
};

module.exports = { passengerModule };

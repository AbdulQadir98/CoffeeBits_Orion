const flightScheduleModule = (sequelize, Sequelize) => {
  const flightSchedule = sequelize.define("flightSchedule", {
    scheduleId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    flightName: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    departureTime: {
      type: Sequelize.TIME,
    },

    arrivalTime: {
      type: Sequelize.TIME,
    },

    departureDate: {
      type: Sequelize.DATEONLY,
    },

    duration: {
      type: Sequelize.TIME,
    },

    businessClassSeatCount: {
      type: Sequelize.INTEGER,
    },

    economyClassSeatCount: {
      type: Sequelize.INTEGER,
    },

    firstClassSeatCount: {
      type: Sequelize.INTEGER,
    },
  });

  return flightSchedule;
};

module.exports = { flightScheduleModule };

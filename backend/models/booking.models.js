module.exports = (sequelize, Sequelize) => {

    const booking = sequelize.define("booking", {
        bookingId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        }
    });

    return booking;
};
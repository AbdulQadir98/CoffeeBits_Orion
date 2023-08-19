module.exports = (sequelize, Sequelize) => {

    const planet = sequelize.define("planet", {
        planetId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        description: {
            type: Sequelize.TEXT
        }
    });

    return planet;
};
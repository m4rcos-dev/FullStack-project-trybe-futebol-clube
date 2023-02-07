module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      team_name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
    })
  },

  async down(QueryInterface) {
    await QueryInterface.dropTable('teams')
  }
};

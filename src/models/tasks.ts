const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;


const sequelize = new Sequelize("todo-app", "root", "Pilot2021*", {
  dialect: "mysql",
});

const Tasks = sequelize.define(
  "tasks",
  {
    task_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Tasks;

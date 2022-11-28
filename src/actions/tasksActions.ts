import Tasks from "../models/tasks";

export const getAllTasks = () => {
  return Tasks.findAll()
    .then((item: any) => item)
    .catch(() => console.log("problem getting dataa"));
};

export const connectToDb = () => {
  Tasks.sync({ alter: true })
    .then(() => {
      console.log("connnected to db");
    })
    .catch((err: any) => {
      console.log("Error syncing table and model", err.message);
    });
};

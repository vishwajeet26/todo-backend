import express, { Request, Response } from "express";
import { getAllTasks } from "../actions/tasksActions";
import Tasks from "../models/tasks";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const allTasks = await getAllTasks();
  res.send(allTasks);
});

router.post("/create", async (req: Request, res: Response) => {
  if (!req.body.task || req.body.task.length < 3) {
    res.status(400).send("Task is required and should be minimum 3 characters");
    return;
  }
  if (req.body.completed && req.body.completed !== "true") {
    res.status(400).send("Completed task value should be true");
    return;
  }
  await Tasks.create({
    task: req.body.task,
    completed: req.body.completed || false,
  });
  const updatedTasks = await getAllTasks();
  res.send(updatedTasks);
});

router.put("/:id", async (req: Request, res: Response) => {
  if (!req.body.task || req.body.task.length < 3) {
    res.status(400).send("Task is required and should be minimum 3 characters");
    return;
  } 
   if (req.body.completed && req.body.completed !== "true") {
     res.status(400).send("Completed task value should be true");
     return;
   }
  await Tasks.update(
    { task: req.body.task, completed: req.body.completed || false },
    {
      where: {
        task_id: parseInt(req.params.id),
      },
    }
  );
  const updatedTasks = await getAllTasks();
  res.send(updatedTasks);
});

router.delete("/:id", async (req: Request, res: Response) => {
  await Tasks.destroy({
    where: {
      task_id: parseInt(req.params.id),
    },
  });
  const updatedTasks = await getAllTasks();
  res.send(updatedTasks);
});
export default router;

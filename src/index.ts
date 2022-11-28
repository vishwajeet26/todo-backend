import express from "express";
import { connectToDb } from "./actions/tasksActions";
import routes from "./routes/tasks";

const app = express();

app.use(express.json());
connectToDb();
app.use("/", routes);
app.use("/tasks", routes);
app.use("/tasks/edit", routes);
app.use("/tasks/delete", routes);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listenning on port ${port}`));

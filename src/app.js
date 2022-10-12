import express from 'express';
import projectsRoutes from './routes/projects.routes.js';
import taskRoutes from './routes/tasks.routes.js';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(projectsRoutes);
app.use(taskRoutes);

export default app;

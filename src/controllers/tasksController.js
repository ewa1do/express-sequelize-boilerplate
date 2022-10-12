import { Task } from '../models/Task.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.findAll();

  res.status(200).json({
    status: 'success',
    body: tasks,
  });
};

export const getTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findOne({
    where: {
      id,
    },
  });

  res.status(200).json({
    status: 'success',
    body: task,
  });
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;

  const newTask = await Task.create({
    name,
    done,
    projectId,
  });

  res.status(201).json({
    status: 'success',
    data: newTask,
  });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;

  const task = await Task.findByPk(id);

  task.name = name;
  task.done = done;
  task.projectId = projectId;

  await task.save();

  res.status(200).json({
    status: 'success',
    body: task,
  });
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.destroy({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

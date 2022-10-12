import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';

export const getProjects = async (req, res) => {
  const projects = await Project.findAll();

  res.status(200).json({
    status: 'success',
    body: projects,
  });
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  const project = await Project.findOne({
    where: {
      id,
    },
  });

  res.status(200).json({
    status: 'success',
    body: project,
  });
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const data = await Project.create({
      name,
      priority,
      description,
    });

    res.status(201).json({
      status: 'success',
      body: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description, priority } = req.body;

  const project = await Project.findByPk(id);

  project.name = name;
  project.description = description;
  project.priority = priority;

  await project.save();

  res.status(200).json({
    status: 'success',
    body: project,
  });
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  await Project.destroy({
    where: {
      id,
    },
  });

  res.sendStatus(204);
};

export const getProjectTask = async (req, res) => {
  const { id } = req.params;

  const tasks = await Task.findAll({
    where: {
      projectId: id,
    },
  });

  res.status(200).json({
    status: 'success',
    data: tasks,
  });
};

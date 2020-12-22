import { projectTypeRouter } from './projectType.router.js';
import { projectStatusRouter } from './projectStatus.router.js';
import { clientRouter } from './client.router.js';
import { techStackRouter } from './techStack.router.js'
import { employeeRouter } from './employee.router.js';
import { projectRouter } from './project.router.js';
import { departmentRouter } from './department.router.js';

export const routes = [
  projectTypeRouter,
  projectStatusRouter,
  clientRouter,
  techStackRouter,
  employeeRouter,
  projectRouter,
  departmentRouter
];
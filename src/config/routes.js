import { projectTypeRouter } from '../components/project-type/projectType.router.js';
import { projectStatusRouter } from '../components/project-status/projectStatus.router.js';
import { clientRouter } from '../components/client/client.router.js';
import { techStackRouter } from '../components/techstack/techStack.router.js';
import { employeeRouter } from '../components/employee/employee.router.js';
import { projectRouter } from '../components/project/project.router.js';
import { departmentRouter } from '../components/department/department.router.js';

export const routes = [
  projectTypeRouter,
  projectStatusRouter,
  clientRouter,
  techStackRouter,
  employeeRouter,
  projectRouter,
  departmentRouter,
];

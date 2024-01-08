import staffRoutes from './staffRoutes';
import residentRoutes from './residentRoutes';

import { Navigate } from 'react-router-dom';

import Login from '../pages/login/Login';
import adminRoutes from './adminRoutes';

const routes = [
  {
    path: '/',
    element: <Navigate to='/login' />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  ...staffRoutes,
  ...residentRoutes,
  ...adminRoutes,
];

export default routes;

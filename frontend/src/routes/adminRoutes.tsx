import { Navigate } from 'react-router-dom';

import LayoutProvider from '../layouts/LayoutProvider';
import AdminNavbar from '../layouts/navbar/AdminNavbar';
import { StatisticRevenue } from '../pages/admin/statistic/StatisticRevenue';
import { AdminDashboard } from '../pages/admin/AdminDashboard';
import { StatisticResident } from '../pages/admin/statistic/StatisticResident';

const residentRoutes = [
  {
    path: '/manager',
    element: <Navigate to='/manager/dashboard' />,
  },
  {
    path: '/manager/dashboard',
    element: (
      <LayoutProvider navbar={<AdminNavbar />}>
        <AdminDashboard />
      </LayoutProvider>
    ),
  },
  {
    path: '/manager/statistic-revenue',
    element: (
      <LayoutProvider navbar={<AdminNavbar />}>
        <StatisticRevenue />
      </LayoutProvider>
    ),
  },
  {
    path: '/manager/statistic-resident',
    element: (
      <LayoutProvider navbar={<AdminNavbar />}>
        <StatisticResident />
      </LayoutProvider>
    ),
  },
];
export default residentRoutes;

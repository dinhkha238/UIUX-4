import { Navigate } from 'react-router-dom';

import LayoutProvider from '../layouts/LayoutProvider';

import ResidentDashboard from '../pages/resident/ResidentDashboard';
import ResidentNavbar from '../layouts/navbar/ResidentNavbar';
import UserManagement from '../pages/resident/UserManagement';
import ResidentDeclaration from '../pages/resident/ResidentDeclaration';
import ResidentComplaints from '../pages/resident/ResidentComplaints';
import ResidentAddComplaint from '../pages/resident/ResidentAddComplaint';

// Todo add profile

const residentRoutes = [
  {
    path: '/resident',
    element: <Navigate to='/resident/dashboard' />,
  },
  {
    path: '/resident/dashboard',
    element: (
      <LayoutProvider navbar={<ResidentNavbar />}>
        <ResidentDashboard />
      </LayoutProvider>
    ),
  },
  {
    path: '/resident/member-management',
    element: (
      <LayoutProvider navbar={<ResidentNavbar />}>
        <UserManagement />
      </LayoutProvider>
    ),
  },
  {
    path: '/resident/declaration',
    element: (
      <LayoutProvider navbar={<ResidentNavbar />}>
        <ResidentDeclaration />
      </LayoutProvider>
    ),
  },
  {
    path: '/resident/complaint',
    element: (
      <LayoutProvider navbar={<ResidentNavbar />}>
        <ResidentComplaints />
      </LayoutProvider>
    ),
  },
  {
    path: '/resident/add-complaint',
    element: (
      <LayoutProvider navbar={<ResidentNavbar />}>
        <ResidentAddComplaint />
      </LayoutProvider>
    ),
  },
];
export default residentRoutes;

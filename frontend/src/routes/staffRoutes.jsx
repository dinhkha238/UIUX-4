import { Navigate } from 'react-router-dom';

import LayoutProvider from '../layouts/LayoutProvider';
import StaffDashboard from '../pages/staff/StaffDashboard';

import StaffNavbar from '../layouts/navbar/StaffNavbar';
import StaffApartment from '../pages/staff/apartment/StaffApartment';
import StaffApartmentAdd from '../pages/staff/apartment/StaffApartmentAdd';
import StaffApartmentUpdate from '../pages/staff/apartment/StaffApartmentUpdate';
import StaffResident from '../pages/staff/resident.jsx/StaffResident';
import StaffResidentAdd from '../pages/staff/resident.jsx/StaffResidentAdd';

const staffRoutes = [
  {
    path: '/staff',
    element: <Navigate to='/staff/dashboard' />,
  },
  {
    path: '/staff/dashboard',
    element: (
      <LayoutProvider navbar={<StaffNavbar />}>
        <StaffDashboard />
      </LayoutProvider>
    ),
  },
  {
    path: '/staff/apartment',
    element: (
      <LayoutProvider navbar={<StaffNavbar />}>
        <StaffApartment />
      </LayoutProvider>
    ),
  },
  {
    path: '/staff/apartment/add',
    element: (
      <LayoutProvider navbar={<StaffNavbar />}>
        <StaffApartmentAdd />
      </LayoutProvider>
    ),
  },
  {
    path: '/staff/apartment/update',
    element: (
      <LayoutProvider navbar={<StaffNavbar />}>
        <StaffApartmentUpdate />
      </LayoutProvider>
    ),
  },
  {
    path: '/staff/apartment/update',
    element: (
      <LayoutProvider navbar={<StaffNavbar />}>
        <StaffApartmentUpdate />
      </LayoutProvider>
    ),
  },
  {
    path: '/staff/resident',
    element: (
      <LayoutProvider navbar={<StaffNavbar />}>
        <StaffResident />
      </LayoutProvider>
    ),
  },
  {
    path: '/staff/resident/add',
    element: (
      <LayoutProvider navbar={<StaffNavbar />}>
        <StaffResidentAdd />
      </LayoutProvider>
    ),
  },
];

export default staffRoutes;

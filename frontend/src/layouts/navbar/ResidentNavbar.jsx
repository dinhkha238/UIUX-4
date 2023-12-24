import Navbar from './Navbar';

const items = [
  { name: 'Trang chủ', route: 'dashboard' },
  { name: 'Hồ sơ', route: 'profile' },
  { name: 'Đóng phí', route: 'charge' },
  { name: 'Thông báo', route: 'notification' },
  { name: 'Khiếu nại', route: 'complaint' },
  { name: 'Tạm trú', route: 'temporary-residence' },
  { name: 'Tạm vắng', route: 'temporary-absence' },
];

export default function ResidentNavbar() {
  return <Navbar base='resident' items={items} />;
}

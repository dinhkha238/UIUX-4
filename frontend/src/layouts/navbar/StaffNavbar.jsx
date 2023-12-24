import Navbar from './Navbar';

const items = [
  { name: 'Trang chủ', route: 'dashboard' },
  { name: 'Căn hộ', route: 'apartment' },
  { name: 'Quản lý dân cư', route: 'resident' },
  { name: 'Khiếu nại', route: 'complaint' },
  { name: 'Thông báo', route: 'notification' },
  { name: 'Phí', route: 'charge' },
  { name: 'Hồ sơ', route: 'profile' },
];

export default function StaffNavbar() {
  return <Navbar base='staff' items={items} />;
}

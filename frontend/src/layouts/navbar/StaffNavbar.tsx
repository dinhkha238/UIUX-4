import Navbar from './Navbar';

const items = [
  { name: 'Trang chủ', route: 'dashboard' },
  { name: 'Căn hộ', route: 'apartment' },
  { name: 'Quản lý cư dân', route: 'resident' },
  { name: 'Phí', route: 'invoice' },
  { name: 'Yêu cầu', route: 'request' },
  { name: 'Thông báo', route: 'notification' },
  { name: 'Hồ sơ', route: 'profile' },
];

export default function StaffNavbar() {
  return <Navbar base='staff' items={items} />;
}

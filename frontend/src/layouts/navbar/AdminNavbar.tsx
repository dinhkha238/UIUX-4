import Navbar from './Navbar';

const items = [
  { name: 'Trang chủ', route: 'dashboard' },
  { name: 'Thống kê phí', route: 'statistic-revenue' },
  { name: 'Thống kê dân cư', route: 'statistic-resident' },
];

export default function AdminNavbar() {
  return <Navbar base='manager' items={items} />;
}

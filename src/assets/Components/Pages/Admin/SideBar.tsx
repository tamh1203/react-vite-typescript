import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBars, FaHome, FaUser, FaCog, FaChartPie } from 'react-icons/fa';
import './SideBar.scss';
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar className="sidebar-container" collapsed={collapsed}>
        <Menu>
          <MenuItem icon={<FaBars />} onClick={() => setCollapsed(!collapsed)}>
            {!collapsed ? 'Thu gọn' : ''}
          </MenuItem>
          <MenuItem icon={<FaHome />}>Trang chủ</MenuItem>
          <MenuItem icon={<FaChartPie />}>Thống kê</MenuItem>
          <SubMenu icon={<FaUser />} label="Tài khoản">
            <MenuItem>Thông tin</MenuItem>
            <MenuItem>Cài đặt</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaCog />}>Cấu hình</MenuItem>
        </Menu>
        <div>
          {!collapsed && (
            <div className="footer">
              <span className="text-footer">© 2025 Huynh Inc.</span>
            </div>
          )}
        </div>
      </Sidebar>

      <main className="main-content">
        <h1>Nội dung chính</h1>
      </main>
    </div>
  );
};

export default SideBar;

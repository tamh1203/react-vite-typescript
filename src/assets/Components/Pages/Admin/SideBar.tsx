import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaHome, FaUser, FaCog, FaChartPie } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaAffiliatetheme, FaToggleOff, FaToggleOn } from 'react-icons/fa6';
import { HiDocumentReport } from 'react-icons/hi';
import bg_sidebar from './../../../../../public/image/bg2.jpg';
import { Link } from 'react-router-dom';
import './SideBar.scss';

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="sidebar-container">
      <Sidebar image={bg_sidebar} collapsed={collapsed}>
        <Menu>
          <MenuItem onClick={() => setCollapsed(!collapsed)}>
            <span className="toggle">
              {!collapsed ? <FaToggleOff /> : <FaToggleOn />}
            </span>
          </MenuItem>
          <MenuItem icon={<FaHome />} component={<Link to="/admin" />}>
            Home
          </MenuItem>
          <MenuItem icon={<FaChartPie />}>Quantily</MenuItem>
          <SubMenu icon={<FaUser />} label="Account">
            <MenuItem component={<Link to="manage-user" />}>Manage</MenuItem>
            <MenuItem>Settings</MenuItem>
          </SubMenu>
          <MenuItem icon={<IoIosMail />}>Gmail</MenuItem>
          <MenuItem icon={<FaAffiliatetheme />}>Themes</MenuItem>
          <MenuItem icon={<HiDocumentReport />}>Contact</MenuItem>
          <MenuItem icon={<FaCog />}>Settings</MenuItem>
        </Menu>
        <div>
          {!collapsed && (
            <div className="footer">
              <span className="text-footer">© 2025 Huynh Inc.</span>
            </div>
          )}
        </div>
      </Sidebar>
    </div>
  );
};

export default SideBar;

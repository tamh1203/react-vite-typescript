import SideBar from './SideBar';
import './AdminPage.scss';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar />
      </div>
      <div className="admin-content">
        <div className="content-dashboard">
          <Outlet />
        </div>
        {/* <div className="content-manager-user"></div> */}
      </div>
    </div>
  );
};

export default AdminPage;

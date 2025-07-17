import SideBar from './SideBar';
import './AdminPage.scss';

const AdminPage = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar />
      </div>
      <div className="admin-content">content</div>
    </div>
  );
};

export default AdminPage;

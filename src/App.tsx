import './App.scss';
import Header from './assets/Components/Header/Header';
import { Outlet } from 'react-router-dom'; // nested router -> gọi đến các roter con nào nằm trong router app, xuất hiện ở app-content
function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidebar-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

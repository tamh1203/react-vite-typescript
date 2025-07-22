import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from './App.tsx';
import HomePage from './assets/Components/Pages/Home/HomePage.tsx';
import UserPage from './assets/Components/Pages/Users/UserPage.tsx';
import AdminPage from './assets/Components/Pages/Admin/AdminPage.tsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Gobal from './assets/Components/Pages/Gobal/Gobal.tsx';
import DashBoard from './assets/Components/Pages/Admin/Content/DashBoard.tsx';
import ManageUser from './assets/Components/Pages/Admin/Content/ManagerUser.tsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="gobal" element={<Gobal />} />
      </Route>
      <Route path="/admin" element={<AdminPage />}>
        <Route index element={<DashBoard />} />
        <Route path="manage-user" element={<ManageUser />} />
      </Route>
    </>
  )
);

export default router;

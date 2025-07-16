import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from './assets/Components/Pages/Home/HomePage.tsx';
import UserPage from './assets/Components/Pages/Users/UserPage.tsx';
import AdminPage from './assets/Components/Pages/Admin/AdminPage.tsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Gobal from './assets/Components/Pages/Gobal/Gobal.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="gobal" element={<Gobal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

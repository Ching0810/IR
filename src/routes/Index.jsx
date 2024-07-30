import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Wallet from '../components/Wallet/Wallet';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path='wallet' element={<Wallet />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
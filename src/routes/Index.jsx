import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Wallet from '../components/Wallet/Wallet';
import Account from '../components/Wallet/Account';
import Deposit from '../components/Wallet/Deposit';
import Withdraw from '../components/Wallet/Withdraw';
import Balance from '../components/Wallet/Balance';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path='wallet' element={<Wallet />} />
      <Route path="wallet/account" element={<Account />}>
        <Route index element={<Deposit />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="balance" element={<Balance />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
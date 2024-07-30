import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AccountButton from "./AccountButton";

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location.pathname]);

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="relative h-screen w-screen flex flex-col sm:flex-row">
      <div className="w-full sm:w-3/5 h-full relative">
        <img src="/src/assets/wallet.png" alt="Background" className="object-cover w-full h-full absolute inset-0 -z-10 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50 -z-10 md:hidden" />
        <div className="absolute inset-0 -z-10">
          <img src="/src/assets/wallet_bg.png" alt="Background" className="object-cover w-full h-full hidden md:block" />
        </div>
        <div className="absolute inset-0 pt-96 -z-10">
          <img src="/src/assets/wallet.png" alt="Wallet" className="w-full object-cover hidden md:block" />
        </div>
        <div className="flex flex-col p-10 space-y-8 h-full overflow-y-auto">
          <img src="/src/assets/coin.png" className="w-24 sm:w-40 cursor-pointer" onClick={handleHomeClick} />
          <div className="flex flex-col justify-between h-full space-y-8 pb-12 px-4 sm:px-16">
            <div className="flex flex-col space-y-4">
              <div className="text-4xl md:text-6xl text-white font-bold uppercase">
                Live e-wallet
              </div>
              <div className="text-lg md:text-2xl text-white font-bold">
                Safety
              </div>
              <div className="text-sm md:text-lg text-white">
                We keep your funds in top-tier banks, and they’re fully segregated from our own.
              </div>
            </div>
            <div className="flex flex-row text-center space-x-5 px-2 sm:px-5 md:flex">
              <AccountButton text="Deposit" route="deposit" isActive={activeButton === "/wallet/account/deposit"} />
              <AccountButton text="Withdraw" route="withdraw" isActive={activeButton === "/wallet/account/withdraw"} />
              <AccountButton text="Balance" route="balance" isActive={activeButton === "/wallet/account/balance"} />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Account;
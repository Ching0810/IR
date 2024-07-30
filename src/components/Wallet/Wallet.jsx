import { useNavigate } from "react-router-dom";
import InputID from "../InputID";
import InputPassword from "../InputPassword";
import LoginButton from "../LoginButton";

const Wallet = () => {
  const navigate = useNavigate();

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
            <div className="flex-col text-center space-y-5 px-2 sm:px-5 hidden md:block">
              <div className="text-xl sm:text-2xl text-white font-bold">
                Play Anywhere, Anytime
              </div>
              <div className="text-sm sm:text-base text-white">
                Available exclusively for Pearl, Jack Phoenix, and Dragon Patrons, you can now play live casino games online, anytime and anywhere within the Philippines. For the best playing experience, use Chrome.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5 bg-black flex flex-col justify-center p-10 sm:px-16 space-y-10">
        <div className="text-left space-y-6">
          <div className="text-3xl text-white font-medium">
            Sign in
          </div>
          <div className="text-base text-white">
            If you don’t have an account, register
          </div>
          <div className="flex space-x-2">
            <div className="text-base text-white">
              You can
            </div>
            <div className="text-buttonColor">
              Register here!
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <InputID />
          <InputPassword />
        </div>
        <LoginButton />
        <div className="text-center space-y-4 px-5 hidden md:block">
          <div className="text-2xl text-white font-medium">
            How to Play
          </div>
          <div className="text-base font-light text-white">
            A step-by-step guide on how to register, login, and navigate your way through the EMAGINE game lobby.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
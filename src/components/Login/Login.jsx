import { useNavigate } from "react-router-dom"
import InputID from "../InputID"
import InputPassword from "../InputPassword"
import LoginButton from "../LoginButton"

const Login = () => {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      
      <div className="flex flex-row h-full">
        <div className="w-3/5 relative">
          <div className="absolute inset-0 -z-10">
            <img src="/src/assets/login.png" alt="Background" className="object-cover w-full h-full" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50 -z-10" />
          <div className="flex flex-col p-10 space-y-8 h-full overflow-y-auto">
            <img src="/src/assets/coin.png" className="w-40" onClick={handleHomeClick} />
            <div className="flex flex-col justify-between h-full space-y-8 pb-12 px-16">
              <div className="flex flex-col space-y-4">
                <div className="text-4xl md:text-6xl text-white font-bold uppercase">
                  Live Casino Online
                </div>
                <div className="text-2xl md:text-2xl text-white font-bold">
                  Brought to you by Resorts World Manila
                </div>
                <div className="text-sm md:text-lg text-white">
                  Activate now and enjoy a new game play experience anywhere within the nation!
                </div>
              </div>
              <div className="flex flex-col text-center justify-between space-y-5 md:space-y-0 md:space-x-5 px-5">
                <div className="w-full space-y-3 px-2">
                  <div className="text-2xl text-white font-bold pb-3">
                    Play Anywhere, Anytime
                  </div>
                  <div className="text-lg  text-white">
                    Available exclusively for Pearl, Jack Phoenix and Dragon Patrons, you can now play live casino games online, anytime and anywhere within the Philippines.
For the best playing experience, use Chrome
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 bg-black flex flex-col justify-center px-16 space-y-20">
          <div className="flex-col">
            <div className="text-3xl text-white font-medium pb-6 text-left">
              Sign in
            </div>
            <div className="text-base text-white">
              If you don’t have an account register 
            </div>
            <div className="flex space-x-2">
              <div className="text-base text-white">
                You can
              </div>
              <div className="text-buttonColor">
                Register here !
              </div>
            </div>
          </div>
          <div className="flex-col space-y-10 pb-12">
            <InputID />
            <InputPassword />
          </div>
          <LoginButton />
          <div className="flex flex-col text-center justify-between space-y-0 px-5">
            <div className="text-2xl text-white font-medium">
              How to Play
            </div>
            <div className="text-base font-light  text-white">
              A step by step guide on how to register, login, and navigate your way through the EMAGINE game lobby.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
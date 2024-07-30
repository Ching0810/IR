import { useNavigate } from 'react-router-dom'
import MainButton from '../MainButton'

const Home = () => {
  const navigate = useNavigate()

  const handlePlayClick = () => {
    navigate('/login')
  }

  const handleWalletClick = () => {
    navigate('/wallet')
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src="/src/assets/image.png" alt="Background" className="object-cover w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900 opacity-70 -z-10"></div>
      <div className="flex flex-col p-10 space-y-8 h-full overflow-y-auto">
        <img src="/src/assets/coin.png" className="w-24 sm:w-40" />
        <div className="flex flex-col justify-between h-full space-y-8 pb-20">
          <div className="flex flex-col space-y-4 px-1 sm:px-6">
            <div className="text-4xl md:text-6xl text-white font-bold uppercase">
              Grand Opening Luxury Resort in the Philippines!
            </div>
            <div className="text-sm md:text-lg text-white">
              Our new resort is now open, offering luxurious accommodations and thrilling casino experiences. Stay in ocean-view villas or premium suites, and enjoy gourmet dining. Our casino features a variety of games for endless entertainment.
              Book now and experience the Philippines' finest resort and casino!
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5 px-1 sm:px-5 pr-20">
            <div className="w-full md:w-1/2 space-y-3 px-0 sm:px-2">
              <div className="text-4xl md:text-5xl text-white font-bold pb-3">
                Live Casino Online
              </div>
              <div className="text-xl md:text-2xl text-white font-bold">
                Brought to you by Resorts World Manila
              </div>
              <div className="text-sm md:text-lg text-white">
                Activate now and enjoy a new game play experience anywhere within the nation!
              </div>
              <MainButton text={'Play'} onClick={handlePlayClick} />
            </div>
            <div className="w-full md:w-1/2 space-y-3 px-2">
              <div className="text-4xl md:text-5xl text-white font-bold pb-3">
                Live E-Wallet
              </div>
              <div className="text-xl md:text-2xl text-white font-bold">
                Safety
              </div>
              <div className="text-sm md:text-lg text-white">
                We keep your funds in top-tier banks, and they’re fully segregated from our own.
              </div>
              <MainButton text={'Wallet'} onClick={handleWalletClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
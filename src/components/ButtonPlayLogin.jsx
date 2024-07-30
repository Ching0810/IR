import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ButtonPlayLogin({ memberID }) {
  const navigate = useNavigate();

  const urls = {
    'demo1': 'https://prd10-icontent.calda.win/rgp/9888/clients/1.1.28/index.html?ihelp=https://prd10-cf.calda.win&property_id=50001&igl=https://prd10igamelist.calda.win&player_token=eyJhbGciOiJIUzI1NiJ9.eyJsaWNlbnNlZV9pZCI6NTAwMDAsImNhc2lub19pZCI6NTAwMDAsInByb3BlcnR5X2lkIjo1MDAwMSwicGxheWVyX2lkIjoxMDAsImxvZ2luX25hbWUiOiJkZW1vMSIsImFjY3RfbG9naW4iOiJkZW1vMSIsImhvbGRlcm5hbWUiOiJQSC01MDAwMSIsImN1cnJlbmN5X2lkIjoxLCJjdXJyZW5jeSI6IlBIUCIsIndoaXRlbGlzdGVkIjpmYWxzZSwidGVzdF9tb2RlIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjQtMDEtMDMgMTI6Mjc6MzYifQ.mdyiXOnFU0-QYg3CFyJtCKqi2fZaulH88l3uZJDmhzI&lobby_id=9012',
    'demo2': 'https://prd10-icontent.calda.win/rgp/9888/clients/1.1.28/index.html?ihelp=https://prd10-cf.calda.win&property_id=50001&igl=https://prd10-igamelist.calda.win&player_token=eyJhbGciOiJIUzI1NiJ9.eyJsaWNlbnNlZV9pZCI6NTAwMDAsImNhc2lub19pZCI6NTAwMDAsInByb3BlcnR5X2lkIjo1MDAwMSwicGxheWVyX2lkIjoxMDEsImxvZ2luX25hbWUiOiJkZW1vMiIsImFjY3RfbG9naW4iOiJkZW1vMiIsImhvbGRlcm5hbWUiOiJQSC01MDAwMSIsImN1cnJlbmN5X2lkIjoxLCJjdXJyZW5jeSI6IlBIUCIsIndoaXRlbGlzdGVkIjpmYWxzZSwidGVzdF9tb2RlIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjQtMDEtMDMgMTI6Mjc6MzYifQ.Y-gINv86Hh25q0IynRjoMRJqHhN2f1Sy8hf-IhUsvOI&lobby_id=9012',
    'demo3': 'https://prd10-icontent.calda.win/rgp/9888/clients/1.1.28/index.html?ihelp=https://prd10-cf.calda.win&property_id=50001&igl=https://prd10-igamelist.calda.win&player_token=eyJhbGciOiJIUzI1NiJ9.eyJsaWNlbnNlZV9pZCI6NTAwMDAsImNhc2lub19pZCI6NTAwMDAsInByb3BlcnR5X2lkIjo1MDAwMSwicGxheWVyX2lkIjoxMDIsImxvZ2luX25hbWUiOiJkZW1vMyIsImFjY3RfbG9naW4iOiJkZW1vMyIsImhvbGRlcm5hbWUiOiJQSC01MDAwMSIsImN1cnJlbmN5X2lkIjoxLCJjdXJyZW5jeSI6IlBIUCIsIndoaXRlbGlzdGVkIjpmYWxzZSwidGVzdF9tb2RlIjpmYWxzZSwiY3JlYXRlZF9hdCI6IjIwMjQtMDEtMDMgMTI6Mjc6MzYifQ.eCnUdSpnhu9xH91K6g3qFVmiMO80ipbBe1_MbL_ZgAI&lobby_id=9012'
  };

  const handleClick = () => {
    if (urls[memberID]) {
      window.location.href = urls[memberID];
    } else {
      navigate('/login');
    }
  };

  return (
    <Button
      className="
        flex
        items-center
        justify-center
        gap-2 
        rounded-full
        bg-buttonColor
        py-2
        px-3
        text-lg
        w-full
        font-medium
        text-white 
        shadow-inner 
        shadow-white/10 
        focus:outline-none 
        data-[hover]:bg-gray-600 
        data-[open]:bg-gray-700 
        data-[focus]:outline-1 
        data-[focus]:outline-white"
      onClick={handleClick}
    >
      Login
    </Button>
  );
}

ButtonPlayLogin.propTypes = {
  memberID: PropTypes.string.isRequired,
};

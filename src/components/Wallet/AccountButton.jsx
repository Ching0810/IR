import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AccountButton({ text, route, isActive }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route); // Navigate to the route provided
  };

  return (
    <Button
      className={`
        flex
        items-center
        justify-center
        gap-2 
        rounded-full
        bg-buttonColor
        py-2
        px-3
        text-lg
        w-1/3
        font-medium
        text-white 
        shadow-inner 
        shadow-white/10 
        focus:outline-none 
        ${isActive ? 'bg-fuchsia-800' : 'bg-buttonColor'}
        data-[hover]:bg-fuchsia-600
        data-[focus]:outline-1 
        data-[focus]:outline-white
      `}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}

AccountButton.propTypes = {
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

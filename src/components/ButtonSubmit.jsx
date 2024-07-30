import { Button } from '@headlessui/react';

export default function ButtonSubmit() {

  const handleClick = () => {
    console.log('!!!!!')
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
      Submit
    </Button>
  );
}
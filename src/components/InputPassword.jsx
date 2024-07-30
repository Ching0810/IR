import { useState } from 'react';
import { Button, Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

export default function InputPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <Field>
        <Label className="text-sm font-medium text-white">Password</Label>
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            className={clsx(
              'mt-1 block w-full border-b border-white bg-inherit py-1.5 px-3 text-sm/6 text-white placeholder-white placeholder:text-base',
              'focus:outline-none focus:border-white'
            )}
          />
          <Button
            type="button"
            onClick={togglePasswordVisibility}
            className={clsx(
              'absolute inset-y-0 right-0 px-2 flex items-center',
              'bg-inherit'
            )}
          >
            {showPassword ? (
              <EyeIcon className='w-4 text-white' />
            ) : (
              <EyeSlashIcon className='w-4 text-white' />
            )}
          </Button>
        </div>
      </Field>
    </div>
  );
}

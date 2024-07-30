import { Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import RadioMethods from './RadioMethods'

export default function InputMethod() {
  return (
    <div className="w-full">
      <Field>
        <div className='flex-col space-y-3'>
          <Label className="text-sm font-medium text-white">Methods</Label>
          <RadioMethods />
          <Input
            placeholder='Enter your bank account numbers'
            className={clsx(
              'block w-full border-b border-white bg-inherit py-1.5 px-3 text-sm/6 text-white placeholder-white placeholder:text-base',
              'focus:outline-none focus:border-white'
            )}
          />
        </div>
      </Field>
    </div>
  )
}

import { Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

export default function InputBankAccount() {
  return (
    <div className="w-full">
      <Field>
        <Label className="text-sm font-medium text-white">Bank Account</Label>
        <Input
          placeholder='0000-0000-0000'
          className={clsx(
            'mt-1 block w-full border-b border-white bg-inherit py-1.5 px-3 text-sm/6 text-white placeholder-white placeholder:text-base',
            'focus:outline-none focus:border-white'
          )}
        />
      </Field>
    </div>
  )
}

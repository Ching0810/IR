import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const plans = ['ATM', 'PayMaya']

export default function RadioMethods() {
  let [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup value={selected} onChange={setSelected} aria-label="Server size">
      <div className='flex space-x-16'>
        {plans.map((plan) => (
          <Field key={plan} className="flex items-center gap-2">
            <Radio
              value={plan}
              className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
            >
              <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
            </Radio>
            <Label className="text-white">{plan}</Label>
          </Field>
        ))}
      </div>
    </RadioGroup>
  )
}
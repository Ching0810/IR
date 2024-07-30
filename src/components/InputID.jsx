import { Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function InputID({ value, onChange }) {
  return (
    <div className="w-full">
      <Field>
        <Label className="text-sm font-medium text-white">Member ID</Label>
        <Input
          placeholder="Enter your member ID"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(
            'mt-1 block w-full border-b border-white bg-inherit py-1.5 px-3 text-sm/6 text-white placeholder-white placeholder:text-base',
            'focus:outline-none focus:border-white'
          )}
        />
      </Field>
    </div>
  );
}

InputID.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

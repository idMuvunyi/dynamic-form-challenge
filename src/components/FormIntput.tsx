import React, { useState } from 'react';

export interface FormInputProps {
  name?: string;
  setName: (e: string) => void;
  isAddView?: boolean;
}

// input reusable component

const FormIntput = ({ name, setName, isAddView }: FormInputProps) => {
  const [nam, setNam] = useState<string>('');

  return (
    <div className="flex">
      <div className="flex flex-col gap-2 mb-8 mt-10 w-full">
        <label htmlFor="name" className="font-normal text-teal-900 text-sm">
          Name
        </label>
        <input
          type="text"
          autoFocus={true}
          name="name"
          id="name"
          required
          minLength={5}
          value={isAddView ? nam : name}
          placeholder="John Doe"
          className="input_styles"
          onChange={(e) => {
            setName(e.target.value);
            setNam(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default FormIntput;

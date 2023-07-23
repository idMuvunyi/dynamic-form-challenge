import React from 'react';

interface FormInputProps {
  name: string;
  setName: (e: string) => void;
}

const FormIntput = ({ name, setName }: FormInputProps) => {
  console.log(name);
  return (
    <div className="flex">
      <div className="flex flex-col gap-2 mb-8 mt-10 w-full">
        <label htmlFor="name" className="font-normal text-teal-900 text-sm">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          defaultValue={name}
          placeholder="John Doe"
          className="input_styles"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FormIntput;

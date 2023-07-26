import React, { useState } from 'react';

interface CheckBoxProps {
  isAgreed: boolean;
  setIsAgreed: (e: boolean) => void;
}

const FormCheckBox = ({ isAgreed, setIsAgreed }: CheckBoxProps) => {
  return (
    <div className="flex mt-8">
      <input
        type="checkbox"
        className="shrink-0 mr-3 border-gray-200 rounded text-orange-200 focus:ring-orange-200  accent-orange-200 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
        id="checkbox"
        onClick={() => setIsAgreed(!isAgreed)}
        checked={isAgreed}
        onChange={() => {}}
        required
      />
      <label htmlFor="checkbox" className="font-normal text-teal-900 text-sm">
        Agree to terms
      </label>
    </div>
  );
};

export default FormCheckBox;

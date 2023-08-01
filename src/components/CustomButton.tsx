import React from 'react';

export interface ButtonProps {
  title: string;
  additionalStyles?: string;
}

const CustomButton = ({ title, additionalStyles }: ButtonProps) => {
  return (
    <button type="submit" className={`button_styles ${additionalStyles}`}>
      {title}
    </button>
  );
};

export default CustomButton;

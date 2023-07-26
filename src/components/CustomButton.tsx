import React from 'react';

interface ButtonProps {
  title: string;
}

const CustomButton = ({ title }: ButtonProps) => {
  return (
    <button type="submit" className="button_styles">
      {title}
    </button>
  );
};

export default CustomButton;

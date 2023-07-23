import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  title: string;
  handleBtnClick: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ title, handleBtnClick }: ButtonProps) => {
  return (
    <button type="button" onClick={handleBtnClick} className="button_styles">
      {title}
    </button>
  );
};

export default CustomButton;

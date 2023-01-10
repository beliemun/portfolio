import React from "react";

interface IMenuButtonProps {
  text: string;
  onClick?: () => void;
}

const MenuButton: React.FC<IMenuButtonProps> = ({ text, onClick }) => {
  return (
    <div
      className={`rounded-full hover:bg-custom-second transition-300 cursor-pointer my-1`}
      onClick={onClick}
    >
      <p
        className={`font-thin text-custom-main hover:text-white m-0 px-4 py-1`}
      >
        {text}
      </p>
    </div>
  );
};

export default MenuButton;

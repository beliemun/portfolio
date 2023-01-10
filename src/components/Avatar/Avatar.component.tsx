import React from "react";

const Avatar: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div className="flex-center w-36 my-4 cursor-pointer" onClick={onClick}>
      <img
        className="w-36 h-36 rounded-full object-cover border-4 border-white hover:border-custom-second transition-300"
        src={
          "https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/selfie_02.jpeg"
        }
        alt="selfie"
      />
    </div>
  );
};

export default Avatar;

import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface ILanguageButtonProps {
  setLanguage: Dispatch<SetStateAction<string>>;
}

const LanguageButton: React.FC<ILanguageButtonProps> = ({ setLanguage }) => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = (code: string): void => {
    i18n.changeLanguage(code);
    setLanguage(code);
  };
  return (
    <div className="row-center text-xs mt-2">
      <span
        className="text-custom-main/50 cursor-pointer rounded-md md:rounded-full hover:bg-custom-second hover:text-white transition-300 px-1 py-0.5 md:px-3 md:py-1"
        onClick={() => handleChangeLanguage("ko")}
      >
        한글
      </span>
      <div className="w-[1px] h-3 bg-custom-main/50 mx-1 md:mx-2" />
      <span
        className="text-custom-main/50 cursor-pointer rounded-md md:rounded-full hover:bg-custom-second hover:text-white transition-300 px-1 py-0.5 md:px-3 md:py-1"
        onClick={() => handleChangeLanguage("en")}
      >
        English
      </span>
    </div>
  );
};

export default LanguageButton;

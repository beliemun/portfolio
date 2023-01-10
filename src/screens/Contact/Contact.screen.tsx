import React from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div id={id} className="py-4 pr-4">
      <h2 className="text-custom-h2 inline border-b-[3px] border-custom-second">
        {t("Contact")}
      </h2>
      <ul className="mt-6">
        <li>+82-10-9037-4044</li>
        <li>burngrit@icloud.com</li>
        <li onClick={() => handleClick("https://github.com/beliemun")}>
          <span className="text-custom-primary cursor-pointer underline">
            https://github.com/beliemun
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

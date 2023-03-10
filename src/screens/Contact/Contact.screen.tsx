import React from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div id={id} className="p-2 md:p-4">
      <h2 className="text-lg font-bold md:text-2xl my-2 inline border-b-[3px] border-custom-second">
        {t("Contact")}
      </h2>
      <ul className="mt-6">
        <li>Email: burngrit@icloud.com</li>
        <li onClick={() => handleClick("https://github.com/beliemun")}>
          {"Github: "}
          <span className="text-custom-primary cursor-pointer underline">
            https://github.com/beliemun
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

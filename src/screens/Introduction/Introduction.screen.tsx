import React from "react";
import { useTranslation } from "react-i18next";

const Introduction: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  return (
    <div id={id} className="p-2 md:p-4">
      <h2 className="text-lg font-bold md:text-2xl my-2 inline border-b-[3px] border-custom-second">
        {t("Introduction")}
      </h2>
      <ul className="mt-4">
        <li>{t("introduction1")}</li>
        <li>{t("introduction2")}</li>
        <li>{t("introduction3")} </li>
        <li>{t("introduction4")} </li>
        <li>{t("introduction5")}</li>
      </ul>
    </div>
  );
};

export default Introduction;

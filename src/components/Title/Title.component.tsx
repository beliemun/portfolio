import React from "react";
import { useTranslation } from "react-i18next";

const Title: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  return (
    <h1 id={id} className="text-custom-h1 my-6">
      <span className="bg-custom-second text-white mr-2 py-2 px-4 rounded-xl">
        {t("title1")}
      </span>
      {t("title2")}
    </h1>
  );
};

export default Title;

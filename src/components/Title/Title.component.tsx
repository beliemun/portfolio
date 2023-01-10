import React from "react";
import { useTranslation } from "react-i18next";

const Title: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  return (
    <h1 id={id} className="text-xl md:text-2xl font-bold my-4 hidden lg:block">
      <span className="bg-custom-second text-white mr-2 py-2 px-4 rounded-xl">
        {t("title1")}
      </span>
      {t("title2")}
    </h1>
  );
};

export default Title;

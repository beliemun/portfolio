import React from "react";
import { useGetHTMLDivSize } from "hooks";
import { AppInfo, LineChart } from "components";
import { useTranslation } from "react-i18next";

const WorkExperience: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  const { size, ref } = useGetHTMLDivSize();
  return (
    <div id={id} className="py-4 pr-4">
      <h2 className="text-custom-h2 inline border-b-[3px] border-custom-second">
        {t("Work Experience")}
        {t("Project")}
      </h2>
      <ul>
        <li className="list-none font-bold text-lg mt-6">{t("work1")}</li>
        <ul>
          <li>{t("work2")}</li>
          <li>{t("work3")}</li>
          <li>{t("work4")}</li>
        </ul>
        <li className="list-none font-bold text-lg mt-6">{t("work5")}</li>
        <ul>
          <AppInfo
            title={t("Macaron")}
            description={t("work5")}
            icon="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/appicon-macaron.png"
            screens="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/screenshot-macaron.jpg"
          />
          <li className="mt-6">{t("work6")}</li>
          <li>{t("work7")}</li>
          <li>{t("work8")}</li>
          <li>{t("work9")}</li>
          <li>{t("work10")}</li>
          <li className="list-none">
            <div ref={ref} className="w-full h-96">
              <LineChart size={size} />
            </div>
            <p className="text-sm text-custom-main/50 italic mb-4">
              {t("work11")}
            </p>
          </li>
        </ul>
        <li className="list-none font-bold text-lg mt-6">{t("work12")}</li>
        <ul>
          <li>{t("work13")}</li>
          <li> {t("work14")}</li>
          <li> {t("work15")}</li>
        </ul>
        <li className="list-none font-bold text-lg mt-6">{t("work16")}</li>

        <ul>
          <AppInfo
            title={t("Korean Friends")}
            description={t("work17")}
            icon="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/appicon-kf.png"
            screens="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/screenshot-kf.jpg"
          />
        </ul>
      </ul>
    </div>
  );
};

export default WorkExperience;

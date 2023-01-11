import React from "react";
import { useGetHTMLDivSize } from "hooks";
import { AppInfo, LineChart } from "components";
import { useTranslation } from "react-i18next";

const WorkExperience: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  const { size, ref } = useGetHTMLDivSize();
  return (
    <div id={id} className="p-2 md:p-4">
      <h2 className="text-lg font-bold md:text-2xl my-2 inline border-b-[3px] border-custom-second">
        {t("Work Experience")}
        {t("Project")}
      </h2>
      <ul>
        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("work19")}
        </li>
        <ul>
          <AppInfo
            title={t("Korean Friends")}
            description={t("work20")}
            icon="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/appicon-kf.png"
            screens="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/screenshot-kf.jpg"
          />
          <li>{t("work21")}</li>
        </ul>

        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("work15")}
        </li>
        <ul>
          <li>{t("work16")}</li>
          <li>{t("work17")}</li>
          <li>{t("work18")}</li>
        </ul>

        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("work10")}
        </li>
        <ul>
          <AppInfo
            title={t("Macaron")}
            description={t("work8")}
            icon="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/appicon-macaron.png"
            screens="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/screenshot-macaron.jpg"
          />
          <li>{t("work11")}</li>
        </ul>

        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("work12")}
        </li>
        <ul>
          <div className="hidden sm:block">
            <li className="list-none">
              <div ref={ref} className="w-full h-72 md:h-96">
                <LineChart size={size} />
              </div>
            </li>
          </div>
          <li>{t("work13")}</li>
          <li>{t("work14")}</li>
        </ul>

        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("work7")}
        </li>
        <ul>
          <AppInfo
            title={t("Interested In You")}
            description={t("work8")}
            icon="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/appicon-interest.png"
            screens="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/screenshot-interest.png"
          />
          <li className="mt-4">{t("work9")}</li>
        </ul>

        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("work4")}
        </li>
        <ul>
          <li>{t("work5")}</li>
          <li> {t("work6")}</li>
        </ul>

        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("work1")}
        </li>
        <ul>
          <li> {t("work2")}</li>
          <li> {t("work3")}</li>
        </ul>
      </ul>
    </div>
  );
};

export default WorkExperience;

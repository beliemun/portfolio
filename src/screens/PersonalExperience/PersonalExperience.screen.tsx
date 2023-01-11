import { AppInfo } from "components";
import React from "react";
import { useTranslation } from "react-i18next";

const PersonalExperience: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div id={id} className="p-2 md:p-4">
      <h2 className="text-lg font-bold md:text-2xl my-2 inline border-b-[3px] border-custom-second">
        {t("Personal Experience")}
        {t("Project")}
      </h2>
      <ul>
        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("personal8")}
        </li>
        <ul>
          <AppInfo
            title={t("Kimxy")}
            description={t("personal9")}
            icon="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/appicon-kimxy.jpg"
            screens="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/screenshot-kimxy.jpg"
          />
          <li className="list-none text-sm text-custom-primary mb-4">
            {t("personal10")}
          </li>
          <li>
            {t("personal11")}
            <span className="font-bold underline">{t("personal12")}</span>
            {t("personal13")}
          </li>
          <li>
            {t("personal14")}
            <span
              className="text-custom-second font-bold cursor-pointer underline"
              onClick={() =>
                handleClick(
                  "https://play.google.com/store/apps/details?id=com.burngrit.kimxy"
                )
              }
            >
              {t("Google Play")}
            </span>
            {", "}
            <span
              className="text-custom-second font-bold cursor-pointer underline"
              onClick={() =>
                handleClick("https://apps.apple.com/app/id1629547774")
              }
            >
              {t("App Store")}
            </span>
          </li>
        </ul>
        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("personal1")}
        </li>
        <ul>
          <li>
            {t("personal2")}
            <span
              className="text-custom-second font-bold cursor-pointer underline"
              onClick={() =>
                handleClick("https://nomadcoders.co/users/beliemun")
              }
            >
              {t("personal3")}
            </span>
            {", "}
            <span
              className="text-custom-second font-bold cursor-pointer underline"
              onClick={() => handleClick("https://github.com/beliemun")}
            >
              {t("personal4")}
            </span>
          </li>
          <li>
            {t("personal5")}
            <span
              className="text-custom-second font-bold cursor-pointer underline"
              onClick={() =>
                handleClick("https://nomadcoders.co/community/thread/54")
              }
            >
              {t("personal7")}
            </span>
          </li>
          <li>
            {t("personal6")}
            <span
              className="text-custom-second font-bold cursor-pointer underline"
              onClick={() =>
                handleClick("https://nomadcoders.co/community/thread/1599")
              }
            >
              {t("personal7")}
            </span>
          </li>
        </ul>

        <li className="list-none font-bold md:text-lg mt-6 md:mt-10">
          {t("personal15")}
        </li>
        <ul>
          <li className="list-none p-4 border border-custom-main/10 rounded-lg mb-4">
            <h3 className="text-base md:text-lg font-bold">{t("Design")}</h3>
            <ul>
              <li>{t("personal16")}</li>
              <img
                className="w-full h-32 md:h-48 object-cover rounded-lg mb-2"
                src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/mindmap.png"
                alt="minmap"
              />
            </ul>
          </li>
          <li className="list-none p-4 border border-custom-main/10 rounded-lg mb-4">
            <h3 className="text-base md:text-lg font-bold">{t("Art")}</h3>
            <ul>
              <li>{t("personal17")}</li>
              <li>{t("personal18")}</li>
              <img
                className="w-full object-contain rounded-lg mb-6"
                src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/color-system.png"
                alt="color-system"
              />
              <li>{t("personal19")}</li>
              <img
                className="w-full object-contain rounded-lg mb-6 "
                src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/screen-design.png"
                alt="screen-design"
              />
              <li>{t("personal20")}</li>
              <img
                className="w-full object-contain rounded-lg mb-6 "
                src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/admin-design.png"
                alt="admin-design"
              />
            </ul>
          </li>
          <li className="list-none p-4 border border-custom-main/10 rounded-lg mb-4">
            <h3 className="text-base md:text-lg font-bold">
              {t("Programming")}
            </h3>
            <ul>
              <li className="list-none mt-4">{t("Backend")}</li>
              <ul>
                <li>Node.js</li>
                <li>ProgreSQL, GraphQL, Apollo Server</li>
                <li className="list-none text-sm">{t("personal21")}</li>
                <li className="list-none text-sm">{t("personal22")}</li>
                <img
                  className="w-full object-contain rounded-lg mb-6"
                  src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/gql.png"
                  alt="gql"
                />
                <li>Redis Pubsub</li>
                <li className="list-none text-sm">{t("personal23")}</li>
                <img
                  className="w-full object-contain rounded-lg mb-6"
                  src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/redis.png"
                  alt="redis"
                />
                <li>Prisma(Client, Migrate, Studio)</li>
                <li className="list-none text-sm">{t("personal24")}</li>
                <img
                  className="w-full object-contain rounded-lg mb-6"
                  src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/prisma.png"
                  alt="prisma"
                />
              </ul>
              <li className="list-none mt-6 md:mt-10">{t("Frontend")}</li>
              <ul>
                <li className="p-4 bg-custom-primary/10 rounded-lg list-none mb-4">
                  <h3>{t("personal25")}</h3>
                  <ul>
                    <li>React Native, Type Script, GraphQL, Apollo Client</li>
                    <li>Expo</li>
                    <li className="list-none text-sm">{t("personal26")}</li>
                    <li className="mb-1">Tailwind</li>
                    <li className="list-none text-sm">{t("personal27")}</li>
                    <img
                      className="w-full object-contain rounded-lg mb-4"
                      src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/tailwind.png"
                      alt="tailwind"
                    />
                  </ul>
                </li>
                <li className="p-4 bg-custom-primary/10 rounded-lg list-none mb-4">
                  <h3>{t("personal28")}</h3>
                  <ul>
                    <li>React JS, Type Script, Tailwind</li>
                    <li className="list-none text-sm">{t("personal29")}</li>
                    <img
                      onClick={() => handleClick("https://www.kimxy.net")}
                      className="w-full object-contain rounded-lg mb-4 border border-custom-main/10 cursor-pointer hover:border-custom-second"
                      src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/web-page.png"
                      alt="web-page"
                    />
                  </ul>
                </li>
                <li className="p-4 bg-custom-primary/10 rounded-lg list-none mb-4">
                  <h3>{t("personal30")}</h3>
                  <ul className="mb-4">
                    <li>
                      React JS, Type Script, GraphQL, Apollo Client, Nivo,
                      Tailwind
                    </li>
                    <li className="list-none text-sm">{t("personal31")}</li>
                    <img
                      onClick={() => handleClick("https://admin.kimxy.net")}
                      className="w-full object-contain rounded-lg mb-4 border border-custom-main/10 cursor-pointer hover:border-custom-second"
                      src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/admin-page.png"
                      alt="admin-page"
                    />
                    <img
                      onClick={() => handleClick("https://admin.kimxy.net")}
                      className="w-full object-contain rounded-lg mb-4 border border-custom-main/10 cursor-pointer hover:border-custom-second"
                      src="https://burngrit-portfolio.s3.ap-northeast-2.amazonaws.com/images/admin-page-2.png"
                      alt="admin-page-2"
                    />
                  </ul>
                </li>
              </ul>
              <li className="list-none mt-6 md:mt-10">{t("Deploy")}</li>
              <ul>
                <li>Heroku(Backend, PostgreSQL)</li>
                <li>AWS Amplify(Web, Admin)</li>
                <li>AWS Route 53(Domain)</li>
                <li>AWS 3S(Data/Backup) </li>
                <li>Mailgun(Authentication)</li>
              </ul>
            </ul>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default PersonalExperience;

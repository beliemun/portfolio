import React from "react";
import { useTranslation } from "react-i18next";

const Skills: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useTranslation();
  return (
    <div id={id} className="p-2 md:p-4">
      <h2 className="text-lg font-bold md:text-2xl my-2 inline border-b-[3px] border-custom-second">
        {t("Skills")}
      </h2>
      <ul>
        <li className="list-none font-bold text-custom-main mt-4 md:mt-6">
          {t("Backend")}
        </li>
        <ul>
          <li>Node.js</li>
          <li>ProgreSQL, GraphQL, Redis Pubsub</li>
          <li>Apollo Server, Prisma(Client, Migrate, Studio)</li>
        </ul>
        <li className="list-none font-bold text-custom-main mt-4 md:mt-6">
          {t("Frontend")}
        </li>
        <ul>
          <li>HTML5, CSS(SCSS), Java Script(ES6), Type Script</li>
          <li>React JS(Web), React Native(App)</li>
          <li>Tailwind, Styled Components</li>
        </ul>
        <li className="list-none font-bold text-custom-main mt-4 md:mt-6">
          {t("Deploy")}
        </li>
        <ul>
          <li>Heroku, Expo, GitHub</li>
          <li>AWS(S3, Amplify, Route 53)</li>
        </ul>
      </ul>
      <p className="text-xs md:text-sm italic text-custom-main/50 mt-6 mb-2">
        {t("skills1")}
      </p>
      <ul className="italic">
        <li className="text-xs md:text-sm text-custom-main/50">
          {t("skills2")}
        </li>
        <li className="text-xs md:text-sm text-custom-main/50">
          {t("skills3")}
        </li>
      </ul>
    </div>
  );
};

export default Skills;

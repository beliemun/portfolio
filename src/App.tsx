import { Route, Routes } from "react-router-dom";
import {
  Avatar,
  LanguageButton,
  MenuButton,
  Separator,
  Title,
} from "components";
import {
  Contact,
  Introduction,
  PersonalExperience,
  Skills,
  WorkExperience,
} from "screens";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("");
  const handleClickMenu = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickAvatar = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    if (language === "") {
      setLanguage(navigator.language.slice(0, 2));
    }
  }, [language]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex-center">
            <div className="flex flex-col md:flex-row h-full w-full max-w-6xl ">
              <div className="flex flex-wrap md:flex-col justify-start md:justify-center items-center fixed w-full md:w-48 lg:w-60 p-2 lg:p-4 bg-white/50 backdrop-blur-sm border-b md:border-b-0 border-b-custom-main/10">
                <Avatar onClick={handleClickAvatar} />
                <MenuButton
                  text={t("Introduction")}
                  onClick={() => handleClickMenu("introduction")}
                />
                <MenuButton
                  text={t("Skills")}
                  onClick={() => handleClickMenu("skills")}
                />
                {/* <MenuButton
                  text={t("Contact")}
                  onClick={() => handleClickMenu("contact")}
                /> */}
                <MenuButton
                  text={t("Work Experience")}
                  onClick={() => handleClickMenu("work-experience")}
                />
                <MenuButton
                  text={t("Personal Experience")}
                  onClick={() => handleClickMenu("personal-experience")}
                />
                <LanguageButton setLanguage={setLanguage} />
              </div>
              <div className="flex flex-col w-full h-100 md:ml-48 lg:ml-60 p-0 lg:p-4 pt-14 md:pt-4">
                <Title />
                <Separator className="my-4 hidden lg:block" />
                <Introduction id="introduction" />
                <Separator className="my-1 md:my-4" />
                <Skills id="skills" />
                <Separator className="my-1 md:my-4" />
                {/* <Contact id="contact" />
                <Separator className="my-1 md:my-4" /> */}
                <WorkExperience id="work-experience" />
                <Separator className="my-1 md:my-4" />
                <PersonalExperience id="personal-experience" />
              </div>
            </div>
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default App;

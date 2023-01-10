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
            <div className="flex felx-row h-full w-full max-w-6xl">
              <div className="fixed flex-center w-60 p-4">
                <Avatar onClick={handleClickAvatar} />
                <MenuButton
                  text={t("Introduction")}
                  onClick={() => handleClickMenu("introduction")}
                />
                <MenuButton
                  text={t("Skills")}
                  onClick={() => handleClickMenu("skills")}
                />
                <MenuButton
                  text={t("Contact")}
                  onClick={() => handleClickMenu("contact")}
                />
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
              <div className="flex flex-col w-full h-100 ml-60 pt-4">
                <Title />
                <Separator className="my-4" />
                <Introduction id="introduction" />
                <Separator className="my-4" />
                <Skills id="skills" />
                <Separator className="my-4" />
                <Contact id="contact" />
                <Separator className="my-4" />
                <WorkExperience id="work-experience" />
                <Separator className="my-4" />
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

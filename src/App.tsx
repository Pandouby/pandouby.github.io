import { FC, useRef, useState } from "react";
import { ThemeContext } from "./contexts/theme-context";
import "./App.scss";
import MainContainer from "./layout/MainContainer";
import Card from "./layout/Card/Card";
import ThemeButton from "./layout/Button/ThemeButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./layout/Header/Header";
import LevelBar from "./layout/LevelBar/LevelBar";

const App: FC = () => {
  const isBrowserDefaulDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaulDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  const skills = [
    { skill: "JavaScript", level: 50 },
    { skill: "Java", level: 60 },
    { skill: "React", level: 50 },
    { skill: "Spring Boot", level: 40 },
    { skill: "HTML", level: 80 },
    { skill: "CSS", level: 70 },
    { skill: "TypeScript", level: 50 },
  ];

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className={`theme-${theme}`}>
        <MainContainer>
          <Header />
          
          <ThemeButton />

          <div className="space"></div>

          <div className="skill-section">
            <div className="skill-text">
              <h2>My Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                quisquam deleniti facere voluptatem cupiditate, hic perferendis,
                illo excepturi sunt nam ipsa quibusdam ipsum, ea pariatur?
                Excepturi sequi laborum vitae non.
              </p>
            </div>
            <div className="skill-card">
              <Card title="Skills">
                {skills.map((skill) => <LevelBar title={skill.skill} percentage={skill.level}></LevelBar>)}
              </Card>
            </div>
          </div>

          <div className="space"></div>
        </MainContainer>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
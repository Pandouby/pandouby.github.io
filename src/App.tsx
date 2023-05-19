import { FC, useState } from "react";
import { ThemeContext } from "./contexts/theme-context";
import "./App.scss";
import MainContainer from "./layout/MainContainer";
import Card from "./layout/Card/Card";
import ThemeButton from "./layout/Button/ThemeButton";
import Header from "./layout/Header/Header";
import LevelBar from "./layout/LevelBar/LevelBar";
import ProjectSection from "./layout/ProjectSection/ProjectSection";
import { FaJava } from 'react-icons/fa';
import { SiJavascript, SiReact, SiSpring, SiHtml5, SiCss3, SiTypescript } from 'react-icons/si';

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
    { skill: <FaJava className="icon-container"/>, level: 50 },
    { skill: <SiJavascript className="icon-container"/>, level: 60 },
    { skill: <SiReact className="icon-container"/>, level: 50 },
    { skill: <SiSpring className="icon-container"/>, level: 40 },
    { skill: <SiHtml5 className="icon-container"/>, level: 80 },
    { skill: <SiCss3 className="icon-container"/>, level: 70 },
    { skill: <SiTypescript className="icon-container"/>, level: 50 },
  ];

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className={`theme-${theme}`}>
        <MainContainer>
          <div className="section header-section">
            <Header />
          </div>
          
          <ThemeButton />

          <div className="section skill-section">
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

          <ProjectSection/>

          <div className="projects-wrapper">
            <Card title="Game"> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, facere distinctio! Velit minima voluptatem veniam magnam ex culpa laboriosam labore voluptatum optio incidunt quas, quam a beatae consequuntur, dolores ipsa.</p>
            </Card>
          </div>
        </MainContainer>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

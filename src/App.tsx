import { FC, useEffect, useState } from "react";
import { ThemeContext } from "./contexts/theme-context";
import "./App.scss";
import MainContainer from "./layout/MainContainer";
import Card from "./layout/Card/Card";
import ThemeButton from "./layout/Button/ThemeButton";
import Header from "./layout/Header/Header";
import configData from "./config/configData.json";
import LevelBar from "./layout/LevelBar/LevelBar";
import ProjectSection from "./layout/ProjectSection/ProjectSection";
import { FaJava } from 'react-icons/fa';
import { SiJavascript, SiReact, SiSpring, SiHtml5, SiCss3, SiTypescript } from 'react-icons/si';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ProjectCard from "./layout/Card/ProjectCard";
import { useGetRepoLanguages } from "./api/useGetRepoLaguages";
import axios from "axios";
import TimeLine from "./layout/Timeline/TimeLine";


const App: FC = () => {
  const isBrowserDefaulDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaulDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  ChartJS.register(ArcElement, Tooltip, Legend);

  const skills = [
    { skill: <FaJava className="icon-container"/>, level: 50 },
    { skill: <SiJavascript className="icon-container"/>, level: 60 },
    { skill: <SiReact className="icon-container"/>, level: 50 },
    { skill: <SiSpring className="icon-container"/>, level: 40 },
    { skill: <SiHtml5 className="icon-container"/>, level: 80 },
    { skill: <SiCss3 className="icon-container"/>, level: 70 },
    { skill: <SiTypescript className="icon-container"/>, level: 50 },
  ];

  const projects = configData.projects;

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

          <TimeLine />

          <ProjectSection/>

          <div className="projects-wrapper">
            {projects.map((project) => {
              return (
                <ProjectCard project={project}>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum magnam soluta assumenda nostrum, a, ab recusandae ipsum voluptatibus quas nesciunt sapiente eligendi voluptates accusamus itaque quam neque? Ducimus, voluptate assumenda.</p>
                </ProjectCard>
              );
            })}
          </div>
        </MainContainer>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

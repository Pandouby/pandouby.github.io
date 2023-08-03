import { FC, useEffect, useState } from "react";
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
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ProjectCard from "./layout/Card/ProjectCard";
import { useGetRepoLanguages } from "./api/useGetRepoLaguages";


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

  debugger;
  const test = useGetRepoLanguages();
  console.log(test);
  

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '% of project',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        radius: "70%",
        cutout: "80%",
      },
    ],
  };

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
            <ProjectCard title="Project" offset={-150} style={{x: 200}} data={data}> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, facere distinctio! Velit minima voluptatem veniam magnam ex culpa laboriosam labore voluptatum optio incidunt quas, quam a beatae consequuntur, dolores ipsa.</p>
            </ProjectCard>

            <Card title="Game" offset={600} style={{x: -300}}> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, facere distinctio! Velit minima voluptatem veniam magnam ex culpa laboriosam labore voluptatum optio incidunt quas, quam a beatae consequuntur, dolores ipsa.</p>
              <Doughnut data={data} />
            </Card>

            <Card title="Game" offset={-200} style={{x: -100}}> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, facere distinctio! Velit minima voluptatem veniam magnam ex culpa laboriosam labore voluptatum optio incidunt quas, quam a beatae consequuntur, dolores ipsa.</p>
            </Card>

            <Card title="Game" offset={400} style={{x: 340}}> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, facere distinctio! Velit minima voluptatem veniam magnam ex culpa laboriosam labore voluptatum optio incidunt quas, quam a beatae consequuntur, dolores ipsa.</p>
            </Card>

            <Card title="Game" offset={550} style={{x: -280}}> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, facere distinctio! Velit minima voluptatem veniam magnam ex culpa laboriosam labore voluptatum optio incidunt quas, quam a beatae consequuntur, dolores ipsa.</p>
            </Card>

            <Card title="Game" style={{y: -200, x: 60}}> 
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, facere distinctio! Velit minima voluptatem veniam magnam ex culpa laboriosam labore voluptatum optio incidunt quas, quam a beatae consequuntur, dolores ipsa.</p>
            </Card>
          </div>
        </MainContainer>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

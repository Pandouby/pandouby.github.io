import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { FC, useState } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiDocker,
  SiGit,
  SiJira,
  SiReact,
  SiSpring,
  SiTypescript
} from "react-icons/si";
import "./App.scss";
import { ThemeContext } from "./contexts/theme-context";
import ThemeButton from "./layout/Button/ThemeButton";
import Card from "./layout/Card/Card";
import Header from "./layout/Header/Header";
import LevelBar from "./layout/LevelBar/LevelBar";
import MainContainer from "./layout/MainContainer";
import ProjectSection from "./layout/ProjectSection/ProjectSection";
import { SocialStack } from "./layout/Socials/SocialStack";
import TimeLine from "./layout/Timeline/TimeLine";

const App: FC = () => {
	const isBrowserDefaultDark = () =>
		window.matchMedia("(prefers-color-scheme: dark)").matches;

	const getDefaultTheme = (): string => {
		const localStorageTheme = localStorage.getItem("default-theme");
		const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
		return localStorageTheme || browserDefault;
	};

	const [theme, setTheme] = useState(getDefaultTheme());
	ChartJS.register(ArcElement, Tooltip, Legend);

	const skills = [
		{ skill: <SiReact className="icon-container" />, level: 70 },
		{ skill: <SiTypescript className="icon-container" />, level: 75 },
		{ skill: <FaJava className="icon-container" />, level: 70 },
		{ skill: <SiSpring className="icon-container" />, level: 50 },
		{ skill: <SiGit className="icon-container" />, level: 80 },
		{ skill: <SiDocker className="icon-container" />, level: 50 },
		{ skill: <SiJira className="icon-container" />, level: 70 },
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Commodi quisquam deleniti
								facere voluptatem cupiditate, hic perferendis,
								illo excepturi sunt nam ipsa quibusdam ipsum, ea
								pariatur? Excepturi sequi laborum vitae non.
							</p>
						</div>
						<div className="skill-card">
							<Card title="Skills">
								{skills.map((skill) => (
									<LevelBar
										title={skill.skill}
										percentage={skill.level}
									></LevelBar>
								))}
							</Card>
						</div>
					</div>

					<TimeLine />

					<ProjectSection />

					<SocialStack />
				</MainContainer>
			</div>
		</ThemeContext.Provider>
	);
};

export default App;

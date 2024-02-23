import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { FC, useEffect, useState } from "react";
import "./App.scss";
import { ThemeContext } from "./contexts/theme-context";
import { ThemeButton } from "./layout/Button/ThemeButton";
import { Header } from "./layout/Header/Header";
import { LoadingScreen } from "./layout/LoadingScreen/LoadingScreen";
import { MainContainer } from "./layout/MainContainer";
import { Progressbar } from "./layout/Progressbar/Progressbar";
import { ProjectSection } from "./layout/ProjectSection/ProjectSection";
import { SocialSection } from "./layout/SocialSection/SocialSection";
import TimeLine from "./layout/Timeline/TimeLine";
import { SkillSection } from "./layout/SkillSection/SkillSection";

export const App: FC = () => {
	const isBrowserDefaultDark = () =>
		window.matchMedia("(prefers-color-scheme: dark)").matches;

	const getDefaultTheme = (): string => {
		const localStorageTheme = localStorage.getItem("default-theme");
		const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
		return localStorageTheme || browserDefault;
	};

	const [theme, setTheme] = useState(getDefaultTheme());
	ChartJS.register(ArcElement, Tooltip, Legend);

	const [showLoadingScreen, setShowLoadingScreen] = useState(true);

	useEffect(() => {
		setTimeout(() => setShowLoadingScreen(false), 3000);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
			/>
			<div className={`theme-${theme}`}>
				{showLoadingScreen ? (
					<LoadingScreen />
				) : (
					<>
						<Progressbar />
						<MainContainer>
							<ThemeButton />

							<div className="section header-section">
								<Header />
							</div>

							<SkillSection />

							<TimeLine />

							<ProjectSection />

							<SocialSection />
						</MainContainer>
					</>
				)}
			</div>
		</ThemeContext.Provider>
	);
};

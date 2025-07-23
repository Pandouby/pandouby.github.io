import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { FC, useEffect, useState } from "react";
import "./App.scss";
import { ThemeContext } from "./contexts/theme-context";
import { ThemeButton } from "./components/Button/ThemeButton";
import { Header } from "./components/Header/Header";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { Progressbar } from "./components/Progressbar/Progressbar";
import { ProjectSection } from "./components/ProjectSection/ProjectSection";
import { SocialSection } from "./components/SocialSection/SocialSection";
import { SkillSection } from "./components/SkillSection/SkillSection";
import { Footer } from "./components/Footer/Footer";
import { Titlecard } from "./components/Header/Titlecard";
import { GallerySection } from "./components/GallerySection/GallerySection";
import { TimeLine } from "./components/Timeline/TimeLine";

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
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
			/>
			<div className={`theme-${theme}`}>
				{showLoadingScreen ? (
					<LoadingScreen />
				) : (
					<>
						<Progressbar />
						<div className="main-container">
							<ThemeButton />

							<div className="section header-section">
								<Titlecard />
							</div>

							<SkillSection />

							<TimeLine />

							<ProjectSection />

							{/*<GallerySection /> */}

							<SocialSection />

							<Footer />
						</div>
					</>
				)}
			</div>
		</ThemeContext.Provider>
	);
};
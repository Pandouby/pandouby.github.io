import { FaJava, FaLinkedin } from "react-icons/fa";
import {
	SiDocker,
	SiGit,
	SiGithub,
	SiJira,
	SiReact,
	SiSpring,
	SiTypescript,
} from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { ReactElement } from "react";

export interface Skill {
	name: string;
	icon: ReactElement;
	percentage: number;
}

export interface Project {
	title: string;
	url: string;
}

export interface SocialType {
	name: string;
	icon: ReactElement;
	url?: string;
	onClick?: () => void;
}

interface ConfigData {
	skills: Skill[];
	projects: Project[];
	socials: SocialType[];
}

export const configData: ConfigData = {
	skills: [
		{name: "React", icon: <SiReact className="icon-container" id="React" />, percentage: 70 },
		{name: "TypeScript", icon: <SiTypescript className="icon-container" id="TypeScript" />, percentage: 75 },
		{name: "Java", icon: <FaJava className="icon-container" id="Java" />, percentage: 70 },
		{name: "Spring", icon: <SiSpring className="icon-container" id="Spring" />, percentage: 50 },
		{name: "Git", icon: <SiGit className="icon-container" id="Git" />, percentage: 80 },
		{name: "Docker", icon: <SiDocker className="icon-container" id="Docker" />, percentage: 50 },
		{name: "Jira", icon: <SiJira className="icon-container" id="Jira" />, percentage: 70 },
	],
	projects: [
		{
			title: "Portfolio Website",
			url: "pandouby/pandouby.github.io",
		},
		{
			title: "Spotify Keychain",
			url: "rtful/SpotifyKeychainFrontend",
		},
	],
	socials: [
		{
			name: "Mail",
			icon: <HiMail />,
			onClick: () => {
				navigator.clipboard
					.writeText("silvan@ggaweb.ch")
					.then(() => {
						alert(`Copied!`);
					})
					.catch((error) => {
						alert(`Copy failed! ${error}`);
					});
				window.location.href =
					"mailto:silvan@ggaweb.ch?subject=Contact";
			},
		},
		{
			name: "LinkedIn",
			icon: <FaLinkedin />,
			url: "https://www.linkedin.com/in/silvan-dubach-9247aa267/",
		},
		{
			name: "GitHub",
			icon: <SiGithub />,
			url: "https://www.github.com/pandouby",
		},
	],
};

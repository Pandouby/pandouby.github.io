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
	skill: ReactElement;
	level: number;
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
		{ skill: <SiReact className="icon-container" />, level: 70 },
		{ skill: <SiTypescript className="icon-container" />, level: 75 },
		{ skill: <FaJava className="icon-container" />, level: 70 },
		{ skill: <SiSpring className="icon-container" />, level: 50 },
		{ skill: <SiGit className="icon-container" />, level: 80 },
		{ skill: <SiDocker className="icon-container" />, level: 50 },
		{ skill: <SiJira className="icon-container" />, level: 70 },
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

import { FC } from "react";
import { Social } from "./Social";
import "./styles.scss";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

interface SocialStackProps {}

export const SocialStack: FC<SocialStackProps> = () => {
	const socials = [
		{
			name: "LinkedIn",
			icon: <FaLinkedin />,
			color: "#0077B5",
			url: "https://www.linkedin.com/in/silvan-dubach-9247aa267/",
		},
		{
			name: "GitHub",
			icon: <SiGithub />,
			url: "https://www.github.com/pandouby",
		},
	];

	return (
		<div className="social-stack">
			{socials.map((social) => (
				<Social
					name={social.name}
					url={social.url}
					color={social.color}
				>
					{social.icon}
				</Social>
			))}
		</div>
	);
};

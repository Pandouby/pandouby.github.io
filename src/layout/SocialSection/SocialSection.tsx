import { FC } from "react";
import { Social } from "./Social";
import { SocialType, configData } from "../../config/config";
import "./styles.scss";

interface SocialSectionProps {}

export const SocialSection: FC<SocialSectionProps> = () => {
	const socials: SocialType[] = configData.socials;

	return (
		<div className="social-section">
			<div className="social-stack">
				{socials.map((social) => (
					<Social
						name={social.name}
						url={social.url}
						onClick={social.onClick}
						icon={social.icon}
					/>
				))}
			</div>
		</div>
	);
};

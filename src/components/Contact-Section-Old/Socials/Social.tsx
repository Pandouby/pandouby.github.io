import { FC } from "react";
import "./styles.scss";

interface SocialProps {
	name: string;
	children: any;
	url: string;
	color?: string;
}

export const Social: FC<SocialProps> = ({ name, children, url, color }) => {
	return (
		<a href={url} className="social" id={name} style={{ color }}>
			{children}
		</a>
	);
};

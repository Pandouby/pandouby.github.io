import { FC } from "react";
import "./styles.scss";
import { SocialType } from "../../config/config";

export const Social: FC<SocialType> = ({ name, url, onClick, icon}) => {
	const handleClick = () => {
		console.log({url, onClick});
		if(!url && onClick) {
			onClick()
		}
	}

	return (
		<a href={url} className="social" id={name} onClick={handleClick}>
			{icon}
		</a>
	);
};

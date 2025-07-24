
import { Card } from "../Card/Card";
import "./styles.scss";
import { FC } from "react";

export const LanguageSection: FC = () => {
	return (
		<div className="section language-section">
			<Card className="language-card" title="Languages" width="80%" height="300px">
				<ul>
					<li>German (Swiss)</li>
					<li>English</li>
					<li>French</li>
				</ul>
			</Card>
		</div>
	);
};

import { configData, Language } from "../../config/config";
import { Card } from "../Card/Card";
import "./styles.scss";
import { FC } from "react";

export const LanguageSection: FC = () => {
	const langauges: Language[] = configData.languages;

	return (
		<div className="section language-section">
			<Card
				className="language-card"
				title="Languages"
				width="80%"
				height="300px"
			>
				<div className="language">
					<div className="language-text">
						<h2>German</h2>
						<p>Nativ</p>
					</div>
					<div className="language-level">
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
					</div>
				</div>

				<div className="language">
					<div className="language-text">
						<h2>English</h2>
						<p>Advanced</p>
					</div>
					<div className="language-level">
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
				</div>

				<div className="language">
					<div className="language-text">
						<h2>French</h2>
						<p>Elementry</p>
					</div>
					<div className="language-level">
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot filled"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</div>
				</div>
			</Card>
		</div>
	);
};

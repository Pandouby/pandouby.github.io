import { FC } from "react";
import { Card } from "../Card/Card";
import { configData } from "../../config/config";
import { LevelBar } from "../LevelBar/LevelBar";
import "./styles.scss";

export const SkillSection: FC = () => {
    const skills = configData.skills;

	return (
		<div className="section skill-section">
			<div className="skill-text">
				<h2>My Skills</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Commodi quisquam deleniti facere voluptatem cupiditate, hic
					perferendis, illo excepturi sunt nam ipsa quibusdam ipsum,
					ea pariatur? Excepturi sequi laborum vitae non.
				</p>
			</div>
			<div className="skill-card">
				<Card title="Skills">
					{skills.map((skill) => (
						<LevelBar
							title={skill.skill}
							percentage={skill.level}
						></LevelBar>
					))}
				</Card>
			</div>
		</div>
	);
};

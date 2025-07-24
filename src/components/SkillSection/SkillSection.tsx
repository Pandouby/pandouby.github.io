import { FC } from "react";
import { Card } from "../Card/Card";
import { Skill, configData } from "../../config/config";
import { LevelBar } from "../LevelBar/LevelBar";
import "./styles.scss";
import { motion } from "framer-motion";

export const SkillSection: FC = () => {
	const skills: Skill[] = configData.skills;

	return (
		<div className="section skill-section">
			<div className="skill-text">
				<motion.h2>My Skills</motion.h2>
				<motion.p>
					Trough my <b>Software Develope apprenticeship</b> aswell as
					the years that i have spent programming in my free time, i
					learned lots of Programming languages and tools. The most
					important ones are listed here.
				</motion.p>
			</div>

			<div className="skill-card">
				<Card title="Skills">
					{skills.map((skill) => (
						<LevelBar
							name={skill.name}
							icon={skill.icon}
							percentage={skill.percentage}
						></LevelBar>
					))}
				</Card>
			</div>
		</div>
	);
};

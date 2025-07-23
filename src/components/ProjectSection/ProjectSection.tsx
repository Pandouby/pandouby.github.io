import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import { ProjectCard } from "../Card/ProjectCard";
import "./styles.scss";
import { Project, configData } from "../../config/config";
import { FloatingSectionTitle } from "../FloatingSectionTitle/FloatingSectionTitle";

interface projectProps {
	title: string;
	url: string;
}

export const ProjectSection: FC = () => {
	const projects: Project[] = configData.projects;
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "center center"],
	});



	return (
		<motion.div className="section project-section">
			<FloatingSectionTitle title={"projects"}/>

			<div className="projects-wrapper">
				{projects.map((project) => {
					return (
						<ProjectCard project={project}>
							<>
								<p>{project.description}</p>
							</>
						</ProjectCard>
					);
				})}
			</div>
		</motion.div>
	);
};

import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import { ProjectCard } from "../Card/ProjectCard";
import "./styles.scss";
import { Project, configData } from "../../config/config";

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

	const font = useTransform(scrollYProgress, [0.2, 1], [1, 0.45]);
	const fontSize = useTransform(font, (s) => `scale3d(${s},${s},1)`);

	return (
		<motion.div className="section project-section">
			<motion.div className="project-title-wrapper">
				<motion.div
					className="project-title"
					ref={ref}
					style={{ transform: fontSize }}
				>
					projects
				</motion.div>
			</motion.div>

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

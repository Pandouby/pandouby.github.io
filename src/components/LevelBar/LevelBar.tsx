import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";
import { Tooltip } from "react-tooltip";
import "./styles.scss";
import { Skill } from "../../config/config";

export const LevelBar: FC<Skill> = ({ name, icon, percentage }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "start center"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 30,
	});
	const width = useTransform(scaleX, [0, 0.4], [0, 1 * percentage]);
	const widthPercent = useTransform(width, (w) => `${w}%`);

	return (
		<motion.div className="level-bar-container" ref={ref}>
			{icon && icon}
			<Tooltip anchorSelect={`#${name}`} className="tooltip" place="left">
				{name}
			</Tooltip>
			<div className="level-bar-wrapper">
				<motion.div
					className="level-bar infill"
					style={{ width: widthPercent }}
					transition={{
						stiffness: 10,
					}}
				></motion.div>
				<div className="level-bar background"></div>
				<span>{percentage}%</span>
			</div>
		</motion.div>
	);
};

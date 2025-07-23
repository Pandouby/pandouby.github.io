import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import "./styles.scss";

interface FloatingSectionTitleProps {
    title: string;
    reverse?: boolean;
}

export const FloatingSectionTitle: FC<FloatingSectionTitleProps> = ({title, reverse}) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "center center"],
	});

	const font = useTransform(scrollYProgress, [0.2, 1], [1, 0.45]);
	const fontSize = useTransform(font, (s) => `scale3d(${s},${s},1)`);

	return (
		<motion.div className={reverse ? "floating-title-wrapper reverse-effect": "floating-title-wrapper" }>
			<motion.div
				className="floating-title"
				ref={ref}
				style={{ transform: fontSize }}
			>
				{title}
			</motion.div>
		</motion.div>
	);
};

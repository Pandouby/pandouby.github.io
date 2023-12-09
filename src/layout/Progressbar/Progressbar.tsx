import { motion, useScroll, useSpring } from "framer-motion";
import { FC } from "react";
import "./styles.scss";

export const Progressbar: FC = () => {
	const { scrollYProgress } = useScroll();
	const scaleY = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 50,
		restDelta: 0.001,
	});

	return <motion.div className="progressbar" style={{ scaleY }} />;
};

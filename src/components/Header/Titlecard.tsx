import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import "./styles.scss";

export const Titlecard: FC = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["center center", "end start"],
	});

    const translatePos = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const translateXPos = (multiplier: number) => useTransform(
		translatePos,
		(x) => `translateX(${x * multiplier}px)`
	);

	return (
		<motion.div className="title-card" ref={ref}>
			<div className="title-card-content">
				<motion.div className="title-card-paragraph" style={{ transform: translateXPos(1) }}>
					<div className="highlight">SIL</div>
					<div>VAN</div>
					<div>DU</div>
					<div>BA</div>
					<div>CH</div>

					<div className="highlight">SIL</div>
					<div>VAN</div>
					<div>DU</div>
					<div>BA</div>
					<div>CH</div>

					<div className="highlight">SIL</div>
					<div>VAN</div>
					<div>DU</div>
					<div>BA</div>
					<div>CH</div>
				</motion.div>

				<motion.div className="title-card-paragraph" style={{ transform: translateXPos(1.2) }}>
					<div>SIL</div>
					<div className="highlight">VAN</div>
					<div>DU</div>
					<div>BA</div>
					<div>CH</div>

					<div>SIL</div>
					<div className="highlight">VAN</div>
					<div>DU</div>
					<div>BA</div>
					<div>CH</div>

					<div>SIL</div>
					<div className="highlight">VAN</div>
					<div>DU</div>
					<div>BA</div>
					<div>CH</div>
				</motion.div>

				<motion.div className="title-card-paragraph" style={{ transform: translateXPos(1.4) }}>
					<div>SIL</div>
					<div>VAN</div>
					<div className="highlight">DU</div>
					<div>BA</div>
					<div>CH</div>

					<div>SIL</div>
					<div>VAN</div>
					<div className="highlight">DU</div>
					<div>BA</div>
					<div>CH</div>

					<div>SIL</div>
					<div>VAN</div>
					<div className="highlight">DU</div>
					<div>BA</div>
					<div>CH</div>
				</motion.div>

				<motion.div className="title-card-paragraph" style={{ transform: translateXPos(1.6) }}>
					<div>SIL</div>
					<div>VAN</div>
					<div>DU</div>
					<div className="highlight">BA</div>
					<div>CH</div>

					<div>SIL</div>
					<div>VAN</div>
					<div>DU</div>
					<div className="highlight">BA</div>
					<div>CH</div>

					<div>SIL</div>
					<div>VAN</div>
					<div>DU</div>
					<div className="highlight">BA</div>
					<div>CH</div>
				</motion.div>

				<motion.div className="title-card-paragraph" style={{ transform: translateXPos(1.8) }}>
					<div>SIL</div>
					<div>VAN</div>
					<div>DU</div>
					<div>BA</div>
					<div className="highlight">CH</div>

					<div>SIL</div>
					<div>VAN</div>
					<div>DU</div>
					<div>BA</div>
					<div className="highlight">CH</div>

					<div>SIL</div>
					<div>VAN</div>
					<div>DU</div>
					<div>BA</div>
					<div className="highlight">CH</div>
				</motion.div>
			</div>
			<div className="title-card-footer">WELCOME TO MY PORTFOLIO WEBSITE</div>
		</motion.div>
	);
};

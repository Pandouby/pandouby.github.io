import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useRef } from "react";
import "./styles.scss";

interface CardProps {
	title?: string;
	children: any;
	style?: {};
	onClick?: () => void;
	className?: string;
	onPageEnd?: () => void;
	width?: string;
	height?: string;
}

export const Card: FC<CardProps> = ({
	title,
	children,
	style,
	className,
	onPageEnd,
	width,
	height,
	...props
}) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const scale = useTransform(
		scrollYProgress,
		[0, 0.4, 0.6, 1],
		[0, 100, 100, 0]
	);
	const scalePercentage = useTransform(scale, (s) => `${s}%`);
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.35, 0.65, 1],
		[0, 1, 1, 0]
	);
	const blurValue = useTransform(
		scrollYProgress,
		[0, 0.35, 0.65, 1],
		[5, 0, 0, 5]
	);
	const blur = useTransform(blurValue, (bv) => `blur(${bv}px)`);

	const cardInView = useInView(ref);

	useEffect(() => {
		if (!cardInView) {
			onPageEnd && onPageEnd();
		}
	}, [cardInView]);

	return (
		<motion.div
			layout
			className={`card-wrapper ${className}`}
			ref={ref}
			style={{
				scale: scalePercentage,
				opacity,
				...style,
				filter: blur,
				width,
				height,
			}}
			{...props}
		>
			<div className="card card-front">
				<div className="card-content">
					<h2 className="card-title">{title}</h2>
					{children}
				</div>
			</div>
			<div className="card card-back"></div>
		</motion.div>
	);
};

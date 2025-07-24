import { motion, useScroll, useTransform } from "framer-motion";
import React, { FC, useRef } from "react";

export enum GalleryImageOrientation {
	PORTRAIT = "portrait",
	LANDSCAPE = "landscape",
	SQUARE = "square",
}

export interface GalleryImageProps {
	src: string;
	alt: string;
	orientation: GalleryImageOrientation;
	offset: { offsetX: number; offsetY: number };
	scrollMultiplier?: number;
    style: React.CSSProperties;
}

export const GalleryImage: FC<GalleryImageProps> = ({
	src,
	alt,
	orientation,
	offset,
	scrollMultiplier = 0,
    style
}) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const translatePos = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const translateYPos = () =>
		useTransform(
			translatePos,
			(x) =>
				`translate(${offset.offsetX}px, ${
					offset.offsetY - x * scrollMultiplier
				}px)`
		);

	const transform = {
		transform: translateYPos(),
	};

	return (
		<motion.img
			src={src}
			className={orientation}
			alt={alt}
			style={{...style, ...transform}}
			ref={ref}
		/>
	);
};

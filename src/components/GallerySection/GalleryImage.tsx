import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import React, { FC, useEffect, useRef, useState } from "react";

export enum GalleryImageOrientation {
	PORTRAIT = "portrait",
	LANDSCAPE = "landscape",
	SQUARE = "square",
}

export interface GalleryImageProps {
	highResSrc: string;
	lowResSrc: string;
	alt: string;
	orientation: GalleryImageOrientation;
	offset: { offsetX: number; offsetY: number };
	scrollMultiplier?: number;
	style?: React.CSSProperties;
}

export const GalleryImage: FC<GalleryImageProps> = ({
	highResSrc,
	lowResSrc,
	alt,
	orientation,
	offset,
	scrollMultiplier = 0,
	style,
}) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	// Offset Position of Gallery Images and add scroll parallex effect
	const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const translateY = useTransform(translate, (x) => {
		return `translate(${offset.offsetX}px, ${
			offset.offsetY - x * scrollMultiplier
		}px)`;
	});

	// Add entry animation for Gallery Images
	const scale = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[50, 100, 100, 100]
	);
	const scalePercentage = useTransform(scale, (s) => `${s}%`);
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.35, 0.65, 1],
		[1, 1, 1, 1]
	);
	const blurValue = useTransform(
		scrollYProgress,
		[0, 0.35, 0.65, 1],
		[5, 0, 0, 5]
	);
	const blur = useTransform(blurValue, (bv) => `blur(${bv}px)`);

	const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

	const handleImageClick = () => {
		if (!window.matchMedia("(max-width: 768px)").matches) {
			setIsImageViewerOpen(!isImageViewerOpen);
		}
	};

	const transformStyle = !isImageViewerOpen
		? {
				transform: translateY,
		  }
		: {};

	const motionStyles = {
		//scale: scalePercentage,
		opacity,
		filter: blur,
	};

	useEffect(() => {
		if (isImageViewerOpen) {
			document.body.style.overflow = "hidden";
			document.body.style.height = "100vh";
		} else {
			document.body.style.overflow = "auto";
			document.body.style.height = "100%";
		}
	}, [isImageViewerOpen]);

	return (
		<>
			<motion.div
				className="gallery-image-wrapper"
				style={{
			        ...style,
                    //...transformStyle,
					//...motionStyles,
				}}
				layoutId={`wrapper-${lowResSrc}`}
				ref={ref}
			>
				<motion.img
					src={lowResSrc}
					className={orientation}
					layoutId={alt}
					alt={alt}
					onClick={handleImageClick}
				/>
			</motion.div>

			{isImageViewerOpen && (
				<div className="image-viewer">
					<motion.div
						className="gallery-image-wrapper"
						layoutId={`wrapper-${lowResSrc}`}
					>
						<motion.img
							src={lowResSrc}
							className={orientation}
							layoutId={alt}
							onClick={handleImageClick}
						/>
					</motion.div>
				</div>
			)}
		</>
	);
};

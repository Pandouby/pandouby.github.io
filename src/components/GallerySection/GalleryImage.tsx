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

	const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

	const handleImageClick = () => {
		setIsImageViewerOpen(!isImageViewerOpen);
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

	const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const translateY = useTransform(translate, (x) => {
		return `translate(${offset.offsetX}px, ${
			offset.offsetY - x * scrollMultiplier
		}px)`;
	});

	const transformStyle = !isImageViewerOpen
		? {
				transform: translateY,
		  }
		: {};

	return (
		<>
			<motion.div className="gallery-image-wrapper" style={{ ...style }} layoutId={`wrapper-${lowResSrc}`}>
				<motion.img
					src={lowResSrc}
					className={orientation}
					layoutId={alt}
					alt={alt}
					//style={{...transformStyle}}
					//ref={ref}
					onClick={handleImageClick}
				/>
			</motion.div>

			{isImageViewerOpen && (
				<div className="image-viewer">
					<motion.div className="gallery-image-wrapper" layoutId={`wrapper-${lowResSrc}`}>
						<motion.img
							src={lowResSrc}
							className={orientation}
							layoutId={alt}
							onClick={handleImageClick}
						/>
                        <p>Wonderfull holliday</p>
					</motion.div>
				</div>
			)}
		</>
	);
};

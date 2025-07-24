import { motion } from "framer-motion";
import { FC } from "react";
import "./styles.scss";
import { FloatingSectionTitle } from "../FloatingSectionTitle/FloatingSectionTitle";
import {
	GalleryImage,
	GalleryImageOrientation,
	GalleryImageProps,
} from "./GalleryImage";

export const GallerySection: FC = () => {
	const imageList: GalleryImageProps[] = [
		{
			src: "/images/Gallery/1.jpeg",
			alt: "Image 1",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: 63, offsetY: -43 },
			scrollMultiplier: 2,
		},
		{
			src: "/images/Gallery/2.jpeg",
			alt: "Image 2",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -52, offsetY: -78 },
			scrollMultiplier: 0.5,
		},
		{
			src: "/images/Gallery/3.jpeg",
			alt: "Image 3",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -31, offsetY: 47 },
		},
		{
			src: "/images/Gallery/4.jpeg",
			alt: "Image 4",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -66, offsetY: 6 },
			scrollMultiplier: 2,
		},
		{
			src: "/images/Gallery/5.jpeg",
			alt: "Image 5",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: 92, offsetY: -48 },
		},
		{
			src: "/images/Gallery/6.jpeg",
			alt: "Image 6",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: 59, offsetY: 70 },
		},
		{
			src: "/images/Gallery/7.jpeg",
			alt: "Image 7",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -15, offsetY: 65 },
			scrollMultiplier: 2.5,
		},
		{
			src: "/images/Gallery/8.jpeg",
			alt: "Image 8",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -44, offsetY: -3 },
			scrollMultiplier: 1.4,
		},
		{
			src: "/images/Gallery/9.jpeg",
			alt: "Image 9",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: 14, offsetY: -19 },
			scrollMultiplier: 0.3,
		},
		{
			src: "/images/Gallery/10.jpeg",
			alt: "Image 10",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: 68, offsetY: -80 },
			scrollMultiplier: 1.7,
		},
		{
			src: "/images/Gallery/11.jpeg",
			alt: "Image 11",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -55, offsetY: 34 },
		},
		{
			src: "/images/Gallery/12.jpeg",
			alt: "Image 12",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: -72, offsetY: 25 },
		},
		{
			src: "/images/Gallery/13.jpeg",
			alt: "Image 13",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: 33, offsetY: -54 },
			scrollMultiplier: 1.1,
		},
		{
			src: "/images/Gallery/14.jpeg",
			alt: "Image 14",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -5, offsetY: 38 },
			scrollMultiplier: 1.3,
		},
		{
			src: "/images/Gallery/15.jpeg",
			alt: "Image 15",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: 3, offsetY: -4 },
			scrollMultiplier: 0.6,
		},
		{
			src: "/images/Gallery/16.jpeg",
			alt: "Image 16",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -47, offsetY: -27 },
			scrollMultiplier: 0.2,
		},
	];

	return (
		<motion.div className="gallery-section">
			<FloatingSectionTitle title="gallery" reverse={true} />

			<div className="gallery">
				{imageList.map((image, index) => (
					<GalleryImage
						key={index}
						src={image.src}
						alt={image.alt}
						orientation={image.orientation}
						offset={image.offset}
						scrollMultiplier={image.scrollMultiplier} // Random multiplier for scroll effect
                        style={{ gridArea: "box-" + (index + 1) }}
					/>
				))}
			</div>
		</motion.div>
	);
};

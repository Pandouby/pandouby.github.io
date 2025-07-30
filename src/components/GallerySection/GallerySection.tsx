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
			highResSrc: "/images/Gallery/high-res/image1.JPG",
			lowResSrc: "/images/Gallery/low-res/image1.JPG",
			alt: "Image 1",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: 63, offsetY: -43 },
			scrollMultiplier: 2,
		},
		{
			highResSrc: "/images/Gallery/high-res/image2.jpg",
			lowResSrc: "/images/Gallery/low-res/image2.JPG",
			alt: "Image 2",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -52, offsetY: -78 },
			scrollMultiplier: 0.5,
		},
		{
			highResSrc: "/images/Gallery/high-res/image3.jpg",
			lowResSrc: "/images/Gallery/low-res/image3.jpg",
			alt: "Image 3",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -31, offsetY: 47 },
		},
		{
			highResSrc: "/images/Gallery/high-res/image4.JPG",
			lowResSrc: "/images/Gallery/low-res/image4.JPG",
			alt: "Image 4",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: -66, offsetY: 6 },
			scrollMultiplier: 2,
		},
		{
			highResSrc: "/images/Gallery/high-res/image5.JPG",
			lowResSrc: "/images/Gallery/low-res/image5.JPG",
			alt: "Image 5",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: 92, offsetY: -48 },
		},
		{
			highResSrc: "/images/Gallery/high-res/image6.JPG",
			lowResSrc: "/images/Gallery/low-res/image6.JPG",
			alt: "Image 6",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: 59, offsetY: 70 },
		},
		{
			highResSrc: "/images/Gallery/high-res/image7.JPG",
			lowResSrc: "/images/Gallery/low-res/image7.JPG",
			alt: "Image 7",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -15, offsetY: 65 },
			scrollMultiplier: 2.5,
		},
		{
			highResSrc: "/images/Gallery/high-res/image8.JPG",
			lowResSrc: "/images/Gallery/low-res/image8.JPG",
			alt: "Image 8",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: -44, offsetY: -3 },
			scrollMultiplier: 1.4,
		},
		{
			highResSrc: "/images/Gallery/high-res/image9.JPG",
			lowResSrc: "/images/Gallery/low-res/image9.JPG",
			alt: "Image 9",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: 14, offsetY: -19 },
			scrollMultiplier: 0.3,
		},
		{
			highResSrc: "/images/Gallery/high-res/image10.JPG",
			lowResSrc: "/images/Gallery/low-res/image10.JPG",
			alt: "Image 10",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: 68, offsetY: -80 },
			scrollMultiplier: 1.7,
		},
		{
			highResSrc: "/images/Gallery/high-res/image11.JPG",
			lowResSrc: "/images/Gallery/low-res/image11.JPG",
			alt: "Image 11",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -55, offsetY: 34 },
		},
		{
			highResSrc: "/images/Gallery/high-res/image12.JPG",
			lowResSrc: "/images/Gallery/low-res/image12.JPG",
			alt: "Image 12",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: -72, offsetY: 25 },
		},
		{
			highResSrc: "/images/Gallery/high-res/image13.JPG",
			lowResSrc: "/images/Gallery/low-res/image13.JPG",
			alt: "Image 13",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: 33, offsetY: -54 },
			scrollMultiplier: 1.1,
		},
		{
			highResSrc: "/images/Gallery/high-res/image14.JPG",
			lowResSrc: "/images/Gallery/low-res/image14.JPG",
			alt: "Image 14",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -5, offsetY: 38 },
			scrollMultiplier: 1.3,
		},
		{
			highResSrc: "/images/Gallery/high-res/image15.JPG",
			lowResSrc: "/images/Gallery/low-res/image15.JPG",
			alt: "Image 15",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: 3, offsetY: -4 },
			scrollMultiplier: 0.6,
		},
		{
			highResSrc: "/images/Gallery/high-res/image16.JPG",
			lowResSrc: "/images/Gallery/low-res/image16.JPG",
			alt: "Image 16",
			orientation: GalleryImageOrientation.PORTRAIT,
			offset: { offsetX: -47, offsetY: -27 },
			scrollMultiplier: 0.2,
		},
        {
			highResSrc: "/images/Gallery/high-res/image17.JPG",
			lowResSrc: "/images/Gallery/low-res/image17.JPG",
			alt: "Image 17",
			orientation: GalleryImageOrientation.LANDSCAPE,
			offset: { offsetX: -47, offsetY: -27 },
			scrollMultiplier: 0.2,
		},
	];

	return (
		<div className="gallery-section section">
			<FloatingSectionTitle title="gallery" reverse={true} />

			<div className="gallery">
				{imageList.map((image, index) => (
					<GalleryImage
						key={index}
                        highResSrc={image.highResSrc}
						lowResSrc={image.lowResSrc}
						alt={image.alt}
						orientation={image.orientation}
						offset={image.offset}
						scrollMultiplier={image.scrollMultiplier} // Random multiplier for scroll effect
						style={{ gridArea: "box-" + (index + 1) }}
					/>
				))}
			</div>
		</div>
	);
};

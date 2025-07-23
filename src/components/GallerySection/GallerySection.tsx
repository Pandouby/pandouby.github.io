import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import "./styles.scss";
import { FloatingSectionTitle } from "../FloatingSectionTitle/FloatingSectionTitle";

export const GallerySection: FC = () => {
	return (
		<motion.div className="gallery-section">
			<FloatingSectionTitle title="gallery" reverse={true} />

			<div className="gallery">
				<img src="/images/Gallery/1.jpeg" className="portrait"/>
				<img src="/images/Gallery/2.jpeg" className="portrait"/>
				<img src="/images/Gallery/3.jpeg" className="portrait"/>
				<img src="/images/Gallery/4.jpeg" className="portrait"/>
				<img src="/images/Gallery/5.jpeg" className="landscape"/>
				<img src="/images/Gallery/6.jpeg" className="landscape"/>
				<img src="/images/Gallery/7.jpeg" className="portrait"/>
				<img src="/images/Gallery/8.jpeg" className="portrait"/>
				<img src="/images/Gallery/9.jpeg" className="portrait"/>
				<img src="/images/Gallery/10.jpeg" className="landscape"/>
				<img src="/images/Gallery/11.jpeg" className="portrait"/>
				<img src="/images/Gallery/12.jpeg" className="landscape"/>
				<img src="/images/Gallery/13.jpeg" className="landscape"/>
				<img src="/images/Gallery/14.jpeg" className="portrait"/>
				<img src="/images/Gallery/15.jpeg" className="portrait"/>
				<img src="/images/Gallery/16.jpeg" className="portrait"/>
			</div>
		</motion.div>
	);
};

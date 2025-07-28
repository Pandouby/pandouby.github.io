import { motion } from "framer-motion";
import { FC, useState } from "react";
import "./styles.scss";

export const TestSection: FC = () => {
	const [open, isOpen] = useState(false);

	return (
		<div className="section test-section">
			<motion.img
				layoutId="1"
				src="https://picsum.photos/200/300"
				alt="image"
				className="image"
				onClick={() => isOpen(!open)}
                layout
			/>

			{open && (
				<motion.img
					layoutId="1"
					src="https://picsum.photos/200/300"
					alt="Test Image"
					className="viewer"
					onClick={() => isOpen(!open)}
                    layout
				/>
			)}
		</div>
	);
};

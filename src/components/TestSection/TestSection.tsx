import { motion } from "framer-motion";
import { FC, useState } from "react";
import "./styles.scss";

export const TestSection: FC = () => {
	const [open, isOpen] = useState(false);

	return (
		<div className="section test-section">
		</div>
	);
};

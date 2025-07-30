import { motion } from "framer-motion";
import { FC, useState } from "react";
import "./styles.scss";
import { MapWidget } from "../MapWidget/MapWidget";

export const TestSection: FC = () => {
	const [open, isOpen] = useState(false);

	return (
		<div className="section test-section">
			<MapWidget />
		</div>
	);
};

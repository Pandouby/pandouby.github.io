import { FC } from "react";
import "./styles.scss";
import { motion } from "framer-motion";

export const LoadingScreen: FC = () => {
	return (
		<div
			className="loading-screen"
			style={{
				border: "none",
				padding: "0",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		>
			<motion.svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				initial={{ opacity: 1, filter: "blur(0px)" }}
				animate={{ opacity: 0, y: -50, filter: "blur(5px)" }}
				transition={{
					delay: 2.5,
					duration: 0.3,
					ease: "easeInOut",
				}}
			>
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{
						duration: 1.5,
						ease: "easeInOut",
					}}
					fill="none"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 21M3 5L11 12L3 19"
				/>
			</motion.svg>
			<motion.svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				initial={{ opacity: 1, filter: "blur(0px)" }}
				animate={{ opacity: 0, y: -50, filter: "blur(5px)" }}
				transition={{
					delay: 2.5,
					duration: 0.3,
					ease: "easeInOut",
				}}
			>
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{
						delay: 1.5,
						duration: 1,
						ease: "easeInOut",
					}}
					fill="none"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 19H21"
				/>
			</motion.svg>
		</div>
	);
};

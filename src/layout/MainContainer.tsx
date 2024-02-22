import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import "./styles.scss";

interface MainContainerProps {
	children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({ children }) => {
	return (
		<div className="main-container">
			{children}
			<Footer />
		</div>
	);
};

import { FC, ReactNode } from "react";
import "./styles.scss";

interface WidgetProps {
	children: any;
	hasPadding?: boolean;
	title?: string | ReactNode;
    className: string;
    style?: React.CSSProperties;
}

export const Widget: FC<WidgetProps> = ({ children, hasPadding = true, title, className, style}) => {
	return (
    <div className={`widget ${className} ${hasPadding ? "padding" : ""}`} style={{...style}}>
        {title && <h1>{title}</h1>}

        <div className="widget-content">
            {children} 
        </div>
    </div>
    )
};

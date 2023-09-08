import { FC, ReactNode } from "react";

interface ButtonProps {
    children: any;
    onClick?: any;
    className?: string;
}

const Button: FC<ButtonProps> = ({children, onClick, className}) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>{children}</button>
    );
}

export default Button;
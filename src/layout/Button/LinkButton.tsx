
import { FC } from "react";

interface LinkButtonProps {
    children: any;
    url?: string;
    className?: string;
}

const LinkButton: FC<LinkButtonProps> = ({children, className, url}) => {
    return (
        <a className={`linkButton ${className}`} href={url}>{children}</a>
    );
}

export default LinkButton;
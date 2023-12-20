import { FC } from "react";
import "./styles.scss";
import { ContactCard } from "./ContactCard";

export const ContactSection: FC = () => {

    return (
        <div className="contact-section">
            <ContactCard />
        </div>
    );
}
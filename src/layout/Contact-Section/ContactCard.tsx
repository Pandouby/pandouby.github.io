import { FC } from "react";
import "./styles.scss";
import { FormControl, TextField } from "@mui/material";
import Button from "../Button/button";
import { SocialStack } from "./Socials/SocialStack";
import { LocationMap } from "./Location/Location-Map";

export const ContactCard: FC = () => {
	return (
		<div className="contact-wrapper">
			<div className="email-container">
				<h2>Send a message</h2>
				<div className="email-form">
					<FormControl
						fullWidth
						sx={{
							flexDirection: "row",
							paddingBottom: "2rem",
						}}
					>
						<TextField
							id="first-name"
							label="First Name"
							variant="standard"
							required
						/>
						<TextField
							id="last-name"
							variant="standard"
							label="Last Name"
							required
						/>
					</FormControl>
					<FormControl
						fullWidth
						sx={{ flexDirection: "row", paddingBottom: "2rem" }}
					>
						<TextField
							id="phone"
							label="Phone"
							variant="standard"
							required
						/>
						<TextField
							id="email"
							variant="standard"
							label="Email"
							required
						/>
					</FormControl>
					<FormControl fullWidth sx={{ m: 0, paddingBottom: "2rem" }}>
						<TextField
							id="company"
							variant="standard"
							label="Company or Groupe"
							required
						/>
					</FormControl>
					<FormControl fullWidth sx={{ m: 0, paddingBottom: "2rem" }}>
						<TextField
							id="textarea"
							variant="outlined"
							label="Whats it about"
							multiline
							minRows={5}
							maxRows={10}
							required
						/>
					</FormControl>
					<Button className="email-form-submit-button">SUBMIT</Button>
				</div>
			</div>
			<div className="socials-container">
				<h2>Contact Info</h2>
				<SocialStack />
                {/* Unhappy with looks maybe use mapboxgl -> is payed service looks mutch better */}
				{/* <LocationMap /> */}
			</div>
		</div>
	);
};

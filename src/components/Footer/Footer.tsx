import { FC, useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";

export const Footer: FC = () => {
	const [dateOfLastCommit, setDateOfLastCommit] = useState<Date>();

	const formateDate = (date: Date | undefined) => {
		return date ? date.toLocaleDateString("en-GB") : null;
	};

	useEffect(() => {
		axios
			.get(
				`https://api.github.com/repos/pandouby/pandouby.github.io/commits`
			)
			.then((res) => {
				setDateOfLastCommit(
					new Date(res.data[0].commit.committer.date)
				);
			});
	}, []);

	return (
		<footer className="footer">
			<div className="footer-content">
				&copy; {new Date().getFullYear()} | All rights reserved
				<br />
				{dateOfLastCommit && <span>Updated {formateDate(dateOfLastCommit)}</span>}
			</div>
		</footer>
	);
};

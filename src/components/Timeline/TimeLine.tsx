import { FC } from "react";
import "./styles.scss";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact, SiReaddotcv } from "react-icons/si";
import { PiGraph } from "react-icons/pi";

export const TimeLine: FC = () => {
	return (
		<div className="timeline-wrapper">
			<VerticalTimeline lineColor={"#2448ff"}>
				<VerticalTimelineElement
					className="timeline-element"
					date="currently"
					iconStyle={{
						background: "#2448ff",
						color: "#fff",
					}}
					icon={<SiReaddotcv />}
				>
					<h3 className="vertical-timeline-element-title">
						Open for work, looking for my next challange!
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Zürich, Switzerland
					</h4>
					<p></p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="timeline-element"
					date="2025 - present"
					iconStyle={{
						background: "#2448ff",
						color: "#fff",
					}}
					icon={<PiGraph />}
				>
					<h3 className="vertical-timeline-element-title">
						Bacholers in Data Science @ZHAW
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Winterthur, Switzerland
					</h4>
					<p></p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="timeline-element"
					date="2020 - 2024"
					iconStyle={{
						background: "#2448ff",
						color: "#fff",
					}}
					icon={<SiReact />}
				>
					<h3 className="vertical-timeline-element-title">
						Apprentice, Software Developer{" "}
						<a href="https://www.linkedin.com/company/ti8m">
							@ti&m
						</a>
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Zürich, Switzerland
					</h4>
					<p></p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

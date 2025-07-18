import { FC } from "react";
import "./styles.scss";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";
import { BsClipboardData } from "react-icons/bs";

const TimeLine: FC = () => {
	return (
		<VerticalTimeline lineColor={"rgb(33, 150, 243)"}>
			{/*<VerticalTimelineElement
				className="timeline-element"
				contentStyle={{ background: "rgb(33, 150, 243)" }}
				contentArrowStyle={{
					borderRight: "7px solid  rgb(33, 150, 243)",
				}}
				date="2026 - present"
				iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				icon={<BsClipboardData />}
			>
				<h3 className="vertical-timeline-element-title">
					Bacholor data science
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					zhaw Winterthur, Switzerland
				</h4>
				<p>Specialization artificial intelligence</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="timeline-element"
				date="2024 - 2025"
				iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				icon={<SiReact />}
			>
				<h3 className="vertical-timeline-element-title">
					Junior Software Developer{" "}
					<a href="https://www.linkedin.com/company/ti8m">@ti&m</a>
				</h3>

				<h4 className="vertical-timeline-element-subtitle">
					Zürich, Switzerland
				</h4>
				<p>Frontend Development</p>
			</VerticalTimelineElement>
			*/}

			<VerticalTimelineElement
				className="timeline-element"
				date="currently"
				iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				icon={<SiReact />}
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
				iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				icon={<SiReact />}
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
				iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
				icon={<SiReact />}
			>
				<h3 className="vertical-timeline-element-title">
					Apprentice, Software Developer{" "}
					<a href="https://www.linkedin.com/company/ti8m">@ti&m</a>
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Zürich, Switzerland
				</h4>
				<p></p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
};

export default TimeLine;

import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./aries.png"
								alt="aries"
								className="work-image"
							/>
							<div className="work-title">ARIES</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration"> July 2023 – Aug 2023</div>
							<p> Designed and deployed a project management portal for the 1.3-m Devasthal Fast Optical Telescope, employing HTML, CSS,
JavaScript, Django, and PostgreSQL.
• Streamlined proposal submissions for hundreds of global researchers, fostering accessibility and collaboration across
telescopes, including the 3.6-metre Devasthal Optical Telescope.</p>
						</div>

						<div className="work">
							<img
								src="./idex.png"
								alt="idex"
								className="work-image"
							/>
							<div className="work-title">Indian Ministry of Defence (idex-DIO)</div>
							<div className="work-subtitle">
								Research and Development Intern
							</div>
							<div className="work-duration"> June 2022 – July 2022</div>
							<p> Led the development of an algorithm to map potential 1000+ angel investors with defence startups under IDEX-DIO,
optimising collaboration in the defence innovation ecosystem. Additionally, we (a team of five members) proposed a pioneer-
ing research initiative for a self-heating jacket, utilising lightweight materials and benign chemicals for prolonged warmth in
extremely cold climates.
• The successful submission of the research proposal , this initiative promises to benefit thousands of Indian soldiers by
implementing cutting-edge solutions to enhance their capabilities and operational effectiveness.</p>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

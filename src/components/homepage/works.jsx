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
							
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

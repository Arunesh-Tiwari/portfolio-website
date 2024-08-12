import React from "react";

function article_1() {
	return {
		date: "10 Aug 2024",
		title: "Business Analytics 101: Your Essential Guide",
		description:
			"Delves into the role of a business analyst, likening their work to that of a detective who uses data to uncover insights and solve business challenges. The guide emphasizes the importance of data collection from various sources to understand market performance. It outlines the key responsibilities of a Business Intelligence (BI) Analyst, such as investigating historical data, managing business intelligence, and developing dashboards. The article also breaks down the four types of analytics—Descriptive, Diagnostic, Predictive, and Prescriptive—highlighting their distinct roles in addressing business problems. Additionally, it stresses the importance of project management in business analytics, explaining how a well-crafted project charter is crucial for setting project objectives, scope, and deliverables. Through this comprehensive guide, Arunesh provides valuable insights for those looking to understand and excel in the field of business analytics.",
		keywords: [
			"Business Analytics",
			"Arunesh",
			"Arunesh T",
			"Arunesh Tiwari",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;

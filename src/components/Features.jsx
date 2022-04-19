import React from "react";
import ComponentLayout from "../layout/ComponentLayout";

const Features = () => {
	const features = [
		{
			point: "⦿",
			title: "Terrace Waterproofing:",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		},
		{
			point: "⦿",
			title: "Waterproofing for Walls:",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		},
		{
			point: "⦿",
			title: "Swimming Pools:",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		},
		{
			point: "⦿",
			title: "Repair section:",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		},
		{
			point: "⦿",
			title: "Industrial Waterproofing:",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		},
	];

	return (
		<>
			<ComponentLayout parentClass="feature_page_head_container">
				<h1 className="text-white text-center mb-0 py-4 fw-bold">
					Our Features
				</h1>
			</ComponentLayout>
			<ComponentLayout parentClass="feature_page_body_container">
				{features.map((content, i) => {
					return (
						<div className="d-flex gap-3" key={i}>
							<div>{content.point}</div>
							<div>
								<h4 className="fw-bold">{content.title}</h4>
								<p className="fw500">{content.para}</p>
							</div>
						</div>
					);
				})}
			</ComponentLayout>
		</>
	);
};

export default Features;

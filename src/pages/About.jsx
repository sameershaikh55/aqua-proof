import React from "react";
import Layout from "../layout";
import ComponentLayout from "../layout/ComponentLayout";
import i1 from "../assets/images/about/i1.PNG";
import i2 from "../assets/images/about/i2.svg";
import i3 from "../assets/images/about/i3.svg";
import i4 from "../assets/images/about/i4.svg";
import i5 from "../assets/images/about/i5.svg";
import i6 from "../assets/images/about/i6.svg";

const About = () => {
	const aboutCards = [
		{ img: i1, text: "PU Grouting" },
		{ img: i2, text: "Anti Corrosion Coating" },
		{ img: i3, text: "Foam Sealant" },
		{ img: i4, text: "Polymer Cement Waterproofing" },
		{ img: i5, text: "Elastomeric Water Proofing" },
		{ img: i6, text: "Water Repellent Coating" },
	];

	return (
		<Layout>
			<ComponentLayout parentClass="about_page_container">
				<div className="py-5">
					<h1 className="text-center fw-bold color1">About Us</h1>
					<p className="mb-0 text-center mt-4">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<br />
					<br />
					<div className="row gy-4">
						{aboutCards.map((content, i) => {
							return (
								<div className="col-6 col-md-4" key={i}>
									<div className="about_card">
										<img className="w-100" src={content.img} alt="" />
										<p className="text-white fw600">{content.text}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</ComponentLayout>
		</Layout>
	);
};

export default About;

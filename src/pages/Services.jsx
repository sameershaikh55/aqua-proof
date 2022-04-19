import React from "react";
import Layout from "../layout";
import ComponentLayout from "../layout/ComponentLayout";
import i1 from "../assets/images/about/i1.PNG";
import i2 from "../assets/images/about/i2.svg";
import i3 from "../assets/images/about/i3.svg";
import i4 from "../assets/images/about/i4.svg";
import i5 from "../assets/images/about/i5.svg";
import i6 from "../assets/images/about/i6.svg";
import arrow from "../assets/images/arrow.svg";
import Features from "../components/Features";

const Services = () => {
	const services = [
		{
			img: i1,
			title: "PU Grouting",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
		},
		{
			img: i2,
			title: "Anti Corrosion Coating",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
		},
		{
			img: i3,
			title: "Foam Sealant",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
		},
		{
			img: i4,
			title: "Polymer Cement Waterproofing",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
		},
		{
			img: i5,
			title: "Elastomeric Water Proofing",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
		},
		{
			img: i6,
			title: "Water Repellent Coating",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
		},
	];

	return (
		<Layout>
			<ComponentLayout parentClass="services_page_container">
				<div className="py-5">
					<h1 className="text-center fw-bold color1">Services</h1>
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
					<div className="row gy-5 gx-5">
						{services.map((content, i) => {
							return (
								<div className="col-4" key={i}>
									<div className="service_card">
										<img className="w-100" src={content.img} alt="" />
										<div className="py-3 px-3">
											<h6 className="fw-bold color1 fw600 py-2">
												{content.title}
											</h6>
											<p className="pb-2 f14">{content.para}</p>
											<div className="d-flex justify-content-end">
												<button className="border-0 bg-transparent f14 color1 fw600">
													Read more{" "}
													<img className="ms-1 arrow" src={arrow} alt="" />
												</button>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<br />
				</div>
			</ComponentLayout>

			<Features />
		</Layout>
	);
};

export default Services;

import React from "react";
import i1 from "../assets/images/servicesProjects/i1.svg";
import i2 from "../assets/images/servicesProjects/i2.svg";
import i3 from "../assets/images/servicesProjects/i3.svg";
import i4 from "../assets/images/servicesProjects/i4.svg";
import ComponentLayout from "../layout/ComponentLayout";

const ServicesProjects = () => {
	const servicesProjects = [
		{
			img: i1,
			title: "Waterproofing Services",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
		},
		{
			img: i2,
			title: "Air and Vapor Barriers",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
		},
		{
			img: i3,
			title: "Garage Restoration",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
		},
		{
			img: i4,
			title: "Masonry Restoration",
			para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
		},
	];

	return (
		<ComponentLayout parentClass="service_projects_container">
			<h1 className="text-center fw-bold color1">Services Projects</h1>
			<br />
			<div className="row gx-4">
				{servicesProjects.map((content, i) => {
					const { img, para, title } = content;
					return (
						<div className="col-3" key={i}>
							<div className="service_card d-flex flex-column align-items-center justify-content-center px-3">
								<img src={img} alt="" />
								<h6 className="SegoeUI fw600 f20 color1 text-center mt-3">
									{title}
								</h6>
								<p className="f10 text-center mb-0">{para}</p>
							</div>
						</div>
					);
				})}
			</div>

			<p className="below_description mb-0">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>
		</ComponentLayout>
	);
};

export default ServicesProjects;

import React from "react";
import ComponentLayout from "../layout/ComponentLayout";

const ServicesTaken = () => {
	return (
		<ComponentLayout parentClass="services_taken_figures_container">
			<h1 className="text-white text-center fw-bold">Services Taken Figures</h1>
			<p className="mb-0 text-white">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</p>
			<ul className="list-unstyled row services_taken_figures_states mt-4 align-items-center">
				<li className="col-4 text-center fw600 color1 display-4">1360</li>
				<li className="col-4 text-center fw600 color1 display-4">1200</li>
				<li className="col-4 text-center fw600 color1 display-4">1140</li>
			</ul>
		</ComponentLayout>
	);
};

export default ServicesTaken;

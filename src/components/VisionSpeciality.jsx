import React from "react";
import ComponentLayout from "../layout/ComponentLayout";
import i1 from "../assets/images/vision/i1.svg";
import i2 from "../assets/images/vision/i2.svg";

const VisionSpeciality = () => {
	return (
		<ComponentLayout parentClass="vision_speciality_container">
			<div className="row align-items-center">
				<div className="col-4">
					<div className="vision_cont w-100">
						<img className="w-100" src={i1} alt="" />

						<p className="text-white text-center f20 fw-bold">Our Vision</p>
					</div>
				</div>
				<div className="col-8">
					<p className="mb-0 text-white fw500">
						The standard chunk of Lorem Ipsum used since the 1500s is reproduced
						below for those interested. Sections 1.10.32 and 1.10.33 from "de
						Finibus Bonorum et Malorum" by Cicero are also reproduced in their
						exact original form, accompanied by English versions from the 1914
						translation by H. Rackham.
					</p>
				</div>
			</div>
			<br />
			<br />
			<div className="row align-items-center">
				<div className="col-8">
					<div className="row">
						<div className="col-6">
							<ul className="list-unstyled">
								<li className="fw-bold text-white">⦿ Terrace Waterproofing</li>
								<li className="fw-bold text-white">
									⦿ Waterproofing for Walls
								</li>
								<li className="fw-bold text-white">⦿ Swimming Pools</li>
								<li className="fw-bold text-white">⦿ Repair section</li>
								<li className="fw-bold text-white">
									⦿ Industrial Waterproofing
								</li>
							</ul>
						</div>
						<div className="col-6">
							<ul className="list-unstyled">
								<li className="fw-bold text-white">⦿ Terrace Waterproofing</li>
								<li className="fw-bold text-white">
									⦿ Waterproofing for Walls
								</li>
								<li className="fw-bold text-white">⦿ Swimming Pools</li>
								<li className="fw-bold text-white">⦿ Repair section</li>
								<li className="fw-bold text-white">
									⦿ Industrial Waterproofing
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="speciality_cont w-100">
						<img className="w-100" src={i2} alt="" />

						<p className="text-white text-center f20 fw-bold">Our Speciality</p>
					</div>
				</div>
			</div>
		</ComponentLayout>
	);
};

export default VisionSpeciality;

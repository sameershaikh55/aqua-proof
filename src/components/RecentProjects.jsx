import React from "react";
import ComponentLayout from "../layout/ComponentLayout";
import i1 from "../assets/images/recentProjects/i1.svg";
import i2 from "../assets/images/recentProjects/i2.svg";
import i3 from "../assets/images/recentProjects/i3.svg";
import i4 from "../assets/images/recentProjects/i4.svg";

const RecentProjects = () => {
	const recentProjects = [i1, i2, i3, i4];

	return (
		<ComponentLayout parentClass="recent_projects_container">
			<h1 className="text-center fw-bold color1">Recent Projects</h1>
			<br />

			<div className="row">
				{recentProjects.map((content, i) => {
					return (
						<div key={i} className="col-3">
							<img className="w-100" src={content} alt="" />
						</div>
					);
				})}
			</div>
		</ComponentLayout>
	);
};

export default RecentProjects;

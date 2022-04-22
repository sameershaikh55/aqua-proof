import React from "react";

const ComponentLayout = ({ parentClass, children }) => {
	return (
		<div className={parentClass}>
			<div
				className={`page_container ${
					(parentClass === "header_container" && "w-100") || ""
				}`}
			>
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComponentLayout;

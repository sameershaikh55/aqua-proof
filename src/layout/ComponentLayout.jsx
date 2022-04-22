import React from "react";

const ComponentLayout = ({ parentClass, children }) => {
	return (
		<div className={parentClass}>
			<div
				className={`page_container ${
					(parentClass === "header_container" && "w-100") || ""
				}`}
			>
				<div className="container-fluid">{children}</div>
			</div>
		</div>
	);
};

export default ComponentLayout;

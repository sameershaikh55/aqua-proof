import React from "react";

const ComponentLayout = ({ parentClass, children }) => {
	return (
		<div className={parentClass}>
			<div className="page_container">
				<div className="container-fluid">{children}</div>
			</div>
		</div>
	);
};

export default ComponentLayout;

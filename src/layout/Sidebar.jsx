import React from "react";
import { NavLink } from "react-router-dom";
import urls from "./urls.json";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<ul>
				{urls.urls.map((item, i) => {
					return (
						<li className="fw600 text-white f28 pointer" key={i}>
							<NavLink to={item.link}>{item.text}</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;

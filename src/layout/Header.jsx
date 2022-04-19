import React from "react";
import ComponentLayout from "../layout/ComponentLayout";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import urls from "./urls.json";

const Header = () => {
	return (
		<ComponentLayout parentClass="header_container">
			<div className="d-flex justify-content-between align-items-end">
				<div>
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<ul className="list-unstyled d-flex gap-4 mb-1">
					{urls.urls.map((content, i) => {
						return (
							<li key={i}>
								<NavLink
									className="text-decoration-none fw600"
									to={content.link}
								>
									{content.text}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</ComponentLayout>
	);
};

export default Header;

import React from "react";
import ComponentLayout from "../layout/ComponentLayout";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import urls from "./urls.json";
import hamburger from "../assets/images/hamburger.svg";
import cross from "../assets/images/cross.svg";

const Header = ({ ClickEvent, isOpen }) => {
	// FOR NAVBAR SCROLLING EFFECT START
	window.addEventListener("scroll", function () {
		var header = document.querySelector(".header_container");
		if (header !== null) {
			header.classList.toggle("sticky", window.scrollY > 1);
		}
	});
	// FOR NAVBAR SCROLLING EFFECT END

	return (
		<ComponentLayout parentClass="header_container">
			<div className="d-flex justify-content-between align-items-center align-items-md-end w-100">
				<div>
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>

				<div className="d-block d-sm-none">
					{(isOpen && (
						<img
							className="hamb_cross"
							onClick={ClickEvent}
							src={cross}
							alt=""
						/>
					)) || (
						<img
							className="hamb_cross"
							onClick={ClickEvent}
							src={hamburger}
							alt=""
						/>
					)}
				</div>

				<ul className="list-unstyled d-none d-md-flex gap-4 mb-1">
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

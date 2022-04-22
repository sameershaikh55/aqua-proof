import React, { useState } from "react";

// COMP
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header ClickEvent={OnClick} isOpen={isOpen} />
			<div className="header_under"></div>
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Hero />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

import React from "react";

// COMP
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="header_under"></div>
			<Hero />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

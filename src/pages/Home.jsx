import React from "react";

// COMP.
import Hero from "../layout/Hero";
import Clients from "../components/Clients";
import Location from "../components/Location";
import RecentProjects from "../components/RecentProjects";
import ServicesProjects from "../components/ServicesProjects";
import ServicesTaken from "../components/ServicesTaken";
import VisionSpeciality from "../components/VisionSpeciality";
import Layout from "../layout";

const Home = () => {
	return (
		<Layout>
			<ServicesProjects />
			<ServicesTaken />
			<RecentProjects />
			<VisionSpeciality />
			<Clients />
			<Location />
		</Layout>
	);
};

export default Home;

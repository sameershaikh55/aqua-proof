import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about_us" element={<About />} />
				<Route exact path="/gallery" element={<Gallery />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/services" element={<Services />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

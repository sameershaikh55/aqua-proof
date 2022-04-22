import React from "react";

const Location = () => {
	return (
		<div className="location_container">
			<div className="text-white bg_color2 text-center f35 fw-bold">
				View Location
			</div>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.466531174654!2d80.232113!3d13.028244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x552f3bca72fbc275!2sVDS%20AQUA%20WORKS%20%26%20SERVICES!5e0!3m2!1sen!2s!4v1650292701259!5m2!1sen!2s"
				className="w-100"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};

export default Location;

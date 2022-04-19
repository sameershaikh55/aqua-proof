import React from "react";
import Layout from "../layout";
import ComponentLayout from "../layout/ComponentLayout";

const Contact = () => {
	return (
		<Layout>
			<ComponentLayout parentClass="about_page_container">
				<div className="py-5">
					<h1 className="text-center fw-bold color1">About Us</h1>
					<p className="mb-0 text-center mt-4">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<br />
					<br />
				</div>
			</ComponentLayout>
		</Layout>
	);
};

export default Contact;

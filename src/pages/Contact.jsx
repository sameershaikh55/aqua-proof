import React, { useState } from "react";
import Layout from "../layout";
import ComponentLayout from "../layout/ComponentLayout";
import i1 from "../assets/images/contact/i1.svg";
import i2 from "../assets/images/contact/i2.svg";
import i3 from "../assets/images/contact/i3.svg";
import InputField from "../components/InputField";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const Contact = () => {
	const [status, setStatus] = useState("Contact us now!");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const fields = [
		{
			mandatory: true,
			name: "name",
			type: "text",
			label: "First & Last Name",
			size: "col-12",
			message: ["Please enter your name"],
		},
		{
			mandatory: true,
			name: "subject",
			type: "text",
			label: "Subject",
			size: "col-6",
			message: ["Please enter a subject"],
		},
		{
			mandatory: true,
			name: "email",
			type: "text",
			label: "Email address",
			size: "col-6",
			message: ["Please enter an email"],
			otherValidation: {
				pattern: {
					value:
						/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
					message: "Please enter a valid email",
				},
			},
		},
		{
			mandatory: false,
			name: "phone",
			type: "number",
			label: "Phone number",
			size: "col-12",
			message: null,
		},
		{
			mandatory: true,
			name: "message",
			type: "textarea",
			label: "Message",
			size: "col-12",
			message: ["Please enter your message"],
			otherValidation: {
				minLength: {
					value: 30,
					message: "message minimum length should be 30",
				},
			},
		},
	];

	const onSubmit = async (data) => {
		setStatus("Sending...");
		const { name, email, message, subject, phone } = data;
		let details = {
			name: name,
			email: email,
			phone: phone,
			subject: subject,
			message: message,
		};
		let response = await fetch("http://localhost:5000/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details),
		});

		await response.json();

		swal({
			icon: "success",
			buttons: false,
			timer: 3000,
			text: "Your request has sumbitted!",
		});

		setStatus("Contact us now!");
		reset();
	};

	return (
		<Layout>
			<ComponentLayout parentClass="about_page_container">
				<div className="py-5">
					<h1 className="text-center fw-bold color1 mb-0">Contact Us</h1>
				</div>
			</ComponentLayout>

			<ComponentLayout parentClass="contact_page_inner_container">
				<div className="row gy-5">
					<div className="col-12 col-md-6">
						<h2 className="fw-bold">Let's connect Us</h2>
						<div className="row">
							<p className="col-12 col-lg-11 f14">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta…
							</p>
						</div>

						<ul className="list list-unstyled mt-5">
							<li className="row">
								<div className="col-1">
									<img src={i1} alt="" />
								</div>
								<div className="col-11 fw-bold">info@mysite.com</div>
							</li>
							<li className="mt-4 row">
								<div className="col-1">
									<img src={i2} alt="" />
								</div>
								<div className="col-11 fw-bold">1 (123) 456-7890</div>
							</li>
							<li className="mt-4 row">
								<div className="col-1">
									<img src={i3} alt="" />
								</div>
								<div className="col-11 fw-bold">
									1234 Street Ln Virginia Beach, VA 12345
								</div>
							</li>
						</ul>
					</div>
					<div className="col-12 col-md-6">
						<div className="row">
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="col-12 col-md-9 mx-auto"
							>
								<h2 className="fw-bold mb-4">Send us a message</h2>

								<div className="row gy-4">
									{fields.map((content, i) => {
										const {
											label,
											mandatory,
											name,
											size,
											type,
											message,
											otherValidation,
										} = content;
										return (
											<div key={i} className={size}>
												<InputField
													label={label}
													name={name}
													type={type}
													mandatory={mandatory}
													register={register}
													errors={errors}
													message={message}
													otherValidation={otherValidation}
												/>
											</div>
										);
									})}
								</div>

								<div className="col-12 mt-4 mt-md-5">
									<button type="submit">{status}</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</ComponentLayout>
		</Layout>
	);
};

export default Contact;

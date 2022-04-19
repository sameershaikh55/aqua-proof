import React from "react";
import ComponentLayout from "./ComponentLayout";
import logo from "../assets/images/logoF.svg";
import { Link } from "react-router-dom";
import urls from "./urls.json";
import insta from "../assets/images/footer/insta.svg";
import link from "../assets/images/footer/in.svg";
import fb from "../assets/images/footer/fb.svg";
import twitter from "../assets/images/footer/twitter.svg";

const Footer = () => {
	const shareIcons = [
		{
			img: insta,
			link: "",
		},
		{
			img: link,
			link: "",
		},
		{
			img: fb,
			link: "",
		},
		{
			img: twitter,
			link: "",
		},
	];

	return (
		<>
			<ComponentLayout parentClass="footer_container">
				<div className="d-flex justify-content-center">
					<img src={logo} alt="" />
				</div>
				<hr className="bg-light" />
				<div className="row">
					<div className="col-2 text-white">
						<span className="f20 fw-bold">Contact Us</span>
						<br />
						<div className="py-1">
							<a
								className="text-white text-decoration-none h5"
								href="tel:+01234567890"
							>
								+01234567890
							</a>
						</div>
						<div className="py-1">
							<a
								className="text-white text-decoration-none h5"
								href="tel:+01234567890"
							>
								+01234567890
							</a>
						</div>
					</div>
					<div className="col-7">
						<ul className="list-unstyled ps-5 ms-5 d-flex justify-content-center gap-4">
							{urls.urls.map((content, i) => {
								return (
									<li key={i}>
										<Link
											className="text-decoration-none fw600 text-white"
											to={content.link}
										>
											{content.text}
										</Link>
									</li>
								);
							})}
						</ul>

						<ul className="share_icons_container list-unstyled ps-5 ms-5 d-flex justify-content-center gap-4">
							{shareIcons.map((content, i) => {
								return (
									<li key={i} className="share_icon">
										<a target="_blank" href={content.link} rel="noreferrer">
											<img className="w-100" src={content.img} alt="" />
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="col-3">
						<span className="fw600 text-white fw-bold f20">Address:</span>
						<br />
						<span className="text-white fw500">
							Aqua Proofing Services <br className="d-none d-lg-block" /> No 20.
							| Block Tumbulls Road, Nandhanam, Chennai-600 035.
						</span>
					</div>
				</div>
			</ComponentLayout>
			<div className="fw500 text-center py-2">
				© 2022 AquaProof Services All Rights Reserved
			</div>
		</>
	);
};

export default Footer;

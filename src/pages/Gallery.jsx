import React from "react";
import Layout from "../layout";
import ComponentLayout from "../layout/ComponentLayout";

// PICS
import i1 from "../assets/images/gallery/i1.png";
import i2 from "../assets/images/gallery/i2.png";
import i3 from "../assets/images/gallery/i3.png";
import i4 from "../assets/images/gallery/i4.png";
import i5 from "../assets/images/gallery/i5.png";
import i6 from "../assets/images/gallery/i6.png";
import i7 from "../assets/images/gallery/i7.png";
import i8 from "../assets/images/gallery/i8.png";
import i9 from "../assets/images/gallery/i9.png";
import i10 from "../assets/images/gallery/i10.png";
import i11 from "../assets/images/gallery/i11.png";

const Gallery = () => {
	return (
		<Layout>
			<ComponentLayout parentClass="gallery_page_container">
				<div className="py-5">
					<h1 className="text-center fw-bold color1">Gallery</h1>
					<br />

					<div className="row gy-4 mb-5 mb-md-0">
						<div className="col-12 col-md-5 img_cont">
							<img className="w-100" src={i1} alt="" />
						</div>
						<div className="col-12 col-md-7">
							<div className="row gy-4">
								<div className="col-6 img_cont">
									<img className="w-100" src={i2} alt="" />
								</div>
								<div className="col-6 img_cont">
									<img className="w-100" src={i3} alt="" />
								</div>
								<div className="col-6 img_cont">
									<img className="w-100" src={i4} alt="" />
								</div>
								<div className="col-6 img_cont">
									<img className="w-100" src={i5} alt="" />
								</div>
							</div>
						</div>

						<div className="col-12 col-md-7">
							<div className="row gy-4">
								<div className="col-6 img_cont">
									<img className="w-100" src={i6} alt="" />
								</div>
								<div className="col-6 img_cont">
									<img className="w-100" src={i7} alt="" />
								</div>
								<div className="col-6 img_cont">
									<img className="w-100" src={i8} alt="" />
								</div>
								<div className="col-6 img_cont">
									<img className="w-100" src={i9} alt="" />
								</div>
							</div>
						</div>
						<div className="col-12 col-md-5 img_cont">
							<img className="w-100" src={i10} alt="" />
						</div>
					</div>

					<div className="row gy-4 mt-2 mt-md-4 position-relative">
						<div className="col-12 col-sm-8 mx-auto">
							<div className="gallery_detail">
								<p className="mb-0 fw500">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has sur
								</p>
								<br />
								<p className="mb-0 fw500">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has sur
								</p>
							</div>
						</div>
						<div className="col-12 col-md-4">
							<img className="w-100" src={i11} alt="" />
						</div>
					</div>
				</div>
			</ComponentLayout>
		</Layout>
	);
};

export default Gallery;

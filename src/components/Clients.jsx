import React from "react";
import ComponentLayout from "../layout/ComponentLayout";
import i1 from "../assets/images/clients/i1.svg";
import i2 from "../assets/images/clients/i2.svg";
import i3 from "../assets/images/clients/i3.svg";
import i4 from "../assets/images/clients/i4.svg";
import i5 from "../assets/images/clients/i5.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";

const Clients = () => {
	const sliderData = [i1, i2, i3, i4, i5];

	return (
		<ComponentLayout parentClass="clients_container">
			<h1 className="color1 text-center fw-bold">Our Clients</h1>
			<br />

			<Swiper
				slidesPerView={5}
				pagination={true}
				navigation={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Navigation, Autoplay, Pagination]}
				className="mySwiper"
			>
				{sliderData.map((content, i) => {
					return (
						<SwiperSlide key={i}>
							<div className={`${i === 2 && "pt-4"} swiper_card`}>
								<img className="w-100" src={content} alt="" />
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</ComponentLayout>
	);
};

export default Clients;

import React from "react";
import i1 from "../assets/images/heroSlider/i1.svg";
import i2 from "../assets/images/heroSlider/i2.svg";
import i3 from "../assets/images/heroSlider/i3.svg";
import i4 from "../assets/images/heroSlider/i4.svg";
import i5 from "../assets/images/heroSlider/i5.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";

const Hero = () => {
	const sliderData = [i1, i2, i3, i4, i5];

	return (
		<div className="hero_Container">
			<Swiper
				pagination={{
					clickable: true,
				}}
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
							<img className="w-100" src={content} alt="" />
						</SwiperSlide>
					);
				})}
			</Swiper>

			<h1 className="text-white text-center display-1 fw600">
				Welcome To <span className="color1"> Water Proofing </span> Services
			</h1>
		</div>
	);
};

export default Hero;

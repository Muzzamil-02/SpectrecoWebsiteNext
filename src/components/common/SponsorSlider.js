"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import "./Maincss.css"
import Image from 'next/image';


const SponsorSlider = ({ components }) => (
  <div style={{ padding: "20px", borderRadius: "10px", marginTop: "40px", marginBottom: "40px" }}>
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={4}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 6, spaceBetween: 30 },
        1440: { slidesPerView: 6, spaceBetween: 20 },
      }}
      style={{
        paddingLeft: "50px"
      }}
    >
      {components.map((card, index) => (
        <SwiperSlide key={index} style={{ margin: 0 }}>
          <div style={{ with:"150px", height:"150px" }}>
            <Image src={card} alt="" fill />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
);

export default SponsorSlider;
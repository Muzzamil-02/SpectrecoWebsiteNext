"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import "./Maincss.css"


const SponsorSlider = ({components,heading}) => {
   
      console.log("title",components)

      return (
        <div style={{ padding: "20px", borderRadius: "10px",marginTop:"40px",marginBottom:"40px" }}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4} // Adjust for responsiveness
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 }, // For small screens
          640: { slidesPerView: 2, spaceBetween: 20 }, // For tablets
          1024: { slidesPerView: 6, spaceBetween: 30 }, // For laptops
          1440: { slidesPerView: 6, spaceBetween: 20 }, // For larger screens
        }}
        style={{
            paddingLeft: "50px"
          }}
      >
        {components.map((card, index) => (
          <SwiperSlide key={index} style={{margin:0}}>
            <div
          
            >
              <img  src={card} alt=""/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
      );
}

export default SponsorSlider;
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import "./Maincss.css"


const Slider = ({components,heading}) => {
   
      console.log("title",components)

      return (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px",marginTop:"40px",marginBottom:"40px" }}>
      <h2 style={{padding:"20px",textAlign:"center"}}>Key <span style={{color: "#bc1823"}}>Stakeholders</span> in the<span > {heading}</span> Landscape</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4} // Adjust for responsiveness
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 }, // For small screens
          640: { slidesPerView: 2, spaceBetween: 20 }, // For tablets
          1024: { slidesPerView: 4, spaceBetween: 30 }, // For laptops
          1440: { slidesPerView: 4, spaceBetween: 20 }, // For larger screens
        }}
        style={{
            paddingLeft: "50px"
          }}
      >
        {components.map((card, index) => (
          <SwiperSlide key={index} style={{margin:0}}>
            <div
              style={{
                minHeight: "220px",
                backgroundColor: "#fff",
                padding: "25px 15px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                textAlign: "left",
                marginRight: `45px`
              }}
            >
              <p style={{ margin: "10px 0" ,fontSize:"20px",color:"#d30c0b" }}>{card.title}</p>
              <p style={{ fontSize: "14px", color: "#555" }}>{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
      );
}

export default Slider;
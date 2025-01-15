"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import "./Maincss.css"
const NewSlider2 = ({components,heading}) => {
  return (
    <div style={{ padding: "20px", borderRadius: "10px",marginTop:"40px",marginBottom:"40px" }}>
    <h5 style={{color:"#d30c0b",textAlign:"center"}}>Enhancing rental yields through energy efficiency improvements and operational cost savings.</h5>
      <h2 style={{ padding: "20px", textAlign: "center" }}>Driving sustainability forward with <span style={{ color: "#bc1823" }}>advisory</span></h2>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Explore our comprehensive array of ESG services for built environment and infrastructure development, crafted to refine risk management strategies, diminish carbon footprint, streamline waste management practices, and foster impactful stakeholder engagement.
      </p>
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
             <img src={card.imageUrl} alt={card.title} style={{ width: "100%", height: "auto", borderRadius: "8px 8px 0 0" }} />
              <h3 style={{ margin: "10px 0" ,fontSize:"20px" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
  )
}

export default NewSlider2
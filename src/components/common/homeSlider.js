"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import "./Maincss.css"
import Image from 'next/image';


const HomeSlider = ({components,heading}) => {
   
      console.log("title",components)

      return (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px",marginTop:"40px",marginBottom:"40px" }}>
            <p style={{textAlign:"center", color:"#bc1823", fontWeight: "200"}}>{components.mainHeading}</p>
            <h2 style={{padding:"20px",textAlign:"center"}}>{components.heading}</h2>
            <p style={{textAlign:"center", fontWeight: "200"}}>{components.subHeading}</p>
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
        {components.component.map((card, index) => (
          <SwiperSlide key={index} style={{margin:0}}>
            <div
              style={{
                minHeight: "300px",
                backgroundColor: "#fff",
                padding: "25px 15px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                textAlign: "left",
                marginRight: `45px`
              }}
            >
                <Image width={100} height={100} src={card.imageURL} alt='Spectreco'/>
              <p style={{ margin: "10px 0" ,fontSize:"1.1rem", fontWeight: "300", color:"#d30c0b", lineHeight:"1.1" }}>{card.title}</p>
              <p style={{ fontSize: "14px", color: "#555" }}>{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
      );
}

export default HomeSlider;
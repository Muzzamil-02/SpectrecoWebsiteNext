import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../Maincss.css"


const Slider = () => {
    const cardsData = [
        {
          title: "Government Agencies",
          description: "Build trust within the community and enable productivity and collective prosperity.",
        },
        {
          title: "Risk Management",
          description: "Identify, manage and mitigate risks for built infrastructure and investment portfolios.",
        },
        {
          title: "Carbon Cleanse",
          description: "Measure, Track, Report & Benchmark Scope 1, 2 & 3 emissions.",
        },
        {
          title: "Carbon Cleanse",
          description: "Measure, Track, Report & Benchmark Scope 1, 2 & 3 emissions.",
        },
        {
          title: "Energy Efficiency",
          description: "Improve energy efficiency across operations and reduce costs.",
        },
        {
          title: "Carbon Cleanse",
          description: "Measure, Track, Report & Benchmark Scope 1, 2 & 3 emissions.",
        },
        {
          title: "Innovation Support",
          description: "Drive innovative solutions for sustainable business growth.",
        },
        {
          title: "Carbon Cleanse",
          description: "Measure, Track, Report & Benchmark Scope 1, 2 & 3 emissions.",
        },
      ];

      return (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px",marginTop:"40px",marginBottom:"40px" }}>
      <h2 style={{padding:"20px"}}>Key <span style={{color: "#bc1823"}}>Stakeholders</span> in the Built Environment Landscape</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={4} // Adjust for responsiveness
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 }, // For small screens
          640: { slidesPerView: 2, spaceBetween: 20 }, // For tablets
          1024: { slidesPerView: 3, spaceBetween: 30 }, // For laptops
          1440: { slidesPerView: 4, spaceBetween: 40 }, // For larger screens
        }}
        style={{
            paddingLeft: "50px"
          }}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index} style={{margin:0}}>
            <div
              style={{
                minHeight: "250px",
                backgroundColor: "#fff",
                padding: "25px 15px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                textAlign: "left",
                marginRight: `45px`
              }}
            >
              <h3 style={{ margin: "10px 0" ,fontSize:"20px" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Learn More
      </button>
    </div>
      );
}

export default Slider;
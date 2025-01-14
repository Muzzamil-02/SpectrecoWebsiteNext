import React from "react";

import "../Maincss.css"


const DrivingValue = () => {
    const cardsData = [
        {
          title: "Planning and Development",
          description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
          logoURL: "../images/Driving-Value/icon1.svg",
        },
        {
          title: "Planning and Development",
          description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
          logoURL: "../images/Driving-Value/icon1.svg",
        },
        {
          title: "Planning and Development",
          description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
          logoURL: "../images/Driving-Value/icon1.svg",
        },
        {
          title: "Planning and Development",
          description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
          logoURL: "../images/Driving-Value/icon1.svg",
        },
        {
          title: "Planning and Development",
          description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
          logoURL: "../images/Driving-Value/icon1.svg",
        },
        {
          title: "Planning and Development",
          description: " Conduct comprehensive environmental impact assessments to identify potential ecological risks and opportunities.",
          logoURL: "../images/Driving-Value/icon1.svg",
        },
       
        
       
      ];

      return (
        <div style={{ padding: "20px", borderRadius: "10px", marginTop:"40px", marginBottom:"40px" }}>
             <div className="grid-container">
        {cardsData.map((card, index) => (
                <div className="flexible-flex">
                    <img height={80} width={80} src={card.logoURL} alt="Icon"/>
                    <div className="flexible-text-card">
                        <p className="title" style={{margin: "0px"}}>
                            {card.title}
                        </p>
                        <p className="description">
                            {card.description}
                        </p>
                    </div>
                </div>
        ))}
        </div>

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

export default DrivingValue;
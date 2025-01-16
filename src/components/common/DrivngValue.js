import React from "react";
import Image from "next/image";
import "./Maincss.css";

const DrivingValue = ({ cardsData }) => {
  return (
    <div style={{ padding: "20px", borderRadius: "10px", marginTop: "40px", marginBottom: "40px" }}>
      <div className="grid-container">
        {cardsData.map((card, index) => (
          <div className="flexible-flex" key={index}>
            <Image height={80} width={80} src={card.logoURL} alt="Icon" />
            <div className="flexible-text-card">
              <p className="title" style={{ margin: "0px" }}>{card.title}</p>
              <p className="description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrivingValue;

import React from 'react';
import { Container } from 'react-bootstrap';
import './Maincss.css';
 
const SustainableReporting = ({ isContainer = true, heading, text, imageUrl }) => {
  const content = (
    <div className="align-items-start row with-border sustainable-container" >
      {/* Left Text Container */}
      <div className="text col-md-6" style={{ backgroundColor: "rgb(239, 239, 239)", fontFamily: "'Poppins', Sans-serif", padding: "75px", height: "100%", borderRadius: "0 50px 50px 0 " }}>
        <h3 style={{ color: "rgb(211, 12, 11)", fontSize: "1.15rem", fontWeight: "300" }} >
          {heading}
        </h3>
        <h1 className="main-heading" style={{fontSize:"2.5rem"}}>Sustainable Reporting Simplified</h1>
        <p className="description" style={{ fontSize: "18px" , color: "#000" }}>
         {text}
        </p>
      </div>
 
      {/* Right Image Container */}
      <div className="image col-md-6" style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "1", height: "100%" }}>
        <img
          alt="Sustainable Reporting"
          className="img-fluid"
          src={imageUrl}
          style={{
            width: "auto",
            maxWidth: "100%",
            height: "100%", /* Ensures the image takes the full height of the container */
            objectFit: "contian" /* Ensures the image fills the container properly */
          }}
        />
      </div>
    </div>
  );
 
  return isContainer ? <Container fluid className="p-5" style={{ height: "100vh" }}>{content}</Container> : content;
};
 
export default SustainableReporting;
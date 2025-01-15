import React from "react";

import "./Maincss.css"


const Phases = ({cardsData}) => {


       
      

      return (
        <div style={{ padding: "20px", borderRadius: "10px",marginTop:"40px",marginBottom:"40px" }}>
      <h2 style={{padding:"20px",textAlign:"center"}}>Key  Sustainability Integration Across All Industry <span style={{color: "#bc1823"}}>Phases</span></h2>
        {cardsData?.map((card, index) => (
            <div className="grid-container-sm-left">

                <div className="left-panel image">
                    <div className="vertical-line"></div>
                    <img src={card.imageURL} alt="ESG Dashboard"  style={{height: "min-content",}} />
                </div>

                <div className="right-panel">
                    <p className="title">
                        {card.title}
                    </p>
                    <ul>
  {card.content.map((listItem, index) => (
    <li key={index}>  {/* Add key here */}
      <p>{listItem.subtitle} {listItem.description}</p>
    </li>
  ))}
</ul>

                </div>
            </div>

        ))}
      
    </div>
      );


}

export default Phases;
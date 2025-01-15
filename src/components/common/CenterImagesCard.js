import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Maincss.css';
import Image from 'next/image';

const CenterImagesCard = ({ isContainer, data, }) => {
    const content = (
        <Row >
            <Col md={4} style={{alignItems: "center", justifyContent:"center"}}>
                <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
                    <Image width={70} height={70} src={data.tech1.imageURL} alt='img'></Image>
                </div>
                <h4  style={ {fontSize:"1.5rem",fontWeight:"400",color:"#000", textAlign: "center", }}>{data.tech1.heading}</h4>
                <p className="desc-text text-center" >
                    {data.tech1.description}
                </p>
            </Col>
                <Col md={4} style={{alignItems: "center"}}>
                <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>

                <Image width={70} height={70} src = {data.tech2.imageURL} alt='img'/> 
                </div>
                <h1  style={ {fontSize:"1.5rem",fontWeight:"400",color:"#000", textAlign: "center",  }}>{data.tech2.heading}</h1>
                <p className="desc-text text-center" >
                {data.tech2.description}
                </p>
            </Col>
                <Col md={4} style={{alignItems: "center"}}>
                <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>

                <Image width={70} height={70} src={data.tech3.imageURL}  alt='img'/>
                </div>
                <h1 style={ {fontSize:"1.5rem",fontWeight:"400",color:"#000", textAlign: "center", }}>{data.tech3.heading}</h1>
                <p className="desc-text text-center" >
                {data.tech3.description}
                </p>
            </Col>
        
        
        </Row>
      );
    
      return isContainer ? <Container fluid className="p-5">{content}</Container> : content;
    };

export default CenterImagesCard
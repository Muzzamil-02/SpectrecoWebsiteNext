import React from 'react'
import Footer from '@/components/common/Footer'
import data from "@/lib/constant/resources.json";
import { Col, Container, Row, Button } from 'react-bootstrap'
import Image from 'next/image';

const page = () => {
  const { Section1, Section2, Section3, Section4 } = data.resources;
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <h1 >{Section1.Heading}</h1>
            <p>{Section1.Text}</p>
          </Col>
          <Col sm={4}><img width="100%" src={Section1.image} alt="" /></Col>
        </Row>
        <Row className="py-5">
          {Section2.map((item, index) => (<Col key={index} sm={6} md={3} lg={4} className="text-start pt-5">
            {/* <div className='relative' style={{height:"100%" , width:"100%"}}> */}
            <Image src={item.img} alt="" height={500} width={350} style={{ objectFit: "cover",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} />
            {/* </div> */}
            <p style={{ color: '#d30c0b' , marginTop:"30px" , fontSize:"14px" }}>{item.title1}</p>
            <h3 style={{fontSize:"20px"}}>
              {item.Heading}
            </h3>
            <p style={{ color: "gray" , fontSize:"16px" }}>
              {item.text1}
            </p>
            <p style={{fontSize:"13px"}}>
              {item.text2}
            </p>
            <Button  size="lg" style={{ fontSize: "16px" , backgroundColor:"#d30c0b" , border:"none" }}>
              {item.btn}
            </Button>
          </Col>))}

        </Row>
        {/* <Row>
          <Col sm={4}><img width="100%" src={Section3.img} alt="" /></Col>
          <Col sm={5}>
            <p style={{ color: 'red', fontWeight: 'bold' }}>{Section3.title}</p>
            <h3>
              {Section3.Heading}
            </h3>
            <p style={{ color: "gray" }}>
              {Section3.text1}
            </p>
            <p>
              {Section3.text2}
            </p>
            <Button variant="danger" size="lg">
              {Section3.btn}
            </Button>
          </Col>
        </Row> */}
        {/* <Row className=" py-5">
          <Col sm={6} md={3} lg={4} className="text-start">
            <p style={{ color: 'red', fontWeight: 'bold' }}>{Section4.title}</p>
            <h3>
              {Section4.Heading}
            </h3>
            <p style={{ color: "gray" }}>
              {Section4.text1}
            </p>
            <p>
              {Section4.text2}
            </p>
            <Button variant="danger" size="lg">
              {Section4.btn}
            </Button>
          </Col>
        </Row> */}
      </Container>
    </>
  )
}

export default page
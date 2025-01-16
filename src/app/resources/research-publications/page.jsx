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
            <h1>{Section1.Heading}</h1>
            <p>{Section1.Text}</p>
          </Col>
          <Col sm={4} style={{ position: 'relative' }}>
      <Image
        src={Section1.image}
        alt={Section1.Heading || "Image"}
        layout="responsive"
        width={100}
        height={75}
        style={{ objectFit: 'cover' }}
        priority
      />
    </Col>
        </Row>
        <Row className="py-5">
          {Section2.map((item, index) => (<Col key={index} sm={6} md={3} lg={4} className="text-start pt-5">
            <p style={{ color: 'red', fontWeight: 'bold' }}>{item.title}</p>
            <h3>
              {item.Heading}
            </h3>
            <p style={{ color: "gray" }}>
              {item.text1}
            </p>
            <p>
              {item.text2}
            </p>
            <Button variant="danger" size="lg">
              {item.btn}
            </Button>
          </Col>))}

        </Row>
        <Row>
        <Col sm={4} style={{ position: 'relative' }}>
      <Image
        src={Section3.img}
        alt={Section3.Heading || "Image"}
        layout="responsive"
        width={100}
        height={75}
        style={{ objectFit: 'cover' }}
        priority
      />
    </Col>
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
        </Row>
        <Row className=" py-5">
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
        </Row>
      </Container>
    </>
  )
}

export default page
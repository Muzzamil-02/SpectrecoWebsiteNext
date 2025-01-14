import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const teamData = [
  {
    name: "Adam Lloyd",
    title: "Chairman & Partner",
    image: "./images/adam.jpg", // Replace with the actual image URL
    linkedIn: "#", // Replace with the LinkedIn URL
  },
  {
    name: "Aftab Adamjee",
    title: "Partner",
    image: "./images/aftab.jpg",
    linkedIn: "#",
  },
  {
    name: "Andrew Brewer",
    title: "CFO & Partner",
    image: "./images/andrew.jpg",
    linkedIn: "#",
  },
  {
    name: "Faraz Khan MBE",
    title: "CEO & Partner",
    image: "./images/faraz.jpg",
    linkedIn: "#",
  },
  {
    name: "Jed Linsider",
    title: "Partner",
    image: "./images/jed.jpg",
    linkedIn: "#",
  },
  {
    name: "Qudsia Sajjeed",
    title: "Partner",
    image: "./images/qudsia.jpg",
    linkedIn: "#",
  },
  {
    name: "Sajjeed Aslam",
    title: "CTO & Partner",
    image: "./images/sajjeed.jpg",
    linkedIn: "#",
  },
  {
    name: "Shaista Ayesha",
    title: "Partner",
    image: "./images/shaista.jpg",
    linkedIn: "#",
  },
];

const TeamSection = () => {
    return (
        <Container className="my-5">
          <Row>
            {teamData.map((member, index) => (
              <Col md={3} sm={6} xs={12} key={index} className="mb-4">
                <Card className="textalign-left border-0">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    style={{
                      borderRadius: "8px",
                     
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body className="px-0">
                    <Card.Title
                      style={{
                        fontSize: "16px",
                        marginBottom: "4px",
                        fontWeight: "bold",
                        
                      }}
                    >
                      {member.name}
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "red",
                          fontSize: "18px",
                          textDecoration: "none",
                          marginLeft: "105px",
                        }}
                      >
                        in
                      </a>
                    </Card.Title>
                    <Card.Text style={{ fontSize: "14px", color: "#777" }}>
                      {member.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
};

export default TeamSection;

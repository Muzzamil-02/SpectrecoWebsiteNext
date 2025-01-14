import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const NewsInsights = () => {
  const articles = [
    {
      category: "Community Blog",
      title: "The Importance of Climate Disclosures: Understanding...",
      description:
        "Being familiar with climate change and its impact on businesses is more important...",
      date: "December 25, 2024",
      image: "./images/SEC-and-PCAF-Guidelines.png"
    },
    {
      category: "Community Blog",
      title: "The Benefits of Real-Time Reporting for IFRS S1 and S2...",
      description:
        "In the current scenario, sustainability and climate-related disclosures are becoming...",
      date: "December 25, 2024",
      image: "./images/IFRS-S1-and-S2-Compliance.png"
    },
    {
      category: "Uncategorized",
      title: "Understanding CSRD: Key Changes and Implications for...",
      description:
        "What is the CSRD? The Corporate Sustainability Reporting Directive (CSRD)...",
      date: "December 24, 2024",
      image: "./images/Key-Changes-and-Implications-for-Businesses.png"
    },
    {
      category: "Community Blog",
      title: "How to Prepare for SEC and PCAF Climate Disclosure...",
      description:
        "Compliance with the SEC and PCAF frameworks is essential for transparent...",
      date: "December 17, 2024",
      image: "./images/SEC-and-PCAF-1.jpg"
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center">
        News <span style={{ color: "red" }}> & Insights</span>
      </h2>
      <p className="text-center mb-5">
        Stay up to date with the recent happenings in the ecosystem.
      </p>
      <Row>
        {articles.map((article, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={article.image}
                style={{ borderRadius: "10px" }}
              />
              <Card.Body>
                <Card.Subtitle className="mb-2  textalign-left">
                  {article.category.toUpperCase()}
                </Card.Subtitle>
                <Card.Title style={{ color: "#d30c0b", fontSize: "16px" }} className="textalign-left">
                  <a>{article.title}</a>
                </Card.Title>
                <Card.Text style={{ fontSize: "14px" }} className="textalign-left">
                  {article.description}
                </Card.Text>
                <Card.Text className="textalign-left">
                  <small className="text-muted">{article.date}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="danger" style={{ borderRadius: "5px" }}>
          Learn More
        </Button>
      </div>
    </Container>
  );
};

export default NewsInsights;

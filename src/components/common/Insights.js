"use client";
import React from "react";
import Image from "next/image";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Insights = ({ data, showReadMore }) => {
  if (!data || !data.section1) {
    return <p>No data available.</p>;
  }

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4" style={{ fontSize: "32px" }}>
        {data.section1.title}
      </h2>

      <Row className="justify-content-start g-4">
        {data.section1.articles.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card className="h-100 shadow-sm border-0">
              <div style={{ height: "180px", overflow: "hidden" }}>
                 <Image
                        src={item.image}
                        alt={item.title || "Image"}
                        layout="responsive"
                        width={100}
                        height={75}
                        style={{ objectFit: 'cover' }}
                        priority
                      />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: "18px" }}>
                  {item.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    marginTop: "auto",
                    marginBottom: "8px",
                  }}
                >
                  {item.description}
                </Card.Text>
                <div className="d-flex align-items-center gap-1">
                  <a
                    href={item.categoryLink}
                    className="text-uppercase fw-bold"
                    style={{
                      fontSize: "12px",
                      color: "rgb(201, 86, 76)",
                      textDecoration: "none",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#e7685d")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#c9564c")
                    }
                  >
                    {item.category}
                  </a>
                  <span style={{ color: "#888" }}>-</span>
                  <p
                    className="mb-0"
                    style={{ fontSize: "12px", color: "#AAAAAA" }}
                  >
                    {item.date}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {showReadMore && (
        <div className="text-center mt-4">
          <Button
            variant="danger"
            style={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "15px",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#e7685d")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#d30c0b")
            }
          >
            READ MORE
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Insights;

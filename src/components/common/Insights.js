"use client";

import React from "react";
import insightsData from "@/lib/constant/insights.json";

const Insights = () => {
  return (
    <div style={{ textAlign: "left", padding: "20px", margin: "0 0 10px" }}>
      <h2
        style={{ fontSize: "32px", marginBottom: "30px", textAlign: "center" }}
      >
        {insightsData.section1.title}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        {insightsData.section1.articles.map((item, index) => (
          <div
            key={index}
            style={{
              width: "360px",
              border: "1px solid #ccc",
              display: "flex",
              flexDirection: "column",
              height: "auto",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            {/* IMAGE FIRST */}
            <div style={{ height: "180px", overflow: "hidden" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* CONTENT */}
            {/* <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}> */}
            <div
              style={{
                padding: "15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 style={{ fontSize: "18px", margin: "10px 0" }}>
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  margintop: "auto",
                  marginBottom: "8px", // Adjust spacing between description and category
                }}
              >
                {item.description}
              </p>

              {/* CATEGORY AND DATE INLINE */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <a
                  href={item.categoryLink}
                  style={{
                    fontSize: "12px",
                    color: "rgb(201, 86, 76)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#e7685d")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#c9564c")
                  }
                >
                  {item.category}
                </a>

                <span style={{ color: "#888" }}>-</span>

                <p style={{ fontSize: "12px", color: "#AAAAAA", margin: 0 }}>
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a
          href="#"
          style={{
            padding: "10px 20px",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            letterSpacing: "1px",
            display: "inline-block",
            color: "#fff",
            backgroundColor: "#d30c0b",
            fontSize: "15px",
            margin: "0 0 40px",
            textDecoration: "none",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#e7685d")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#d30c0b")
          }
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default Insights;

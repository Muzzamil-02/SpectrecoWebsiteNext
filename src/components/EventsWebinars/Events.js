import React from 'react';
import Image from 'next/image';
import data from "@/lib/constant/eventsWebinar.json";
const Events = () => {
    return (
        <div style={{padding: "20px 5%"}}>
            <h1 style={{ fontWeight:600 }}>Events & Webinars</h1>
            <p style={{ fontWeight:"1rem" }}>
                Stay ahead with Spectreco’s expert-led webinars and industry events, designed to help businesses, investors, and government bodies navigate the evolving ESG landscape. Our events provide in-depth insights into global sustainability regulations, reporting standards, and the latest trends in environmental, social, and governance (ESG) compliance.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {data.map((webinar, index) => (
                    <div key={index} style={{ padding: '20px' }}>
                        <a href={webinar.videoLink} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={webinar.image}
                                alt={webinar.title}
                                width={341}
                                height={192}
                                style={{ objectFit: 'cover', boxShadow: "4px 6px 14px 4px rgba(0, 0, 0, .2)" }}
                            />
                        </a>
                        <p style={{
                            color: "#d30c0b",
                            fontSize: "14px",
                            textTransform: "uppercase",
                            margin: "0 0 10px",
                            marginTop: "20px"
                        }}>Past Webinar</p>
                        <h3 style={{ marginBottom: '10px', fontSize: "20px", fontWeight: 400, lineHeight: "30px" }}>{webinar.title}</h3>
                        <p style={{ marginBottom: '10px', fontSize: "16px", lineHeight: "26px" }}>{webinar.subtitle}</p>
                        <a href={webinar.videoLink}  style={{ backgroundColor: '#D30C0B', color: "#FFFFFF", fontSize: "16px", fontWeight: 300, fill: "#FFFFFF", borderRadius: "5px 5px 5px 5px", padding: "7px 30px",display:"inline-block",textDecoration:"none" }}>
                            Watch Recording
                        </a>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Events;



const webinars = [
    {
        title: 'Exploring Correlation',
        subtitle: 'Case Studies: ASEAN, Middle East',
        videoLink: "https://www.youtube.com/watch?v=zDNIGYOSJbE",
        image: 'https://spectreco.com/wp-content/uploads/2024/10/event7.jpg',
    },
    {
        title: 'FDI, Carbon Credits',
        subtitle: 'Evolving Regulations, Exports',
        videoLink: 'https://www.youtube.com/watch?v=dHzenR9bqDc',
        image: "https://spectreco.com/wp-content/uploads/2024/10/event1.jpg"
    },
    {
        title: 'Green Financial Instruments',
        subtitle: 'Financial Services in Transition',
        videoLink: 'https://www.youtube.com/watch?v=OxuOmRCsOn8',
        image: "https://spectreco.com/wp-content/uploads/2025/01/1-1.jpg"
    },
    {
        title: 'IFRS S1 & S2 Compliance',
        subtitle: 'Streamlining ESG Reporting for Real Estate and Finance in Saudi Arabia',
        videoLink: 'https://www.youtube.com/watch?v=-RXnpujZf_0',
        image: "https://spectreco.com/wp-content/uploads/2025/01/3-1.jpg"
    },
    {
        title: 'Nature-Based Solutions for Climate Mitigation',
        subtitle: 'Financial Pathways and Global Impact',
        videoLink: 'https://www.youtube.com/watch?v=-lwP2tYAY-o',
        image: 'https://spectreco.com/wp-content/uploads/2025/01/6-1.jpg',
    },
    {
        title: 'Navigating ESG and Compliance in Real Estate',
        subtitle: 'Pathways, Risks, and Rewards',
        videoLink: 'https://www.youtube.com/watch?v=ETZkmR0bjkU',
        image: "https://spectreco.com/wp-content/uploads/2025/01/5-1.jpg",
    },
    {
        title: 'SEC Climate Disclosures',
        subtitle: 'Navigating Reporting & Data Management for Real Estate & Asset Management',
        videoLink: "https://www.youtube.com/watch?v=qFdZ2Qp6Z0c",
        image: 'https://spectreco.com/wp-content/uploads/2025/01/2-1.jpg',
    }
];
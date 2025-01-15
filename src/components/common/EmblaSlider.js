"use client";
import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmblaSlider = () => {


  const slides = [
    {
      title: 'Government Agencies',
      description:
        'Play a central role in infrastructure development by overseeing planning, funding, and regulation.'
    },
    {
      title: 'Private Sector Contractors',
      description:
        'Construction, engineering, project management firms involved in designing, building, and maintaining infrastructure projects.'
    },
    {
      title: 'Investors and Financial Institutions',
      description:
        'Provide funding and financing solutions for infrastructure projects, including equity investors, banks, and institutional lenders.'
    },
    {
      title: 'End Users and Residents',
      description:
        'Benefit directly from infrastructure services and amenities, such as transportation networks, utilities, and public facilities.'
    },
    {
        title: 'End Users and Residents',
        description:
          'Benefit directly from infrastructure services and amenities, such as transportation networks, utilities, and public facilities.'
      },
      {
        title: 'End Users and Residents',
        description:
          'Benefit directly from infrastructure services and amenities, such as transportation networks, utilities, and public facilities.'
      },
      {
        title: 'End Users and Residents',
        description:
          'Benefit directly from infrastructure services and amenities, such as transportation networks, utilities, and public facilities.'
      }

  ];
  const groupedSlides = [slides];

  return (
    <div style={{ padding: '40px', backgroundColor: '#f2f2f2', textAlign: 'center' }}>
    <Carousel indicators={true} interval={null} nextLabel="›" prevLabel="‹">
      {groupedSlides.map((group, idx) => (
        <Carousel.Item key={idx}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {group.map((slide, index) => (
              <div key={index} style={{ width: '55%', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ color: '#e63946' }}>{slide.title}</h3>
                <p style={{ color: '#333' }}>{slide.description}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  );
};

export default EmblaSlider;

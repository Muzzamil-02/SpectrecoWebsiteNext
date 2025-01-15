'use client'
import React, { useState, useEffect } from 'react';
import data from '@/lib/constant/advisoryData.json';

const Strategies = () => {

  return (
      <div className="container p-5">
        <h2 className="title text-center" style={{color: "#D30C0B"}}>Guiding Sustainable Strategies</h2>
        <div className="row">
          {data.map((feature, index) => (
            <div key={index} className="col-md-4 text-center py-4">
              <div className="fbox-6 fb-1">
                <div className="fbox-5-img">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="fbox-txt">
                  <h6>{feature.title}</h6>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Strategies;
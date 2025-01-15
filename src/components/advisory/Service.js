import React from 'react';

const Service = ({ imagePosition, data }) => {
  return (
      <div className="container py-5 d-block d-sm-flex" style={{  flexDirection:imagePosition === 'left' ? ' row-reverse' : 'row' }}>
          <div style={{ width: "50%" , alignItems: imagePosition === 'left' ? 'end' : 'start'  }} className='d-flex flex-column gap-3' >   
             <div>
             <i className={`fa-solid ${data.icon}`} style={{ color: "#D30C0B" }}></i>
              </div>
              <h3 className='fs-4'>{data.title}</h3>
              <h1 style={{fontSize:"36px" , width:"70%"}} >{data.description}</h1>
              <div className={imagePosition === 'left' ? 'offerleft' : 'offerright'}>
                  {data.service.map((item, index) => (
                      <ul key={index} >
                          <li>{item}</li>
                      </ul>
                  ))}
              </div>
          </div>
          <div style={{ width: "50%" }}>
              <img src={data.image} alt="Risk Opportunity" className='service-img'/>
          </div>
      </div>
  );
};

export default Service;
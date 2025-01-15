import React from 'react';

const data = {
  title: "Sprint Centric Delivery Model",
  description: "Revolutionize your sustainability strategy with Spectreco's Sprint Centric Delivery Model, combining agility and precision to achieve impactful results quickly. Our approach empowers businesses, investors, industries, and governments with tailored ESG advisory services, helping them navigate risks and opportunities while driving sustainable growth. By incorporating transition finance and green capital, we deliver tailored, comprehensive ESG advisory services that drive meaningful change. We navigate regulations, standards, and frameworks, focusing on built infrastructure for holistic, resilient sustainability solutions",
  steps: [
    { id: 1, title: "Purpose, Goals & Business Case" },
    { id: 2, title: "Benchmark, Intervene & Track" },
    { id: 3, title: "Data, Technology & Reporting" },
    { id: 4, title: "Advocate, Engage & Communicate" },
    { id: 5, title: "Repeat, Scale Or Sustain" }
  ]
};

const SprintModal = () => {
    return (
        <div className="container p-5 mb-5" style={{ backgroundColor: "#EFEFEF", borderRadius: "50px" }} >
            <h2 className="text-center" style={{ color: "#D30C0B" }}>{data.title}</h2>
            <p className="description text-center">{data.description}</p>
            <div className="row">
                {data.steps.map((step, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 text-center mb-4">
                        <div className="bg-white rounded position-relative" style={{borderRadius: "20px !important",   padding: "100px 30px 30px"}}>
                            <h5 className="Sprint-modal-item mb-0">{step.id}</h5>
                            <p >{step.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default SprintModal;
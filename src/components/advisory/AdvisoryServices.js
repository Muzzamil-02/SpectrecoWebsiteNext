import React from 'react';
import Service from './Service';

const AdvisoryServices = () => {
  return (
      <div>
          <div className='mb-5'>
              <h1 className="title text-center">Advisory Services We Offer</h1>
              <div className='Advisory-Service-divider '></div>
          </div>
          <Service imagePosition="right" data={data} />
          <Service imagePosition="left" data={Carbondata} />
          <Service imagePosition="right" data={WasteData} />
          <Service imagePosition="left" data={ChainData} />
          <Service imagePosition="right" data={CommunityData} />
          <Service imagePosition="left" data={GovernanceData} />
          <Service imagePosition="right" data={CommunicationData} />
          <Service imagePosition="left" data={ReportingData} />
          {/* <Service imagePosition="right" imageData={imageData} /> */}
      </div>
  );
};
export default AdvisoryServices;


const data = {
    icon:"fa-triangle-exclamation",
    title: "Risk & Opportunity",
    image: 'https://spectreco.com/wp-content/uploads/2024/05/Risk-Opp-2.png',
    description:"Navigate ESG-aligned risks and opportunities for resilient, sustainable growth with our Advisory service",
    service:["Assess, manage, and mitigate risks.","Build climate resilience and future-proof investments."]
}
const Carbondata = {
    icon:"fa-database",
    title: "Carbon Cleanse",
    image: 'https://spectreco.com/wp-content/uploads/2024/05/Carbon-Cleanse-1.png',
    description:"Streamline emission measurement and achieve a successful transition to net zero",
    service:["Emission measurement.","Net zero transition."]
}
const WasteData = {
    icon:"fa-dumpster-fire",
    title: "Waste Management",
    image: 'https://spectreco.com/wp-content/uploads/2024/05/Waste-Management-1.png',
    description:"Maximize efficiency and profitability through solutions with a focus on circularity",
    service:["Recycle, reuse, & repair.","Reduce waste."]
}
const ChainData = {
    icon:"fa-triangle-exclamation",
    title: "Sustainable Supply Chain",
    image: 'https://spectreco.com/wp-content/uploads/2024/05/Sustainable-Supply-Chain-1.png',
    description:"Optimize supply chain sustainability with tailored ESG advisory and business advisory services",
    service:["Measure emissions along Scope 1, 2, & 3.","Achieve net zero transition."]
}
const CommunityData = {
    icon:"fa-people-group",
    title: "Community Impact",
    image: 'https://spectreco.com/wp-content/uploads/2024/05/Workers-Communities-1.png',
    description:"Foster growth and prosperity through community centric initiatives and employee engagement",
    service:["Collective prosperity","Community engagement"]
}
const GovernanceData = {
    icon:"fa-building-columns",
    title: "Governance & Oversight",
    image: 'https://spectreco.com/wp-content/uploads/2024/05/Governance-Oversight-1.png',
    description:"Promote transparency and accountability through compliance and ethical governance practices",
    service:["Regulatory compliance","Ethical governance"]
}
const CommunicationData = {
    icon:"fa-comments",
    title: "Communication & Engagement",
    image: 'https://spectreco.com/wp-content/uploads/2024/05/Comms-Engagement-1.png',
    description:"Strengthen stakeholder relationships for sustainable growth through effective communication & engagement",
    service:["Stakeholder collaboration","Advocacy and mobilization"]
}
const ReportingData = {
    icon:"fa-newspaper",
    title: "Reporting & Disclosures",
    image: 'https://spectreco.com/wp-content/uploads/2024/05/Reporting-Disclosures-1.png',
    description:"Enhance transparency and accountability through comprehensive reporting and disclosure practices",
    service:["Regulatory compliance","Stakeholder demand"]
}
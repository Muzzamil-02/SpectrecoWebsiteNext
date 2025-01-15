import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import data from "@/lib/constant/data.json";
import TopSection from "@/components/common/TopSection";
import CenterHeadingPara from '@/components/common/CenterHeadingPara';
import React from 'react'
import SustainableReporting from '@/components/common/SustainableReporting';
import ServiceCard from '@/components/common/ServiceCard';

const page = () => {
  const homeData = data.home;
  return (
    <div>
      <Navbar/>
        <section className='default-padding'>
          <TopSection imagePosition={"right"} isContainer={false} componentText={homeData.Section1}/>
        </section>
        <section className='default-padding'>
          <CenterHeadingPara data={homeData.Section2}/>
        </section>
        <section style={{padding: 0}}>
          <SustainableReporting isContainer={false} data={homeData.Section3} />
        </section>
        <section className='default-padding'>
          <CenterHeadingPara data={homeData.Section4} hasTitle={true} underlineHeader={false}/>
        </section>
        <section>
          <ServiceCard />
        </section>
      <Footer/>
    </div>

  )
}

export default page
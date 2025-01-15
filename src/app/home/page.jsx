import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import data from "@/lib/constant/home.json";
import TopSection from "@/components/common/TopSection";
import CenterHeadingPara from '@/components/common/CenterHeadingPara';
import React from 'react'
import SustainableReporting from '@/components/common/SustainableReporting';
import ServiceCard from '@/components/common/ServiceCard';
import IndustrySection from '@/components/common/IndustrySection';
import CenterImagesCard from '@/components/common/CenterImagesCard';

const page = () => {
  const homeData = data.home;
  return (
    <div >
      <Navbar/>
      <div style={{maxWidth: "1440px", margin: "auto"}}>
        <section className='default-padding'>
          <TopSection imagePosition={"right"} isContainer={false} componentText={homeData.Section1}/>
        </section>
        <section className='default-padding'>
          <CenterHeadingPara data={homeData.Section2}/>
        </section>
        <section style={{padding: 0}}>
          <SustainableReporting isContainer={false} heading={homeData.Section3.Heading} text={ homeData.Section3.Text} imageUrl={homeData.Section3.imageSrc}/>
        </section>
        <section className='default-padding'>
          <CenterHeadingPara data={homeData.Section4} hasTitle={true} underlineHeader={false}/>
        </section>
        <section>
          <ServiceCard />
        </section>
        <section className='default-padding'>
          <IndustrySection data={homeData.Section5} />
        </section>
        <section className='default-padding'>
          <CenterHeadingPara data={homeData.Section6} hasTitle={true} underlineHeader={false}/>
        </section>
        <section className='default-padding'>
          <CenterImagesCard data={homeData.Section7} />
        </section>
        </div>
      <Footer/>
    </div>

  )
}

export default page
import FirstComponent from '@/components/common/FirstComponent'
import Navbar from '@/components/common/Navbar'
import React from 'react'
import data from "@/lib/constant/data.json"
import Footer from '@/components/common/Footer'
import IndustryCenterDescription from '@/components/common/IndustryCenterDescription'
import IndustryImage from '@/components/common/IndustryImage'
import IndustryKeyComp from '@/components/common/IndustryKeyComp'

import Phases from '@/components/common/phases'
import { DragControls } from 'framer-motion'
import DrivingValue from '@/components/common/DrivngValue'
import IndustryImage2 from '@/components/common/IndustryImage2'
import StartConversation from '@/components/common/StartConversation'
import TickerComponent from '@/components/common/ticker'
import IndustryLeftImage from '@/components/common/IndustryLeftImage'
import CenterText from '@/components/common/CenterText'
import SustainableReporting from '@/components/common/SustainableReporting'
const page = () => {
  return (
    <>
    <Navbar/>
      <FirstComponent       title={data.agriculturepage.section1.title}
      highlightedText={data.agriculturepage.section1.highlightedText}
      description={data.agriculturepage.section1.description}
      buttonText={data.agriculturepage.section1.buttonText}
      imageUrl={data.agriculturepage.section1.imageUrl}
        title2={data.agriculturepage.section1.title2}
      />
      <IndustryCenterDescription heading={data.agriculturepage.section2.heading}
        description={data.agriculturepage.section2.description}
      />
      <IndustryImage  imageUrl={data.agriculturepage.section3.imageUrl}/>
      <IndustryKeyComp heading={data.agriculturepage.section4.heading}
      components={data.agriculturepage.section4.components}
      />
      {/* <Slider/> */}
      <Phases cardsData={data.agriculturepage.section5.component}/>
      <IndustryCenterDescription heading={data.agriculturepage.section6.heading}
        description={data.agriculturepage.section6.description}
      />
      <DrivingValue cardsData={data.agriculturepage.section7.component}/>
     
      <IndustryImage2  imageUrl={data.agriculturepage.section8.imageUrl}/>
      
      <CenterText isContainer={true}
        heading={data.agriculturepage.section9.heading}
      
      description={data.agriculturepage.section9.description}
     
      imageUrl={data.agriculturepage.section9.imageUrl}
      />
      <SustainableReporting heading={data.agriculturepage.section10.heading}
        text={data.agriculturepage.section10.text}
        imageUrl={data.agriculturepage.section10.imageUrl}
      />
      <IndustryLeftImage  heading={data.agriculturepage.section12.heading}
      highlightText={data.agriculturepage.section12.highlightText}
      description1={data.agriculturepage.section12.description1}
      description2={data.agriculturepage.section12.description2}
     
      imageUrl={data.agriculturepage.section12.imageUrl}
        />
      <StartConversation/>
      <TickerComponent/>
    <Footer/>
    </>
  )
}

export default page
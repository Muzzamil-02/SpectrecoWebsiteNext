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
import TickerComponent from '@/components/common/Ticker'
import IndustryLeftImage from '@/components/common/IndustryLeftImage'
import CenterText from '@/components/common/CenterText'
import SustainableReporting from '@/components/common/SustainableReporting'
import NewSlider2 from '@/components/common/NewSlider2'
import NewSlider from '@/components/common/NewSlider'
const page = () => {
  return (
    <>
      <FirstComponent       title={data.insuransepage.section1.title}
      highlightedText={data.insuransepage.section1.highlightedText}
      description={data.insuransepage.section1.description}
      buttonText={data.insuransepage.section1.buttonText}
      imageUrl={data.insuransepage.section1.imageUrl}
        title2={data.insuransepage.section1.title2}
      />
      <IndustryCenterDescription heading={data.insuransepage.section2.heading}
        description={data.insuransepage.section2.description}
      />
      <IndustryImage  imageUrl={data.insuransepage.section3.imageUrl}/>
      <IndustryKeyComp heading={data.insuransepage.section4.heading}
      components={data.insuransepage.section4.components}
      />
      <NewSlider components={data.insuransepage.keyskaeholderslider.components}/>
      
      {/* <Slider/> */}
      <Phases cardsData={data.insuransepage.section5.component}/>
      <IndustryCenterDescription heading={data.insuransepage.section6.heading}
        description={data.insuransepage.section6.description}
      />
      <DrivingValue cardsData={data.insuransepage.section7.component}/>
     
      <IndustryImage2  imageUrl={data.insuransepage.section8.imageUrl}/>
      <NewSlider2 components={data.insuransepage.secondSwiper.components}/>
      
      <CenterText isContainer={true}
        heading={data.insuransepage.section9.heading}
      
      description={data.insuransepage.section9.description}
     
      imageUrl={data.insuransepage.section9.imageUrl}
      />
      <SustainableReporting heading={data.insuransepage.section10.heading}
        text={data.insuransepage.section10.text}
        imageUrl={data.insuransepage.section10.imageUrl}
      />
      <IndustryLeftImage  heading={data.insuransepage.section12.heading}
      highlightText={data.insuransepage.section12.highlightText}
      description1={data.insuransepage.section12.description1}
      description2={data.insuransepage.section12.description2}
     
      imageUrl={data.insuransepage.section12.imageUrl}
        />
      <StartConversation/>
      <TickerComponent/>
    </>
  )
}

export default page
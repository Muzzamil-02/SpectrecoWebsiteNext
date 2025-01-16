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
      <FirstComponent       title={data.financialpage.section1.title}
      highlightedText={data.financialpage.section1.highlightedText}
      description={data.financialpage.section1.description}
      buttonText={data.financialpage.section1.buttonText}
      imageUrl={data.financialpage.section1.imageUrl}
        title2={data.financialpage.section1.title2}
      />
      <IndustryCenterDescription heading={data.financialpage.section2.heading}
        description={data.financialpage.section2.description}
      />
      <IndustryImage  imageUrl={data.financialpage.section3.imageUrl}/>
      <IndustryKeyComp heading={data.financialpage.section4.heading}
      components={data.financialpage.section4.components}
      />
      <NewSlider components={data.financialpage.keyskaeholderslider.components}/>
      
      {/* <Slider/> */}
      <Phases cardsData={data.financialpage.section5.component}/>
      <IndustryCenterDescription heading={data.financialpage.section6.heading}
        description={data.financialpage.section6.description}
      />
      <DrivingValue cardsData={data.financialpage.section7.component}/>
     
      <IndustryImage2  imageUrl={data.financialpage.section8.imageUrl}/>
      <NewSlider2 components={data.financialpage.secondSwiper.components}/>
      
      <CenterText isContainer={true}
        heading={data.financialpage.section9.heading}
      
      description={data.financialpage.section9.description}
     
      imageUrl={data.financialpage.section9.imageUrl}
      />
      <SustainableReporting heading={data.financialpage.section10.heading}
        text={data.financialpage.section10.text}
        imageUrl={data.financialpage.section10.imageUrl}
      />
      <IndustryLeftImage  heading={data.financialpage.section12.heading}
      highlightText={data.financialpage.section12.highlightText}
      description1={data.financialpage.section12.description1}
      description2={data.financialpage.section12.description2}
     
      imageUrl={data.financialpage.section12.imageUrl}
        />
      <StartConversation/>
      <TickerComponent/>
    </>
  )
}

export default page
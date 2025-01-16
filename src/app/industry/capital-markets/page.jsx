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
      <FirstComponent       title={data.capitalmarketspage.section1.title}
      highlightedText={data.capitalmarketspage.section1.highlightedText}
      description={data.capitalmarketspage.section1.description}
      buttonText={data.capitalmarketspage.section1.buttonText}
      imageUrl={data.capitalmarketspage.section1.imageUrl}
        title2={data.capitalmarketspage.section1.title2}
      />
      <IndustryCenterDescription heading={data.capitalmarketspage.section2.heading}
        description={data.capitalmarketspage.section2.description}
      />
      <IndustryImage  imageUrl={data.capitalmarketspage.section3.imageUrl}/>
      <IndustryKeyComp heading={data.capitalmarketspage.section4.heading}
      components={data.capitalmarketspage.section4.components}
      />
      <NewSlider components={data.capitalmarketspage.keyskaeholderslider.components}/>
      
      {/* <Slider/> */}
      <Phases cardsData={data.capitalmarketspage.section5.component}/>
      <IndustryCenterDescription heading={data.capitalmarketspage.section6.heading}
        description={data.capitalmarketspage.section6.description}
      />
      <DrivingValue cardsData={data.capitalmarketspage.section7.component}/>
     
      <IndustryImage2  imageUrl={data.capitalmarketspage.section8.imageUrl}/>
      <NewSlider2 components={data.capitalmarketspage.secondSwiper.components}/>
      
      <CenterText isContainer={true}
        heading={data.capitalmarketspage.section9.heading}
      
      description={data.capitalmarketspage.section9.description}
     
      imageUrl={data.capitalmarketspage.section9.imageUrl}
      />
      <SustainableReporting heading={data.capitalmarketspage.section10.heading}
        text={data.capitalmarketspage.section10.text}
        imageUrl={data.capitalmarketspage.section10.imageUrl}
      />
      <IndustryLeftImage  heading={data.capitalmarketspage.section12.heading}
      highlightText={data.capitalmarketspage.section12.highlightText}
      description1={data.capitalmarketspage.section12.description1}
      description2={data.capitalmarketspage.section12.description2}
     
      imageUrl={data.capitalmarketspage.section12.imageUrl}
        />
      <StartConversation/>
      <TickerComponent/>
    </>
  )
}

export default page
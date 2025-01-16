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
      <FirstComponent       title={data.energypage.section1.title}
      highlightedText={data.energypage.section1.highlightedText}
      description={data.energypage.section1.description}
      buttonText={data.energypage.section1.buttonText}
      imageUrl={data.energypage.section1.imageUrl}
        title2={data.energypage.section1.title2}
      />
      <IndustryCenterDescription heading={data.energypage.section2.heading}
        description={data.energypage.section2.description}
      />
      <IndustryImage  imageUrl={data.energypage.section3.imageUrl}/>
      <IndustryKeyComp heading={data.energypage.section4.heading}
      components={data.energypage.section4.components}
      />
      <NewSlider components={data.energypage.secondSwiper.components}
      heading={data.energypage.secondSwiper.heading}  backgound="white"/>
      
      {/* <Slider/> */}
      <Phases cardsData={data.energypage.section5.component}/>
      <IndustryCenterDescription heading={data.energypage.section6.heading}
        description={data.energypage.section6.description}
      />
      <DrivingValue cardsData={data.energypage.section7.component}/>
     
      <IndustryImage2  imageUrl={data.energypage.section8.imageUrl}/>
      <NewSlider2 components={data.energypage.secondSwiper.components}
      heading={data.energypage.secondSwiper.heading}  backgound="white"/>
      
      <CenterText isContainer={true}
        heading={data.energypage.section9.heading}
      
      description={data.energypage.section9.description}
     
      imageUrl={data.energypage.section9.imageUrl}
      />
      <SustainableReporting heading={data.energypage.section10.heading}
        text={data.energypage.section10.text}
        imageUrl={data.energypage.section10.imageUrl}
      />
      <IndustryLeftImage  heading={data.energypage.section12.heading}
      highlightText={data.energypage.section12.highlightText}
      description1={data.energypage.section12.description1}
      description2={data.energypage.section12.description2}
     
      imageUrl={data.energypage.section12.imageUrl}
        />
      <StartConversation/>
      <TickerComponent/>
    </>
  )
}

export default page 
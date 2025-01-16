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
      <FirstComponent       title={data.hospitalitypage.section1.title}
      highlightedText={data.hospitalitypage.section1.highlightedText}
      description={data.hospitalitypage.section1.description}
      buttonText={data.hospitalitypage.section1.buttonText}
      imageUrl={data.hospitalitypage.section1.imageUrl}
        title2={data.hospitalitypage.section1.title2}
      />
      <IndustryCenterDescription heading={data.hospitalitypage.section2.heading}
        description={data.hospitalitypage.section2.description}
      />
      <IndustryImage  imageUrl={data.hospitalitypage.section3.imageUrl}/>
      <IndustryKeyComp heading={data.hospitalitypage.section4.heading}
      components={data.hospitalitypage.section4.components}
      />
            <NewSlider components={data.hospitalitypage.secondSwiper.components}
      heading={data.hospitalitypage.secondSwiper.heading}  backgound="white"/>
      {/* <Slider/> */}
      <Phases cardsData={data.hospitalitypage.section5.component}/>
      <IndustryCenterDescription heading={data.hospitalitypage.section6.heading}
        description={data.hospitalitypage.section6.description}
      />
      <DrivingValue cardsData={data.hospitalitypage.section7.component}/>
     
      <IndustryImage2  imageUrl={data.hospitalitypage.section8.imageUrl}/>
      <NewSlider2 components={data.hospitalitypage.secondSwiper.components}
      heading={data.hospitalitypage.secondSwiper.heading}  backgound="white"/>
      
      <CenterText isContainer={true}
        heading={data.hospitalitypage.section9.heading}
      
      description={data.hospitalitypage.section9.description}
     
      imageUrl={data.hospitalitypage.section9.imageUrl}
      />
      <SustainableReporting heading={data.hospitalitypage.section10.heading}
        text={data.hospitalitypage.section10.text}
        imageUrl={data.hospitalitypage.section10.imageUrl}
      />
      <IndustryLeftImage  heading={data.hospitalitypage.section12.heading}
      highlightText={data.hospitalitypage.section12.highlightText}
      description1={data.hospitalitypage.section12.description1}
      description2={data.hospitalitypage.section12.description2}
     
      imageUrl={data.hospitalitypage.section12.imageUrl}
        />
      <StartConversation/>
      <TickerComponent/>
    </>
  )
}

export default page
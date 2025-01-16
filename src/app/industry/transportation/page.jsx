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
      <FirstComponent       title={data.transportationpage.section1.title}
      highlightedText={data.transportationpage.section1.highlightedText}
      description={data.transportationpage.section1.description}
      buttonText={data.transportationpage.section1.buttonText}
      imageUrl={data.transportationpage.section1.imageUrl}
        title2={data.transportationpage.section1.title2}
      />
      <IndustryCenterDescription heading={data.transportationpage.section2.heading}
        description={data.transportationpage.section2.description}
      />
      <IndustryImage  imageUrl={data.transportationpage.section3.imageUrl}/>
      <IndustryKeyComp heading={data.transportationpage.section4.heading}
      components={data.transportationpage.section4.components}
      />
       <NewSlider components={data.transportationpage.secondSwiper.components}
      heading={data.transportationpage.secondSwiper.heading}  backgound="white"/>
      {/* <Slider/> */}
      <Phases cardsData={data.transportationpage.section5.component}/>
      <IndustryCenterDescription heading={data.transportationpage.section6.heading}
        description={data.transportationpage.section6.description}
      />
      <DrivingValue cardsData={data.transportationpage.section7.component}/>
     
      <IndustryImage2  imageUrl={data.transportationpage.section8.imageUrl}/>
      <NewSlider2 components={data.transportationpage.secondSwiper.components}
      heading={data.transportationpage.secondSwiper.heading}  backgound="white"/>
      
      <CenterText isContainer={true}
        heading={data.transportationpage.section9.heading}
      
      description={data.transportationpage.section9.description}
     
      imageUrl={data.transportationpage.section9.imageUrl}
      />
      <SustainableReporting heading={data.transportationpage.section10.heading}
        text={data.transportationpage.section10.text}
        imageUrl={data.transportationpage.section10.imageUrl}
      />
      <IndustryLeftImage  heading={data.transportationpage.section12.heading}
      highlightText={data.transportationpage.section12.highlightText}
      description1={data.transportationpage.section12.description1}
      description2={data.transportationpage.section12.description2}
     
      imageUrl={data.transportationpage.section12.imageUrl}
        />
      <StartConversation/>
      <TickerComponent/>
    </>
  )
}

export default page 
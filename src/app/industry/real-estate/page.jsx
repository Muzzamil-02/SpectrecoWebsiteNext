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
      <FirstComponent       title={data.realestatepage.section1.title}
      highlightedText={data.realestatepage.section1.highlightedText}
      description={data.realestatepage.section1.description}
      buttonText={data.realestatepage.section1.buttonText}
      imageUrl={data.realestatepage.section1.imageUrl}
        title2={data.realestatepage.section1.title2}
      />
      <IndustryCenterDescription heading={data.realestatepage.section2.heading}
        description={data.realestatepage.section2.description}
      />
      <IndustryImage  imageUrl={data.realestatepage.section3.imageUrl}/>
      <IndustryKeyComp heading={data.realestatepage.section4.heading}
      components={data.realestatepage.section4.components}
      />
       <NewSlider components={data.realestatepage.secondSwiper.components}
      heading={data.realestatepage.secondSwiper.heading}  backgound="white"/>
      {/* <Slider/> */}
      <Phases cardsData={data.realestatepage.section5.component}/>
      <IndustryCenterDescription heading={data.realestatepage.section6.heading}
        description={data.realestatepage.section6.description}
      />
      <DrivingValue cardsData={data.realestatepage.section7.component}/>
     
      <IndustryImage2  imageUrl={data.realestatepage.section8.imageUrl}/>
      <NewSlider2 components={data.realestatepage.secondSwiper.components}
      heading={data.realestatepage.secondSwiper.heading}  backgound="white"/>
      
      <CenterText isContainer={true}
        heading={data.realestatepage.section9.heading}
      
      description={data.realestatepage.section9.description}
     
      imageUrl={data.realestatepage.section9.imageUrl}
      />
      <SustainableReporting heading={data.realestatepage.section10.heading}
        text={data.realestatepage.section10.text}
        imageUrl={data.realestatepage.section10.imageUrl}
      />
      <IndustryLeftImage  heading={data.realestatepage.section12.heading}
      highlightText={data.realestatepage.section12.highlightText}
      description1={data.realestatepage.section12.description1}
      description2={data.realestatepage.section12.description2}
     
      imageUrl={data.realestatepage.section12.imageUrl}
        />
      <StartConversation/>
      <TickerComponent/>
    </>
  )
}

export default page
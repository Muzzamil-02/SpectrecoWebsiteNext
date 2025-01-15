import FirstComponent from '@/components/common/FirstComponent'
import Navbar from '@/components/common/Navbar'
import React from 'react'
import data from "@/lib/constant/data.json"
import Footer from '@/components/common/Footer'
import IndustryCenterDescription from '@/components/common/IndustryCenterDescription'
import IndustryImage from '@/components/common/IndustryImage'
import IndustryKeyComp from '@/components/common/IndustryKeyComp'


import Phases from '@/components/common/phases'
// import { DragControls } from 'framer-motion'
import DrivingValue from '@/components/common/DrivngValue'
import IndustryImage2 from '@/components/common/IndustryImage2'
import StartConversation from '@/components/common/StartConversation'
import TickerComponent from '@/components/common/ticker'
import IndustryLeftImage from '@/components/common/IndustryLeftImage'
import CenterText from '@/components/common/CenterText'
import SustainableReporting from '@/components/common/SustainableReporting'

// import Slider1 from '@/components/common/slider'
import Slider from '@/components/common/NewSlider'
const page = () => {
  console.log("hello",data.builtinpage.keyskaeholderslider.components)
  return (
    <>
    <Navbar/>
      <FirstComponent       title={data.builtinpage.section1.title}
      highlightedText={data.builtinpage.section1.highlightedText}
      description={data.builtinpage.section1.description}
      buttonText={data.builtinpage.section1.buttonText}
      imageUrl={data.builtinpage.section1.imageUrl}
        title2={data.builtinpage.section1.title2}
      />
      <IndustryCenterDescription heading={data.builtinpage.section2.heading}
        description={data.builtinpage.section2.description}
      />
      <IndustryImage  imageUrl={data.builtinpage.section3.imageUrl}/>
      <IndustryKeyComp heading={data.builtinpage.section4.heading}
      components={data.builtinpage.section4.components}
      />
      <Slider components={data.builtinpage.keyskaeholderslider.components}
       
      />
   
      <Phases cardsData={data.builtinpage.section5.component}/>
      <IndustryCenterDescription heading={data.builtinpage.section6.heading}
        description={data.builtinpage.section6.description}
      />
      <DrivingValue cardsData={data.builtinpage.section7.component}/>
     
      <IndustryImage2  imageUrl={data.builtinpage.section8.imageUrl}/>
      
      <CenterText isContainer={true}
        heading={data.builtinpage.section9.heading}
      
      description={data.builtinpage.section9.description}
     
      imageUrl={data.builtinpage.section9.imageUrl}
      />
      <SustainableReporting heading={data.builtinpage.section10.heading}
        text={data.builtinpage.section10.text}
        imageUrl={data.builtinpage.section10.imageUrl}
      />
      <IndustryLeftImage  heading={data.builtinpage.section12.heading}
      highlightText={data.builtinpage.section12.highlightText}
      description1={data.builtinpage.section12.description1}
      description2={data.builtinpage.section12.description2}
     
      imageUrl={data.builtinpage.section12.imageUrl}
        />
      <StartConversation/>
      <TickerComponent/>
    <Footer/>
    </>
  )
}

export default page
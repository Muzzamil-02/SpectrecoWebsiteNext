import React from 'react'
import data from "@/lib/constant/about.json"
import AboutFirst from '@/components/common/AboutFirst'
import Navbar from '@/components/common/Navbar'
import AboutMainImg from '@/components/common/AboutMainImg'
import Aboutthird from '@/components/common/Aboutthird'
import AboutNumber from '@/components/common/AboutNumber'
import AboutLeadership from '@/components/common/AboutLeadership'
import TeamSection from '@/components/common/TeamSection'
import GlobalPresence from '@/components/common/GlobalPresence'
import StartConversation from '@/components/common/StartConversation'
import TickerComponent from '@/components/common/ticker'
import Footer from '@/components/common/Footer'

const page = () => {
  return (
    <div>
    <Navbar/>
      <AboutFirst heading={data.section1.heading}
        description={data.section1.description}
      />
      <AboutMainImg imageUrl={data.section2.imageUrl}/>
      <Aboutthird heading={data.section3.heading}
        highlightedText={data.section3.highlightedText}
        description={data.section3.description}
      />
      <AboutNumber component={data.section4.component}/>
      <AboutLeadership title={data.section5.title}
        description={data.section5.description}
      />
      <TeamSection/>
      <GlobalPresence/>
      <StartConversation/>
      <TickerComponent/>
      <Footer/>
    </div>
  )
}

export default page
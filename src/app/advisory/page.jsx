
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'
import TickerComponent from '@/components/common/ticker'
import StartConversation from '@/components/common/StartConversation'
import ESGAdvisory from '@/components/advisory/ESGAdvisory'
import Strategies from '@/components/advisory/Stategies'
import SprintModal from '@/components/advisory/SprintModal'
import AdvisoryServices from '@/components/advisory/AdvisoryServices'
const page = () => {
  return (
    <>
    {/* <Navbar/> */}
    <ESGAdvisory/>
    <Strategies/>
    <SprintModal/>
    <AdvisoryServices/>
    <StartConversation/>
    <TickerComponent/>
    {/* <Footer/> */}
    </>
  )
}

export default page
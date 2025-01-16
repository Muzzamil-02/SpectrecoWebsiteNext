import React from 'react'
import TickerComponent from '@/components/common/Ticker'
import StartConversation from '@/components/common/StartConversation'
import ESGAdvisory from '@/components/advisory/ESGAdvisory'
import Strategies from '@/components/advisory/Stategies'
import SprintModal from '@/components/advisory/SprintModal'
import AdvisoryServices from '@/components/advisory/AdvisoryServices'
const page = () => {
  return (
    <>
    <ESGAdvisory/>
    <Strategies/>
    <SprintModal/>
    <AdvisoryServices/>
    <StartConversation/>
    <TickerComponent/>
    </>
  )
}

export default page
import CalendlyEmbed from '@/components/common/CalendlyEmbed'
import React from 'react'
import Navbar from '@/components/common/Navbar'
import StartConversation from '@/components/common/StartConversation'
import TickerComponent from '@/components/common/ticker'
import Footer from '@/components/common/Footer'

const pages = () => {
  return (
    <>
      <CalendlyEmbed/>
      <StartConversation padding="true"/>
      <TickerComponent/>
    </>
  )
}

export default pages
import CalendlyEmbed from '@/components/common/CalendlyEmbed'
import React from 'react'
import Navbar from '@/components/common/Navbar'
import StartConversation from '@/components/common/StartConversation'
import TickerComponent from '@/components/common/ticker'
import Footer from '@/components/common/Footer'

const pages = () => {
  return (
    <>
    <Navbar/>
      <CalendlyEmbed/>
      <StartConversation padding="true"/>
      <TickerComponent/>
      <Footer/>
    </>
  )
}

export default pages
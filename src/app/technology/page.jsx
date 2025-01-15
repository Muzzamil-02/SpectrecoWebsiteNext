import React from 'react'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import data from "@/lib/constant/technology.json";
import TopSection from "@/components/common/TopSection";
import CenterImagesCard from '@/components/common/CenterImagesCard';
import TechnologyBox from '@/components/common/TechnologyBox';
import TickerComponent from '@/components/common/Ticker';
import StartConversation from '@/components/common/StartConversation';
import CenterHeadingTechnology from '@/components/common/CenterHeadingTechnology';

const page = () => {
  const technologyData = data.technology;
  return (
    <div >
      <Navbar />
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <section className=' technology-top-wrapper'>
          <TopSection imagePosition={"right"} componentText={technologyData.Section1} />
        </section>
        <section className='default-padding'>
          <CenterImagesCard data={technologyData.Section3} />
        </section>
        <section className='default-padding'>
          <CenterHeadingTechnology  data={technologyData.Section2} hasTitle={true} underlineHeader={false} />
        </section>
        <section className='default-padding'>
          <video controls autoPlay={true}>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"></source>
          </video>
        </section>
        <section>
          <TechnologyBox {...technologyData.Section4} />
        </section>
        <section>
          <StartConversation/>
          <TickerComponent/>
        </section>
      </div>
      <Footer />
    </div>

  )
}

export default page
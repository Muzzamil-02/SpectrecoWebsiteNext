import React from 'react'
import data from "@/lib/constant/technology.json";
import TopSection from "@/components/common/TopSection";
import CenterImagesCard from '@/components/common/CenterImagesCard';
import TechnologyBox from '@/components/common/TechnologyBox';
import TickerComponent from '@/components/common/Ticker';
import StartConversation from '@/components/common/StartConversation';
import CenterHeadingTechnology from '@/components/common/CenterHeadingTechnology';
import { Container } from 'react-bootstrap';

const page = () => {
  const technologyData = data.technology;
  return (
    <div >
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <section className=' technology-top-wrapper'>
          <TopSection imagePosition={"right"} componentText={technologyData.Section1} />
        </section>
        <section className='default-padding'>
        <h4 style={{ color: "#d30c0b", textAlign: "center", paddingBottom: "30px" , textTransform:"uppercase" }}>
          Tailored Solutions for Businesses & Investors
        </h4>
          <CenterImagesCard data={technologyData.Section3} />
        </section>
        <section className='default-padding'>
          <CenterHeadingTechnology  data={technologyData.Section2} hasTitle={true} underlineHeader={false} />
        </section>
        <section className='default-padding'>
        <Container>
        <video controls autoPlay loop muted style={{ width: "100%" }}>
            <source src="https://spectreco.com/wp-content/uploads/2024/06/video.mp4" type="video/mp4"></source>
          </video>
          </Container>
        </section>
        <section>
          <TechnologyBox {...technologyData.Section4} />
        </section>
        <section>
          <StartConversation/>
          <TickerComponent/>
        </section>
      </div>
    </div>

  )
}

export default page
import React from 'react';
import Marquee from 'react-fast-marquee';

const TickerComponent = () => {
  return (
    <>
    <Marquee speed={50} gradient={false}>
        <div style={{ display: "flex", }}>
            <div style={{ display:'flex', alignItems:"center"}}>
                <span className='marquee outline-text'>Spectreco</span>
                <div className='dot'></div>
            </div>
            <div style={{paddingLeft: "10px",display:'flex', alignItems:"center",}}>
                <span className='marquee outline-text'>Spectreco</span>
                <div className='dot'></div>
            </div>
        </div>
    </Marquee>
    <Marquee speed={50} gradient={false}  direction="right" style={{transform: "translate(0, -35%)"}}>
        <div style={{ display: "flex",}}>
            <div style={{display:'flex', alignItems:"center"}}>
                <span className='marquee outline-text'>Spectreco</span>
                <div className='dot'></div>
            </div>
            <div style={{paddingLeft: "10px",display:'flex', alignItems:"center",}}>
                <span className='marquee outline-text'>Spectreco</span>
                <div className='dot'></div>
            </div>
        </div>
    </Marquee>
</>
  );
};

export default TickerComponent;
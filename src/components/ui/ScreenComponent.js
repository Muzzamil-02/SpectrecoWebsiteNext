import React from 'react'
import data from "@/components/common/data.json";
import ImageText from "@/components/common/ImageText";

const ScreenComponent = () => {
   
    
      return (
        <section>
          <ImageText imagePosition={"right"} isContainer={false} componentText={data.ImageTextComponent}/>
        </section>
      );
    };

export default ScreenComponent
"use client"
import { useEffect, useRef, useState } from "react";

const VideoPlayer = ({src}) =>{
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
         <div
        ref={videoRef} // Attach ref to the container to observe it
        style={{
          position: "relative",
          paddingTop: "56.25%", // Maintain 16:9 aspect ratio
          backgroundColor: "#000",
        }}
      >
      
        <video
          id="video"
          controls
          autoPlay
          loop
          muted
          style={{ width: "100%" }}
        >
          <source
            src={src}
            type="video/mp4"
          />
        </video>
      
      </div>
    </div>
  );
}
export default VideoPlayer;
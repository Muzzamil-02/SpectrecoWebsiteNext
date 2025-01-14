// components/SpinnerLoader.js
"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
// import { checkAuth } from "@/features/auth/helper";

const SpinnerLoader = () => {
    const router = useRouter();
 
    useEffect(() => {
      const timer = setTimeout(() => {
        
          router.push("/home");
        
      }, 3000); // 3 seconds
   
      // Cleanup the timer on unmount
      return () => clearTimeout(timer);
    }, [router]);
   
    return (
      <div className="flex items-center justify-center h-screen bg-primary text-white">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 3, duration: 0.4, ease: "easeInOut" },
          }}
          className="loader border-8 border-opacity-10 border-white border-l-accent rounded-full w-12 h-12 animate-spin"
        ></motion.div>
      </div>
    );
  };
export default SpinnerLoader;

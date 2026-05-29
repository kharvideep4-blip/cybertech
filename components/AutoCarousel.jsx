"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/slide1.jpg", 
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Changing the interval from 4000 to 2000 makes it switch twice as fast
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); 
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      width: "100%", 
      height: "400px", 
      position: "relative", 
      overflow: "hidden", 
      borderRadius: "12px", 
      border: "1px solid #1e88e5" 
    }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // If you want the transition itself to feel faster, 
          // decrease the duration below (e.g., to 0.4)
          transition={{ duration: 0.8 }} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            position: "absolute" 
          }}
        />
      </AnimatePresence>
    </div>
  );
}
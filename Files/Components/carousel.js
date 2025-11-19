"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Discover Premium Products",
    subtitle: "Top brands, best quality, delivered to your doorstep.",
    img: "https://cmsimages.shoppersstop.com/Mens_day_main_kv_app_9375684089/Mens_day_main_kv_app_9375684089.png",
  },
  {
    id: 2,
    title: "Exclusive Deals Everyday",
    subtitle: "Save big on trending fashion and gadgets.",
    img: "https://cmsimages.shoppersstop.com/PB_fest_main_kv_app_fa1b8eb0c4/PB_fest_main_kv_app_fa1b8eb0c4.png",
  },

  {
    id: 3,
    title: "Exclusive Deals Everyday",
    subtitle: "Save big on trending fashion and gadgets.",
    img: "https://cmsimages.shoppersstop.com/Women_Indian_main_banner_app_de6650f5f6/Women_Indian_main_banner_app_de6650f5f6.png",
  },
  {
    id: 3,
    title: "Shop Smart. Live Better.",
    subtitle: "Experience a seamless and fast shopping journey.",
    img: "https://cmsimages.shoppersstop.com/Main_KV_3feba984d6/Main_KV_3feba984d6.png",
  },
];

export default function HeroSlideCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto slide every 4 sec
  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slideNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative">
      <div className="relative w-full h-[50vh] overflow-hidden">
        <AnimatePresence custom={direction}>
          <motion.div
            key={slides[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <img
              src={slides[index].img}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition
              ${index === i ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div> */}

        <div className="absolute bottom-[-20px] z-10000 left-1/2 -translate-x-1/2 flex gap-0.5 ">
          {slides.map((_, i) => (
            <div
              onClick={() => {
                setIndex(i);
              }}
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-[#3a3a45]" : "bg-[#909199]"
              } ${i === index ? "w-5" : "w-2"}`}
              style={{ transition: "0.5s" }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

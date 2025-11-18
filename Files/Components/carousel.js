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
    title: "Shop Smart. Live Better.",
    subtitle: "Experience a seamless and fast shopping journey.",
    img: "/assets/hero-section.png",
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
          {/* <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-5">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-3 drop-shadow-lg">
              {slides[index].title}
            </h1>
            <p className="text-white/90 text-lg md:text-2xl mb-6">
              {slides[index].subtitle}
            </p>
            <button className="px-6 py-3 bg-white text-black rounded-xl text-lg font-semibold shadow-xl hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div> */}
        </motion.div>
      </AnimatePresence>

      {/* Arrows
      <button
        onClick={slidePrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full"
      >
        ◀
      </button>

      <button
        onClick={slideNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full"
      >
        ▶
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
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
      </div>
    </div>
  );
}

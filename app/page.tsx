"use client";
import Button from "@/components/UI/button";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "/ankara-image.png", 
      text: "Ankara"
    },
    {
      id: 2,
      image: "/lace-image.png", 
      text: "Lace"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:pr-30 lg:pl-30 py-16 md:py-24 lg:pt-45.5 lg:pb-45.5 bg-bgwhite-100">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-32.5 justify-between items-center text-textblack-100">
        {/* left side */}
        <div className="pt-4 md:pt-7 pb-4 md:pb-7 flex flex-col gap-8 md:gap-12 w-full lg:w-1/2">
          <div className="flex flex-col gap-6 md:gap-10 w-full">
            <h2 className="font-family-secondary text-4xl sm:text-4xl md:text-5xl font-bold leading-tight lg:text-left">
              Affordable luxury, First access.
            </h2>
            <p className="text-base md:text-lg lg:text-left">
              Premium African fabrics, early drops, and trusted global delivery to Europe and America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <Button text="Join the Waitlist" variant="primary" className="text-bgwhite-100 font-primary w-full sm:w-auto justify-center" />
              <Button text="Learn More" variant="outline" className="text-primary-100 font-primary w-full sm:w-auto justify-center" />
            </div>
          </div>
          
          {/* Feature boxes */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <div className="flex flex-col gap-3 md:gap-5 bg-bgwhite-80 border-2 border-accent-100 rounded-lg p-3 md:p-4 items-center justify-center flex-1 min-w-0">
              <span className="text-xs md:text-sm text-primary-100 text-center">Global Delivery</span>
              <span className="font-bold text-xs md:text-sm text-center">EU/US Shipping</span>
            </div>
            <div className="flex flex-col gap-3 md:gap-5 bg-bgwhite-80 border-2 border-accent-100 rounded-lg p-3 md:p-4 items-center justify-center flex-1 min-w-0">
              <span className="text-xs md:text-sm text-primary-100 text-center">Secure Sign‑up</span>
              <span className="font-bold text-xs md:text-sm text-center">Secure Verification</span>
            </div>
            <div className="flex flex-col gap-3 md:gap-5 bg-bgwhite-80 border-2 border-accent-100 rounded-lg p-3 md:p-4 items-center justify-center flex-1 min-w-0">
              <span className="text-xs md:text-sm text-primary-100 text-center">Cultural Authenticity</span>
              <span className="font-bold text-xs md:text-sm text-center">Heritage first</span>
            </div>
          </div>
        </div>
        
        {/* right side - Slideshow */}
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-123.5 rounded-lg lg:order-last">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Actual Image Component */}
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={`${slide.text} fabric`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                    <span className="font-secondary text-lg sm:text-xl md:text-2xl font-bold text-bgwhite-100 px-3 py-1 md:px-4 md:py-2 rounded-md ">
                      {slide.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
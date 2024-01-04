"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonialContent = {
  heading: {
    title: "Words From Our Community",
    subtitle: "Testimonials:",
  },
  testimonials: [
    {
      img: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1704043721/Futmej/testimonials/girl_omyjxc.jpg",
      name: "Zara Ibrahim",
      job: "Student and Beneficiary",
      message:
        "Futmej has been a guiding light for me. Through their educational initiatives, I've received invaluable support, opening doors to opportunities that have positively shaped my academic journey.",
    },
    {
      img: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1704043723/Futmej/testimonials/man_zbmn4p.jpg",
      name: "Ayo Oladele",
      job: "Hospitality Professional",
      message:
        "Futmej's hospitality services have elevated our community's standards. Their commitment to excellence creates an atmosphere of warmth and professionalism, making every interaction memorable",
    },
    {
      img: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1704043722/Futmej/testimonials/woman_dtce2o.jpg",
      name: "Kemi Olatunji",
      job: "Business Entrepreneur",
      message:
        "Futmej's holistic approach to community development is remarkable. From supporting local businesses to organizing community events, they've played a vital role in enhancing our overall quality of life.",
    },
    {
      img: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1704043723/Futmej/testimonials/old-man_u5saie.jpg",
      name: "Emeka Nwankwo",
      job: "Educator and School Owner",
      message:
        "Futmej's commitment to education is truly inspiring. Thanks to their support, our schools have been enriched with resources, empowering students and fostering a culture of learning and innovation.",
    },
  ],
};

const Testimonial = ({ className }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsBeginning(sliderRef.current.swiper.isBeginning);
    setIsEnd(sliderRef.current.swiper.isEnd);
  });

  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  });

  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  });
  return (
    <section className={`${className} overflow-hidden`}>
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12 flex gap-0 items-center">
            <div className="text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto mb-16">
              {testimonialContent.heading.subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12px] mb-5 inline-block text-gray-500"
                >
                  {testimonialContent.heading.subtitle}
                </motion.span>
              )}
              {testimonialContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl"
                >
                  {testimonialContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className="lg:flex justify-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-full lg:w-10/12 lg:flex gap-0 items-center"
          >
            <Swiper
              ref={sliderRef}
              speed={1000}
              spaceBetween={30}
              onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
              className="z-50 py-32 mb-7 relative flex items-center"
            >
              {testimonialContent.testimonials.map((testimonial, i) => (
                <SwiperSlide className="w-full" key={testimonial.name}>
                  <div className="block md:flex overflow-y-visible mt-10 items-stretch bg-white">
                    <div className="md:w-4/12">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={379}
                        height={320}
                        className="object-cover object-center !h-full !w-full"
                      />
                    </div>
                    <div className="md:w-8/12 p-7 md:p-16 flex items-center">
                      <div>
                        <blockquote className="text-lg mb-7">
                          <span className="text-[200px] leading-0 relative text-green-600 block">
                            &ldquo;
                          </span>
                          {testimonial.message}
                        </blockquote>
                        <div className="flex space-x-3 text-sm">
                          <strong>{testimonial.name}</strong>
                          <span>&mdash;</span>
                          <span>{testimonial.job}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex space-x-3">
            <div
              onClick={prevHandler}
              className={`${
                isBeginning == true
                  ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : " opacity-100 bg-green-600 text-white"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <FaArrowLeft
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                  isBeginning == true
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>
            <div
              onClick={nextHandler}
              className={`${
                isEnd == true
                  ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                  : " opacity-100 bg-green-600 text-white"
              } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}
            >
              <FaArrowRight
                className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                  isEnd == true
                    ? "group-hover:!text-gray-600"
                    : "group-hover:text-white"
                }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaHandsHelping,
  FaLightbulb,
  FaIndustry,
  FaLeaf,
  FaGraduationCap,
  FaBirthdayCake,
  FaShoppingCart,
  FaClipboardList,
  FaHotel,
  FaHandHoldingHeart,
} from "react-icons/fa";

const whatWeDoContent = {
  heading: {
    title: "Nurturing Growth, Sowing Success",
    subtitle: "What We Do:",
    description:
      "Discover excellence with Futmej — innovating across industries, championing communities, and offering diverse services for sustainable success.",
  },
  characteristics: [
    {
      number: "01",
      icon: FaRocket,
      title: "Adaptive Innovators:",
      description:
        "Futmej adapts to the ever-changing landscape, consistently innovating to stay ahead. Our ability to embrace change propels us as dynamic leaders in every sector we touch.",
    },
    {
      number: "02",
      icon: FaHandsHelping,
      title: "Community Champions:",
      description:
        "At the heart of Futmej lies a commitment to community. We actively engage, support, and uplift local communities, fostering meaningful connections beyond business",
    },
    {
      number: "03",
      icon: FaLightbulb,
      title: "Strategic Visionaries:",
      description:
        "With a strategic mindset, Futmej envisions the future. We chart clear paths for growth, navigating complexities with a foresight that defines our leadership.",
    },
  ],
  services: [
    {
      icon: FaIndustry,
      title: "Production and Processing:",
      description:
        "Precision and quality define our production services, ensuring top-notch results across industries.",
    },
    {
      icon: FaLeaf,
      title: "Agricultural Innovation:",
      description:
        "Futmej revolutionizes agriculture, combining technology and sustainable practices for a bountiful and eco-conscious harvest.",
    },
    {
      icon: FaGraduationCap,
      title: "Educational Endeavors:",
      description:
        "We empower minds for the future, providing education that inspires innovation and growth.",
    },
    {
      icon: FaBirthdayCake,
      title: "Bakery and Confectioneries:",
      description:
        "Indulge in the sweetness of success with our meticulously crafted bakery and confectionery delights, where every treat tells a tale of excellence.",
    },
    {
      icon: FaShoppingCart,
      title: "Supermarket and Departmental Stores:",
      description:
        "Futmej offers a curated shopping experience, delivering quality and convenience through our supermarket and departmental stores.",
    },
    {
      icon: FaClipboardList,
      title: "Event Management:",
      description:
        "Turn visions into unforgettable experiences with Futmej's expert event management services, ensuring seamless and memorable occasions.",
    },
    {
      icon: FaHotel,
      title: "Hospitality Excellence:",
      description:
        "Experience warmth and professionalism in every interaction. Futmej's hospitality services redefine comfort and elevate your experiences.",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Charitable Initiatives:",
      description:
        "Beyond business, we extend our arms to charitable causes, embodying a commitment to giving back and creating a positive social impact.",
    },
  ],
};

const WhatWeDo = ({ className }) => {
  return (
    <>
      <section className={`${className}`}>
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center mb-20 lg:mb-36">
            <div className=" w-full lg:w-8/12 lg:flex gap-0 items-center">
              <div className="lg:w-7/12 mb-5 lg:mb-0">
                {whatWeDoContent.heading.subtitle && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500"
                  >
                    {whatWeDoContent.heading.subtitle}
                  </motion.span>
                )}
                {whatWeDoContent.heading.title && (
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
                    {whatWeDoContent.heading.title}
                  </motion.h2>
                )}
              </div>
              <div className="lg:w-8/12 self-end">
                {whatWeDoContent.heading.description && (
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.4, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-gray-500"
                  >
                    {whatWeDoContent.heading.description}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 lg:w-10/12 mx-auto">
            {whatWeDoContent.characteristics.map((char, i) => {
              i *= 0.3;
              return (
                <motion.div
                  key={char.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: i, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: 0.1 }}
                  className="group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white relative overflow-hidden hover:bg-[#30BFBF] hover:shadow-2xl"
                >
                  <span className="text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0 leading-0">
                    {char.number}
                  </span>
                  <div className="absolute top-10 right-10">
                    <span className="text-3xl text-green-600 duration-300 transition-all ease-in-out group-hover:text-white">
                      <char.icon />
                    </span>
                  </div>
                  <div className="relative z-40 flex gap-3 items-start">
                    <div className="font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-50">
                      {char.number}
                    </div>
                    <div>
                      <h3 className="text-[18px] mb-4 duration-300 transition-all ease-in-out group-hover:text-white">
                        {char.title}
                      </h3>
                      <p className="leading-relaxed text-[14px] duration-300 transition-all ease-in-out group-hover:text-white">
                        {char.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-72 lg:pt-60 pb-32 bg-green-600">
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center">
            <div className="w-full lg:w-8/12 flex gap-0 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {whatWeDoContent.services.map((service, i) => {
                  i *= 0.4;
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: i, duration: 0.5 },
                      }}
                      viewport={{ once: true }}
                      className="relative z-40 flex gap-3 items-start"
                    >
                      <div>
                        <span className="text-3xl text-white">
                          <service.icon />
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg mb-4 text-white">
                          {service.title}
                        </h3>
                        <p className="leading-relaxed text-[15px] text-white text-opacity-75 mb-7">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;

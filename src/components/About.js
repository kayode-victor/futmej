"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const aboutContent = {
  heading: {
    title: "From Seed to Success",
    subtitle: "About Futmej:",
  },
  content: {
    img: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703950001/Futmej/home/home-about-img_qbqtyu.jpg",
    title: "Cultivating Excellence Across Industries",
    description:
      "Embark on a journey with Futmej, where passion meets proficiency. From our roots to becoming a beacon of multifaceted expertise, we symbolize resilience, innovation, and unwavering commitment. Our diverse ventures span production, education, agriculture, bakery, confectioneries, event management, and hospitality, embodying our belief in excelling across fields.",
    btn: {
      href: "/about",
      label: "Learn more",
    },
  },
};

const About = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-22 relative z-[5]">
          {aboutContent.heading.subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-gray-500"
            >
              {aboutContent.heading.subtitle}
            </motion.span>
          )}
          {aboutContent.heading.title && (
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
              {aboutContent.heading.title}
            </motion.h2>
          )}
        </div>
        <div className="lg:flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              {aboutContent.content.img && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  style={{ y: imgScroll1 }}
                  className="z-[2] relative"
                >
                  <Image
                    src={aboutContent.content.img}
                    width={400}
                    height={400}
                    alt="about-Image"
                    className="object-cover !w-full !h-[540px] lg:max-w-2xl object-center rounded-tr-[45px] rounded-bl-[45px]"
                  />
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll2 }}
                className="absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]"
              >
                <Image
                  width={200}
                  height={200}
                  src="/images/dots.svg"
                  alt="dot-decor"
                  className="w-64"
                />
              </motion.div>
            </div>
            <div className="lg:w-6/12">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-2xl mb-7 text-gray-800"
              >
                {aboutContent.content.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-14 text-gray-800"
              >
                {aboutContent.content.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className=""
              >
                <Link
                  href={aboutContent.content.btn.href}
                  className="transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-green-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-green-600 hover:shadow-2xl mx-3"
                >
                  {aboutContent.content.btn.label}
                </Link>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

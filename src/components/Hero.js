"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const heroContent = {
  intro: {
    title: "Nurturing Growth Across Industries",
    subTitle: "Welcome to Futmej:",
    description:
      "We're a beacon of excellence, seamlessly integrating expertise across sectors for a future rooted in innovation, sustainability, and success.",

    btn: {
      href: "/events",
      label: "View Events",
    },
    image: {
      src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703918078/Futmej/home/hero-image_jhqnlg.jpg",
      alt: "hero-image",
    },
  },
};
const Hero = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between">
          <div className="lg:w-4/12 z-[3] relative">
            {heroContent.intro.subTitle && (
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
                {heroContent.intro.subTitle}
              </motion.span>
            )}
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-gray-700 lg:bg-white/70 p-2 text-3xl sm:text-4xl md:text-5xl  lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8"
              >
                {heroContent.intro.title}
              </motion.h1>
            )}
            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed lg:bg-white/80 text-gray-800 p-3 w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-0 lg:mb-16"
              >
                {heroContent.intro.description}
              </motion.p>
            )}
            {heroContent.intro.btn.label && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={heroContent.intro.btn.href}
                  className="transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-green-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-green-600 hover:shadow-2xl mx-3"
                >
                  {heroContent.intro.btn.label}
                </Link>
              </motion.button>
            )}
          </div>
          <div className="lg:w-7/12 relative">
            {heroContent.intro.image && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll1 }}
                className="z-[2] relative bg-cover bg-center"
              >
                <Image
                  src={heroContent.intro.image.src}
                  width={828}
                  height={985}
                  alt={heroContent.intro.image.alt}
                  className="rounded-tl-[60px] rounded-br-[60px]"
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
              className="absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[-1]"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;

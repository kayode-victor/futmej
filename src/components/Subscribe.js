"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiSolidPaperPlane } from "react-icons/bi";

const subscribeContent = {
  heading: {
    title: "Stay Informed, Stay Connected",
    subtitle: "Subscribe for Updates",
    description:
      "Don't miss out on the latest from Futmej – sign up now to receive regular updates directly to your inbox.",
  },
  form: { placeholder: "Enter your Email" },
};

const Subscribe = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="flex justify-center">
          <div className="w-8/12 flex gap-0 items-center">
            <div className="text-center w-screen max-w-md mx-auto mb-10">
              {subscribeContent.heading.subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12px] mb-5 inline-block text-white"
                >
                  {subscribeContent.heading.subtitle}
                </motion.span>
              )}
              {subscribeContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl m text-white"
                >
                  {subscribeContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto justify-center">
          <motion.form
            className="flex relative w-auto max-w-xl mx-auto justify-center gap-5 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <input
              className="apperance-none bg-white py-4 px-7 w-auto lg:w-screen !pr-16 max-w-md shadow-md rounded-full outline-none"
              placeholder={subscribeContent.form.placeholder}
              required
              type="email"
            />
            <button
              type="submit"
              className="apperance-none absolute top-1 right-1 bg-[#30BFBF] text-white shadow-md w-12 h-12 rounded-full flex items-center justify-center"
            >
              <BiSolidPaperPlane />
            </button>
          </motion.form>
          {subscribeContent.heading.description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="w-auto max-w-md mx-auto mt-10 text-center text-white text-opacity-60"
            >
              {subscribeContent.heading.description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

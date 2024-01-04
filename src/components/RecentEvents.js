"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { allEvents } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";

const recentEventsContent = {
  heading: {
    title: "Discover Our Community's Vibrancy",
    subtitle: "Recent Events",
    description:
      "Explore the highlights of recent events hosted by Futmej, where innovation meets celebration.",
  },
};

const EventCard = ({ index, event }) => {
  index *= 0.05;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="bg-white relative overflow-hidden group"
    >
      <Link href={event.url} className="relative block overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          width={1064}
          height={644}
          className="object-cover oblect-center h-[240px] duration-300 transition-all ease-in-out group-hover:scale-[1.2]"
        />
      </Link>
      <div className="p-8">
        <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
          {format(parseISO(event.date), "LLL d, yyyy")} - {event.author}
        </p>
        <h3 className="mb-4">
          <Link href={event.url} className="text-lg leading-none">
            {event.title}
          </Link>
        </h3>
        <p>
          <Link
            href={event.url}
            className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-green-600"
          >
            Read More
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

const RecentEvents = ({ className }) => {
  const events = allEvents.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-center mb-24">
          <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
            <div className="lg:w-7/12">
              {recentEventsContent.heading.subtitle && (
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
                  {recentEventsContent.heading.subtitle}
                </motion.span>
              )}
              {recentEventsContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl mb-4 lg:mb-0"
                >
                  {recentEventsContent.heading.title}
                </motion.h2>
              )}
            </div>

            <div className="lg:w-5/12 self-end">
              {recentEventsContent.heading.description && (
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-gray-500"
                >
                  {recentEventsContent.heading.description}
                </motion.p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-10/12 mx-auto">
          {events.slice(0, 3).map((event, idx) => (
            <EventCard key={idx} index={idx} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;

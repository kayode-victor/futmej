import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentEvents from "@/components/RecentEvents";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg:pb-10" />
      <About className="py-16 lg:py-32 overflow-hidden" />
      <WhatWeDo className="py-16 !pt-32 lg:py-32" />
      <Testimonial className="py-16 lg:py-32" />
      <RecentEvents className="py-16 lg:py-32" />
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32 bg-green-600" />
      <Footer className="bg-white pt-10 md:pt-12" />
    </>
  );
}

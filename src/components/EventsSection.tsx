"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const events = [
  {
    title: "Camp Ignite",
    subtitle: "Ages 11–17 • June 24–28 • GreenBrier, MD",
    desc: "A safe and nurturing environment where youth have the opportunity to deepen their faith, build friendships, and have unforgettable fun.",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1752071425850-I8MCAXI0LAW4EPAVB1Y9/IMG_8842.jpg?format=1500w",
    href: "/camp-ignite",
  },
  {
    title: "TSI Summit",
    subtitle: "Ages 18–30 • July 30 – Aug 3 • New Vrindaban",
    desc: "The 12th annual summer retreat — association, kirtan, sanga discussions, and the unique atmosphere that makes this retreat special every year.",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/9c2de27b-70d6-4f71-84f1-7677ba1c4dd0/Summit26+Reg+Open+1x1.png",
    href: "/tsi-summit",
  },
  {
    title: "West Coast Retreat",
    subtitle: "Ages 18–30 • Sept 9–13 • Waikiki Beach, HI",
    desc: "Stay at a beachfront resort and enjoy deep sanga, guest speakers, workshops, water sports, kirtan, and delicious prasadam.",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/29accca4-513e-42f9-903c-d5aac3933666/WC26+Reg+Open+Post+11+%281%29.png",
    href: "/west-coast-retreat",
  },
  {
    title: "East Coast Retreat",
    subtitle: "Ages 16–30 • June 4–7 • Potomac, MD",
    desc: "Deep sanga, engaging guest speakers, dynamic workshops, kirtan, and delicious prasadam at ISKCON of DC.",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/42af22d1-ea73-4806-ba7b-17c7c415afa5/DSCF0624.jpeg",
    href: "/east-coast-retreat",
  },
  {
    title: "Midwest Retreat",
    subtitle: "Ages 14–30 • April 10–12",
    desc: "A regional gathering to connect, reflect, and grow together through spiritual activism and meaningful relationships.",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/cb2418ed-47e3-4cc4-80db-e0f26530aaa1/MW26+Reg+Open+Post+45.png",
    href: "/midwest-retreat",
  },
  {
    title: "Mission Trip",
    subtitle: "Ages 18–30 • Nov 14–22 • Brazil",
    desc: "A seva-based immersion at Nova Gokula Farm — eco-building projects, daily sadhana, and a three-day kirtan festival. Flight + $125 registration.",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/717065c1-66c5-483e-be4f-431f468c862f/1200x675_cmsv2_f7b63a9e-9088-51de-9993-2ab692ff4780-8300702.jpg.webp",
    href: "/mission-trip",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-24 md:py-48 relative z-10 w-full overflow-hidden bg-[#1A2A4A]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: The Editorial Split Typography */}
        <div className="w-full lg:w-5/12 flex flex-col items-start lg:sticky lg:top-40 h-max">
          <span className="inline-flex w-max items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#FDFBF7] mb-8 tabular-nums shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B8A375]" />
            Gatherings
          </span>
          <h2 className="font-serif text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.9] text-[#FDFBF7] mb-8 tracking-tighter text-balance">
            Find your <span className="text-[#B8A375] italic">Sanga.</span>
          </h2>
          <p className="max-w-md text-[1.125rem] text-[#FDFBF7]/70 font-sans font-light leading-relaxed border-l border-[#B8A375]/40 pl-6 text-pretty">
            Join us for retreats, summits, and camps across North America. Connect with a network of young devotees who support and empower each other.
          </p>
        </div>

        {/* Right Side: Staggered Interactive Cards */}
        <div className="w-full lg:w-7/12 flex flex-col gap-8 md:gap-16 pt-12 lg:pt-0">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2, delay: i * 0.1 }}
              className="w-full group"
            >
              {/* Double Bezel Card Architecture */}
              <div className="p-1.5 md:p-2 bg-white/5 rounded-[2rem] border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2">
                <div className="bg-[#0D182E] rounded-[calc(2rem-0.375rem)] md:rounded-[calc(2rem-0.5rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col sm:flex-row">
                  
                  {/* Event Image */}
                  <div className="w-full sm:w-2/5 aspect-square sm:aspect-auto sm:min-h-[250px] relative overflow-hidden bg-[#1A2A4A]">
                    <img
                      src={event.img}
                      alt={event.title}
                      loading="eager"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[2000ms] ease-out mix-blend-luminosity group-hover:mix-blend-normal"
                    />
                  </div>
                  
                  {/* Event Details */}
                  <div className="w-full sm:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                    <span className="text-[#B8A375] font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-3 block">
                      {event.subtitle}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-[#FDFBF7] mb-4 tracking-tighter group-hover:text-[#B8A375] transition-colors duration-500">
                      {event.title}
                    </h3>
                    <p className="text-[#FDFBF7]/60 font-sans font-light leading-relaxed text-sm md:text-base text-pretty">
                      {event.desc}
                    </p>
                    
                    {/* Magnetic Interactive Button inside card */}
                    <div className="mt-8">
                      <Link href={event.href} className="flex items-center gap-3 interactive group/btn w-max">
                        <span className="text-white text-xs font-bold uppercase tracking-widest group-hover/btn:text-[#B8A375] transition-colors">Details</span>
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:bg-[#B8A375] group-hover/btn:border-[#B8A375]">
                          <span className="text-white">→</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

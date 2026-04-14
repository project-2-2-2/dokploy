import React from "react";
import { ArrowRight, Zap, Layers, Hammer, Brain, Waves } from "lucide-react";
import MarqueeImport from "react-fast-marquee";
import { motion } from "framer-motion";

const Marquee = MarqueeImport?.default ?? MarqueeImport;


export default function Hero() {
  const companies = [
    { name: "Placement Portal", Icon: Zap },
    { name: "GDG IIITDM Kurnool", Icon: Layers },
    { name: "Final year projects", Icon: Brain },
    { name: "Personal Portfolios", Icon: Waves },
  ];
  const para =
    "A seamless platform for students and collaborators to launch projects, showcase work, and collaborate in real time.";

  const heading = "Deploy, share, and scale your ideas — built for IIITDM.";
  const words = heading.split(" ");

  const paraWord = para.split(" ");

  return (
    <div className="relative h-screen overflow-hidden bg-[url('/bg5.jpg')] bg-cover bg-center font-[f3] flex items-center justify-center">
      <div className="relative z-10">
       

        {/* Hero Section */}
        <main className="max-w-5xl  mx-auto px-8 py-10 text-center">
      
          <motion.div className="flex max-w-3xl  flex-col items-center justify-center flex-wrap sm:flex-row gap-x-2 text-center">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,

                  y: 0,
                  filter: "blur(0px)",

                  transition: {
                    delay: index * 0.05,
                    duration: 0.8,
                    ease: [0.25, 0.4, 0.25, 1],
                  },
                }}
                viewport={{ once: true }}
                className=" text-6xl md:text-[64px] font-medium   text-black mb-4 leading-14.5"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <div className=" text-black font-[para] text-sm md:text-lg max-w-xl mx-auto mb-8 leading-5.75 mt-2 flex flex-wrap justify-center gap-x-1">
            {paraWord.map((word, index) => (
              <motion.span
                initial={{ opacity: 0, y: 5, filter: "blur(20px)" }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: [0.25, 0.4, 0.25, 1],
                  },
                }}
                viewport={{ once: true }}
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <motion.button
              onClick={() => window.location.href = '/register'}
              className="bg-black shadow-sm text-[13px] text-white px-3.5 py-2.5 rounded-sm flex items-center space-x-2 transition"
            >
              <span>Start for Free</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => window.location.href = '/login'}
              className="bg-[#ececec0b] border border-white/5 text-[13px] text-black px-3.5 py-3 rounded-sm flex items-center space-x-2 transition"
            >
              <span>Book a demo</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Trust Badge */}
          <p className="text-black text-xs mb-12">
            Trusted by 500+ Students at IIITDM Kurnool
          </p>

          {/* Company Logos */}
          <div className="w-full max-w-3xl mx-auto  py-4 overflow-hidden mask-l-from-70%  mask-r-from-70%">
            <Marquee gradient={false} speed={50} pauseOnHover={true}>
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2  mx-8 text-black text-lg"
                >
                  <company.Icon className="w-6 h-6" />
                  <span>{company.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </main>
      </div>
    </div>
  );
}

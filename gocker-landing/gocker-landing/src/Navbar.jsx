import React, { useState } from "react";
import { motion } from "motion/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-[f2]">
      <div
        className={`fixed inset-0 z-40 bg-black/10 ${open ? "block" : "hidden"}`}
      ></div>
      <div className="fixed z-50 left-1/2 -translate-x-1/2 top-5">
        <motion.nav
          animate={{ width: open ? "1400px" : "625px" }}
          transition={{
            duration: open ? 0.3 : 0.45,
            ease: open ? "circOut" : [0.22, 1, 0.36, 1], // Apple-like smooth deceleration
            delay: open ? 0 : 0.5,
          }}
          className="w-[625px] bg-blk h-14 p-3 pr-1.5 flex items-center justify-between border border-b-white/20"
        >
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-white cursor-pointer"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span
                animate={{
                  rotate: open ? 45 : 0,
                  translateY: open ? 2 : 0,
                }}
                transition={{ duration: 0.35, delay: open ? 0 : 0.3 }}
                className="h-px w-full bg-white origin-center"
              />
              <motion.span
                animate={{
                  rotate: open ? -45 : 0,
                  translateY: open ? -5 : 0,
                }}
                transition={{ duration: 0.35, delay: open ? 0 : 0.3 }}
                className="h-px w-full bg-white origin-center"
              />
            </div>
            <h3 className="text-[18px]">Menu</h3>
          </div>
          <h3 className="text-white text-[24px] font-extrabold tracking-tighter">
            GOCKER
          </h3>
          <div className="text-[16px]">
            <button className="px-[1.125em] py-2 rounded-full bg-[#504c4c] text-white">
              Login
            </button>
            <button className="px-[1.125em] py-2 bg-neon text-black">
              SignUp
            </button>
          </div>
        </motion.nav>
        <motion.div
          animate={{
            clipPath: open
              ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
          transition={{
            delay: open ? 0.3 : 0,
            duration: open ? 0.8 : 0.5,
            ease: open
              ? "circIn" // smooth powerful open
              : [0.4, 0, 0.2, 1], // elegant controlled close
          }}
          className="w-[1400px] absolute h-125 bg-blk p-8 flex items-center justify-center"
        >
          <motion.div className="flex-1  h-full bg-darkgray rounded-md flex flex-col p-8 text-white/80 ">
            <h3 className="text-xs font-extralight text-white/80">
              OUR PRODUCTS
            </h3>
            <div className="mt-4">
              <div className="py-3 border-b border-white/20 text-[25px]">
                Deployments
              </div>

              <div className="flex items-center py-3 border-b border-white/20  gap-2">
                <div className=" text-[25px]">Templates</div>
                <span className="bg-prpl px-1 text-[10px] font-extralight">
                  New
                </span>
              </div>

              <div className="py-3 border-b border-white/20 text-[25px]">
                CLI / SDK
              </div>
              <div className="py-3 border-b border-white/20 text-[25px]">
                Integrations
              </div>
            </div>
            <div className="flex items-center mt-14 gap-2">
              <h3>Easings</h3>
              <span className="bg-neutral-700 text-[10px] font-extralight px-1">
                SOON
              </span>
            </div>
          </motion.div>
          <motion.div className="flex-1 h-full flex flex-col p-8 text-white/80 ">
            <h3 className="text-xs font-extralight text-white/80">EXPLORE</h3>
            <div className="mt-4">
              <div className="py-3 border-b border-white/20 text-[25px]">
                Showcase
              </div>

              <div className="py-3 border-b border-white/20 text-[25px]">
                Updates
              </div>
              <div className="py-3 border-b border-white/20 text-[25px]">
                Pricing
              </div>
            </div>
            <div className="flex items-center mt-24 text-white ">
              <button className="p-3 rounded-full bg-lightgray">
                <FaLinkedinIn />
              </button>
              <button className="p-3  bg-lightgray">
                <FaInstagram />
              </button>
              <button className="p-3 rounded-full bg-lightgray">
                <FaXTwitter />
              </button>
            </div>
          </motion.div>
          <motion.div className="flex-1 h-full bg-darkgray rounded-md flex flex-col justify-between relative text-center items-center p-8 text-white/80 overflow-hidden ">
            <div className="flex items-center uppercase tracking-wider text-[10px] font-light ">
              
            </div>

            {/* Main Text & CTA */}
            <div className="flex flex-col items-center gap-4 z-10 -mt-15">
              <h2 className="text-5xl md:text-[40px] f  text-white max-w-md">
                Deploy your project  <br />
                in seconds
              </h2>
              <button className="bg-bg font-extralight text-black px-4 py-2 rounded text-lg = hover:bg-gray-200 transition-colors">
                Join them
              </button>
            </div>

            {/* Avatar Cluster */}
            <div className="">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                size="w-20 h-20"
                className="absolute -bottom-4 left-0 z-0 "
              />
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="w-20 h-20"
                className="absolute bottom-10 left-20 z-10"
              />
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                size="w-24 h-24"
                className="absolute bottom-15 left-1/2 -translate-x-1/2 z-20  "
              />
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="w-20 h-20"
                className="absolute bottom-10 right-20 z-10"
              />
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                size="w-20 h-20"
                className="absolute -bottom-4 right-0 z-0 "
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const MenuItem = ({ text, badge }) => (
  <div className="group flex items-center gap-3 border-b border-white/5 pb-6 last:border-0 last:pb-0 cursor-pointer">
    <span className="text-2xl text-gray-200 group-hover:text-white transition-colors">
      {text}
    </span>
    {badge && (
      <span
        className={`text-[10px] font-bold tracking-wider text-white px-1.5 py-0.5 rounded ${badge.color}`}
      >
        {badge.text}
      </span>
    )}
  </div>
);

const Avatar = ({ src, size, className }) => (
  <img
    src={src}
    alt="Member"
    className={`rounded-full object-cover   ${size} ${className}`}
  />
);

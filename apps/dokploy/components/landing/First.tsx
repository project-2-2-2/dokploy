import React from 'react'
import {
  User,
  Sparkles,
  Brain,
  Link,
  MoreHorizontal,
  Check,
  X,
  Search,
  Bold,
  Italic,
  Underline,
  AlignLeft,
} from "lucide-react";

import CardTitle from './CardTitle';
import CardWrapper from './CardWrapper';
import { motion } from 'motion/react';


const features = [
  { icon: User, text: "Deploy directly from GitHub" },
  { icon: Sparkles, text: "Instant builds & previews" },
  { icon: Brain, text: "Auto-scaling infrastructure" },
];

const FeaturePill = ({ icon: Icon, text }) => (
  <div className="mb-2 flex w-full items-center gap-3 rounded-2xl border border-amber-100/80 bg-white/80 p-3 backdrop-blur-sm">
    <div className="rounded-xl bg-amber-50 p-1.5 text-amber-700 ring-1 ring-amber-100/80">
      <Icon size={18} />
    </div>
    <span className="text-sm font-[f1] text-slate-700">{text}</span>
  </div>
);

const First = () => {
  return (
    <div className="md:col-span-1">
          <CardWrapper className="bg-[#fffaf2] border-amber-200/60">
            <div className="space-y-2 h-60 overflow-hidden rounded-3xl border border-amber-100/50 bg-linear-to-b from-amber-200/35 via-orange-50/65 to-white p-8 pt-0">
              <div className="mask-t-from-90%">
                <motion.div
                  className="flex flex-col  "
                  animate={{ y: ["0%", "-33.33%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                >
                  {[...features, ...features, ...features].map((item, i) => (
                    <FeaturePill key={i} icon={item.icon} text={item.text} />
                  ))}
                </motion.div>
              </div>
            </div>
            <CardTitle
  title="Effortless Deployments"
  description="Push your code and go live instantly with zero configuration and built-in scaling."
/>
          </CardWrapper>
        </div>
  )
}

export default First
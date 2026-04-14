import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CardWrapper from "./CardWrapper";
import CardTitle from "./CardTitle";


const Thirs = () => {
  const [index, setIndex] = useState(0);
  const [displayAmount, setDisplayAmount] = useState(34500.96);
  const daysRefs = useRef([]);
  const arr = ["S", "S", "M", "T", "W", "T", "F"];
  const amounts = [34500.96, 42789.32, 51234.67, 38945.21, 47623.89, 55890.45, 61234.78];

  useEffect(() => {
    let timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % arr.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [arr.length]);

  useEffect(() => {
    const targetAmount = amounts[index];
    const startAmount = displayAmount;
    const duration = 400;
    const steps = 20;
    const increment = (targetAmount - startAmount) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setDisplayAmount(startAmount + increment * currentStep);
      } else {
        setDisplayAmount(targetAmount);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [index]);

  // Calculate position for the green circle
  const getCirclePosition = () => {
    if (daysRefs.current[index]) {
      const dayElement = daysRefs.current[index];
      return {
        x: dayElement.offsetLeft,
        y: dayElement.offsetTop
      };
    }
    return { x: 0, y: 0 };
  };

  const position = getCirclePosition();

  return (
    <div className="md:col-span-1">
      <CardWrapper className="bg-[#f5fff9] border-emerald-200/60">
        {/* Inner Modal Card */}
        <div className="w-full h-full rounded-3xl border border-emerald-100/50 bg-linear-to-b from-emerald-200/45 via-white/70 to-emerald-50/85 px-4 pt-6">
          <div className="w-full rounded-[1.25rem] border border-emerald-100/70 bg-white/90 p-5 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-[heading] text-sm font-semibold tracking-[-0.02em] text-slate-900">
                Weekly Reports
              </h4>
              <span className="rounded-full border border-slate-200/70 bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">
                Every Week
              </span>
            </div>
            {/* Days Row */}
            <div className="flex justify-between mb-3 relative px-2">
              <motion.div
                className="absolute z-0 h-6 w-6 rounded-full bg-emerald-400"
                animate={{
                  x: position.x - 8,
                  y: position.y
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
              />
              {arr.map((day, idx) => (
                <div
                  key={idx}
                  ref={(el) => (daysRefs.current[idx] = el)}
                  className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full text-sm font-[f1] ${
                    index === idx ? "text-white " : "text-slate-600"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="mb-3 flex items-center justify-between text-[10px] text-slate-900">
              <motion.span 
                key={index}
                
                className="font-[heading] text-3xl font-semibold tabular-nums tracking-[-0.03em]"
              >
                ₹{displayAmount.toLocaleString('en-US', { 
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2 
                })}
              </motion.span>
            </div>
            <div className="flex gap-3 mt-2">
              <button className="flex-1 rounded-full border border-slate-200/70 bg-slate-100 py-2 text-xs text-slate-600 transition-colors hover:bg-slate-200">
                Cancel
              </button>
              <div className="relative flex-1">
                <button className="w-full rounded-full bg-slate-900 py-2 text-xs text-white transition-colors hover:bg-slate-800">
                  Saved!
                </button>
                {/* Floating Notification Tag */}
                <div className="absolute -bottom-3 -right-2 flex items-center gap-1 rounded-full border-2 border-white bg-emerald-600 px-2 py-0.5 text-[9px] text-white">
                  <span className="w-1 h-1 bg-green-300 rounded-full animate-ping" />
                  Robin hood
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardTitle
          title="Real-time Metrics"
          description="Monitor usage, performance, and costs with live insights across your deployments."
        />
      </CardWrapper>
    </div>
  );
};

export default Thirs;


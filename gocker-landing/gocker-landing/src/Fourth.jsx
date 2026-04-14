import React from "react";
import CardTitle from "./CardTitle";
import CardWrapper from "./CardWrapper";
import MarqueeImport from "react-fast-marquee";
import { Sparkles } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Marquee = MarqueeImport?.default ?? MarqueeImport;

const Fourth = () => {
  return (
    <div className="md:col-span-2">
      <CardWrapper className="bg-[#f7f7fb] border-slate-200/70">
        {/* Dashboard Mockup */}
        <div className="w-full h-full flex flex-col justify-end rounded-3xl border border-slate-100/60 bg-linear-to-b from-slate-100/80 via-white/95 to-slate-50 p-4">
          <div className="mask-x-from-70% mask-b-from-70% flex ">
            <Marquee speed={40} gradient={false} className="py-0">
              <div className="flex h-full    pt-2  ">
                <div className="mr-1 h-30 w-70 rounded-2xl border border-slate-100/70 bg-white/90 p-4 backdrop-blur-sm">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-[f1] text-slate-500">
                      Looms Recorded
                    </span>
                    <div className="rounded-lg bg-indigo-50 p-1 text-indigo-600 ring-1 ring-indigo-100/70">
                      <Sparkles size={12} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-12 rounded-full overflow-hidden bg-slate-200">
                      <div className="h-full bg-indigo-500 w-2/3"></div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full border border-slate-200 px-1.5 py-0.5 text-[10px] text-slate-500 bg-white">
                      34 Products
                    </span>
                  </div>
                </div>

                <div className="mr-1 h-30 w-70 rounded-2xl border border-slate-100/70 bg-white/90 p-4 backdrop-blur-sm">
                  <div className="flex justify-between mb-2 items-center">
                    <span className="font-[heading] text-xs font-medium tracking-[-0.02em] text-slate-900">
                      Strategic Overview
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 p-1.5 text-[10px] font-bold text-orange-500 ring-1 ring-orange-100/70">
                      $$
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="rounded-full bg-emerald-500 px-2 py-1 text-[10px] text-white shadow-sm ">
                      Total Calls: 112
                    </span>
                    <span className="rounded-full border border-sky-200/70 bg-sky-100 px-2 py-1 text-[10px] text-sky-700 ">
                      Internal: 34%
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="rounded-full bg-amber-500 px-2 py-1 text-[10px] text-white shadow-sm ">
                      Most Booked: Tuesday
                    </span>
                  </div>
                </div>

                <div className="relative mr-1 hidden h-30 w-70 overflow-hidden rounded-2xl border border-slate-100/70 bg-white/90 p-4 backdrop-blur-sm md:block">
                  <div className="mb-2 text-xs font-[f1] text-slate-400">Total Calls</div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded-md bg-slate-200"></div>
                    <div className="h-4 w-full rounded-md bg-slate-200"></div>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white to-transparent"></div>
                </div>
              </div>
            </Marquee>
          </div>

          {/* Stat Item 1 */}

          {/* Stat Item 2 */}

          {/* Stat Item 3 (Cutoff) */}

          {/* Search Bar Input */}
          <div className="relative w-full rounded-full border border-slate-200/70 bg-white/70 px-6 py-2.5 font-light text-slate-400 backdrop-blur-sm">
            <Typewriter
              words={[
                "Deploy a Node.js app in seconds",
                "Connect your GitHub repo instantly",
                "Scale your backend with zero config",
              ]}
              loop={0} // 0 or false = infinite
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={100} // delay before erase
              cursor
              cursorStyle="|"
            />

            <button className="absolute right-1.5 top-1.5 bottom-1.5 rounded-full bg-slate-900 px-5 text-xs text-white font-[heading] tracking-[0.08em] ">
              Enter
            </button>
          </div>
        </div>

        <CardTitle
          title="Powerful Developer Experience"
          description="Manage deployments, logs, and services from a unified, intuitive dashboard."
        />
      </CardWrapper>
    </div>
  );
};

export default Fourth;

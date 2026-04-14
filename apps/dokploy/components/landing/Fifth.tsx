import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import CardTitle from "./CardTitle";
import { Bold, Italic, Underline, AlignLeft } from "lucide-react";
import useIndex from "./useIndex";
import { FlipWords } from "./Flip-words";

const Fifth = () => {
  const arr = [
    "Deployment logs are streamed in real-time for every service.",
    "Errors are tracked and surfaced instantly for faster debugging.",
    "Team members can collaborate and monitor services together.",
  ];

  const index = useIndex(arr.length, 1000);

  return (
    <div className="md:col-span-1">
      <CardWrapper className="relative overflow-visible bg-[#fbf7ff] border-violet-200/60">
        <div className="w-full h-full rounded-3xl border border-violet-100/50 bg-linear-to-b from-violet-200/45 via-white/70 to-violet-50/85 px-4 pt-6">
          <div className="space-y-4 mb-4 relative z-0">
            <div className="space-y-1">
              <p className="text-xs text-slate-400 leading-relaxed blur-[1px] font-[f1]">
                Action items were assigned and deadlines were agreed upon. A
                follow-up was automatically sent to all participants.
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-slate-400 leading-relaxed blur-[0.5px] font-[f1]">
                Discussion concluded with clear decisions and ownership.
              </p>
              <span className="inline-block rounded-full border border-indigo-200/70 bg-indigo-100 px-2 py-2 text-xs leading-relaxed text-indigo-700">
                <FlipWords words={arr} />
              </span>
            </div>

            {/* Floating Toolbar */}
            <div className="absolute left-0 bottom-2 z-10 flex gap-3 rounded-xl border border-white/10 bg-slate-900/95 px-3 py-1.5 text-white backdrop-blur-sm transform -translate-y-1">
              <Bold size={14} className="cursor-pointer hover:text-gray-300" />
              <Italic
                size={14}
                className="cursor-pointer hover:text-gray-300"
              />
              <Underline
                size={14}
                className="cursor-pointer hover:text-gray-300"
              />
              <AlignLeft
                size={14}
                className="cursor-pointer hover:text-gray-300"
              />
              <div className="w-px h-3 self-center bg-slate-700"></div>
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-violet-500 text-[8px] font-bold">
                J
              </div>
            </div>

            <div className="opacity-30 blur-[1px]">
              <p className="text-xs text-slate-400 leading-relaxed font-[f1]">
                Lorem ipsum assigned and deadlines were agreed upon. A follow-up
                was automatically sent.
              </p>
            </div>
          </div>
        </div>

        {/* Text Editor Content */}

        <CardTitle
          title="Live Logs & Collaboration"
          description="Debug faster with real-time logs and collaborate seamlessly with your team."
        />
      </CardWrapper>
    </div>
  );
};

export default Fifth;

import React from "react";
import { useState, useEffect } from "react";
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
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

import CardTitle from "./CardTitle";
import CardWrapper from "./CardWrapper";
import Avatar from "./Avatar";
import { FlipWords } from "./Flip-words";

const words = [
  "Website Design & Development",
  "Meeting with Co-Founder",
  "AI Agent Setup",
];

const Second = () => {
  const [displayedWord, setDisplayedWord] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // typing
      if (displayedWord.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
      }
    } else {
      // deleting
      if (displayedWord.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedWord(currentWord.slice(0, displayedWord.length - 1));
        }, 80);
      } else {
        // move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting, wordIndex, words]);

  const letters = displayedWord.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="md:col-span-1">
      <CardWrapper className="bg-[#f8fbff] border-sky-200/60">
        <div className="w-full h-full rounded-3xl border border-sky-100/50 bg-linear-to-b from-sky-200/45 via-white/70 to-sky-50/85 px-4 pt-6">
          {" "}
          <div className="w-full rounded-[1.25rem] border border-sky-100/70 bg-white/90 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-[f1] text-slate-400">Scheduled</span>
            </div>

            <div className="flex justify-between items-start mb-4">
              <h1 className="text-base font-[heading] leading-tight tracking-[-0.02em] text-slate-800">
                {/* <FlipWords  words={words}/> */}
                <Typewriter
                  words={[
                    "Website Design & Development",
                    "Meeting with Co-Founder",
                    "AI Agent Setup",
                  ]}
                  loop={0} // 0 or false = infinite
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={100} // delay before erase
                  cursor
                  cursorStyle="|"
                />
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="rounded-full border border-slate-200/70 bg-slate-100 px-2 py-1 text-xs text-slate-600">
                34 In Products
              </span>
              <span className="rounded-full border border-slate-200/70 bg-slate-100 px-2 py-1 text-xs text-slate-600">
                2 Mentorships
              </span>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <Avatar
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                  />
                ))}
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[10px] text-slate-500 ">
                  +4
                </div>
              </div>
              <Link size={14} className="text-slate-400" />
            </div>
          </div>
          {/* Inner Floating UI Card */}
        </div>

        <CardTitle
          title="Smooth Teamwork"
          description="Facilitate instant communication and seamless exchange high-quality data."
        />
      </CardWrapper>
    </div>
  );
};

export default Second;

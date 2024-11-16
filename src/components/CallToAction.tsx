"use client";
import emojiStarImage from "@/assets/images/emojistar.png";
import helixImage from "@/assets/images/helix2.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <div
      ref={containerRef}
      className="bg-black text-white py-[72px] sm:py-24 text-center overflow-x-clip"
    >
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={helixImage}
            alt="Helix"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={emojiStarImage}
            alt="Emoji Star"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-6">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-12 flex flex-col gap-4 sm:flex-row max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            name="email"
            id="email"
            className="h-12 bg-white/20 rounded-lg px-6 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg font-medium px-6">
            Get Access
          </button>
        </form>
      </div>
    </div>
  );
};
export default CallToAction;

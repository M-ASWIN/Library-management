"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/_components/images-slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ImagesSliderDemo() {
  const images = [
    "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?cs=srgb&dl=pexels-ivo-rainha-1290141.jpg&fm=jpg",
    "https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?cs=srgb&dl=pexels-ricky-esquivel-1926988.jpg&fm=jpg",
    "https://images.pexels.com/photos/2943603/pexels-photo-2943603.jpeg?cs=srgb&dl=pexels-engin-akyurt-2943603.jpg&fm=jpg",
  ];
  return (
    <ImagesSlider className="h-[45.6rem] w-[96rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Discover literary magic: <br /> where every book finds its perfect
          place
        </motion.p>
        <div className="flex ">
          <div className="mr-4">
            <Link href={"add-book"}>
              <Button className="px-4 py-2  backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>ADD BOOKS →</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"view-book"}>
              <Button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>VIEW BOOKS→</span>
                <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}

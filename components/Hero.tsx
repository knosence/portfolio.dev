import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi👋, I'm NaDario Seays", "Welcome to my Portfolio"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      {/*TODO: Add a image properly*/}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://lh3.googleusercontent.com/pw/AJFCJaVb3KUmYH0ZTVOnUjuJ_dgwNX_cQY-tU3HIdCpJyZMn6-eVGA9JVkufyrc1_Unad8jmN7EMp9_3lHegBBn450Fp4l1sJLn3ijI8l4ydPbSFPDIur3EsNjWqrMXe5-6x2dQVeF31Q0hEeXnBXkR4kSRl=w902-h953-s-no?authuser=0"
        alt="My Profile Picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Web Developer
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

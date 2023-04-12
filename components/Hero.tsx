import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is NaDario Seays",
      "I code like a hacker and drink coffee like a wizard.",
      "I don't always code, but when I do, I prefer Linux.",
      "Also BTW, I use Vim!!",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      {/*TODO: Add a image properly*/}
      <img
        className="relative rounded-full h-32 w-32 mx-auto"
        src="https://lh3.googleusercontent.com/pw/AJFCJaVb3KUmYH0ZTVOnUjuJ_dgwNX_cQY-tU3HIdCpJyZMn6-eVGA9JVkufyrc1_Unad8jmN7EMp9_3lHegBBn450Fp4l1sJLn3ijI8l4ydPbSFPDIur3EsNjWqrMXe5-6x2dQVeF31Q0hEeXnBXkR4kSRl=w902-h953-s-no?authuser=0"
        alt=""
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

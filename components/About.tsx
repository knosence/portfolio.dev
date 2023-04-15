import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.9 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/images/about_me.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hello, I&apos;m NaDario Seays, a highly skilled software developer
          based in Atlanta, GA. I hold a Bachelor&apos;s degree in Software
          Development and Analysis, as well as a Master&apos;s degree in IT
          Project Management. Complementing my formal education, I have also
          successfully completed a coding bootcamp called Skillstorm, where I
          gained extensive hands-on experience in Java, HTML, CSS, and
          JavaScript.
          <br />
          <br />
          Beyond my academic and professional achievements, my passion for
          technology extends to my hobbies. For over a decade, I have been
          actively involved in building and repairing computers, 3D printers,
          and server labs. I utilize CAD software to create intricate 3D models
          that I then print with my own printers. Additionally, I have a deep
          appreciation for Linux and its versatility in various technology
          applications.
        </p>
      </div>
    </motion.div>
  );
}

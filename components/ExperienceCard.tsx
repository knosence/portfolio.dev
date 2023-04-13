import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]
      object-cover object-center"
        src="https://pbs.twimg.com/profile_images/1247524081026514947/vPEmNvME_400x400.jpg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Full Stack Java Developer - Intern
        </h4>
        <p className="font-bold text-2xl mt-1">SkillStorm</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://img.icons8.com/color/256/javascript.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://img.icons8.com/color/256/javascript.png"
            alt=""
          />{" "}
          <img
            className="w-10 h-10 rounded-full"
            src="https://img.icons8.com/color/256/javascript.png"
            alt=""
          />{" "}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          </li>
          <li>
            veritatis ea sed debitis ut ex animi optio velit sit voluptatum sint
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sint,
            perferendis eligendi esse.
          </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
        </ul>
      </div>
    </article>
  );
}

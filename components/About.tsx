import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({ }: Props) {
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
        src="https://lh3.googleusercontent.com/pw/AJFCJaU6YJyz5ThVbv4vOKhZB2pNvDClnYXqWWLRPOF-KjxucTfJE2ng0qxDYbbcSSrFT8MO9KJVJSg1rkjPKrxDMnVLIzP0z6D0LXvZPEAcLH6tTFW1h7HE0R_gpJRXfCBBc6qujXDO_0fF_qWsm9cooYha5ngYd67lSR3RT0l9QTnQm_4Zn4272wj1VE3f4z4JRawIvB2-jZepduAUXHeG20vnOVP09BE-UJnAwFah6S3ZP1CfiaR7Zz3-APemQ-sqY91D328OPMcpNADI6gjDzVZvMOQqOMT9SsqqlZQrV2tL2PuLnasPVULE-0k6VwOjLcm_d0VVg9gIcU0GNh07t8UMpyj1NQZqWOcj8XIh6cw_zfTn_W3LVoyfjxyR9AFehzBQrxQFh_carnF30hy3aW-yS9Kf2oUhvj2EiROTrkTwXgC0d-2VITK6VdJDf2OHu4m0X-cka80OsiYSirPnJO-QM1wewKIH-ED7_LttbcV_LY-UZNmLyb4iEFlA7I30NJxCw2hNOInjEAT5ayJ0u1MVAvU6uGtEBuSZXdQ9LgApzWmGPIUBpdkxUU8Bm0yCVK-iV9vLAI4GBUqhe1ex_gWnWoLLvVJAAsbWRC2LlJh5KI5BYHHrHBWePFd6Poq7fP3BQtlX0pFZGbU4queKuvIdysaHbfaPP9wmfTm_CEcirf5d5pq29kz2TZXruU3kzl1lfVUVGOZ1LHEitcGqOrR9D76KD32h3wU1k2xyWZnGdv9VBH4U8LbDJAvY7jcfUcJ0ak-Zkmwy4i6Auiq092VqyC4jDwEFKs4xHuSsWyNcQXoh2LgVXQgSCp-BhJKywv98R8yF8nVqod3c2uBx9j9Txf6t6sDTzLO15rndRIdfswfkj5t6yvnlGqknY_e5N28uScu_2Q48r0qA6I4b2lEwpw=w819-h953-s-no?authuser=0"
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

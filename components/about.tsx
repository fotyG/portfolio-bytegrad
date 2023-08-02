"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Fishing</span>, I decided to pursue my
        passion for shiny electronic things. I enrolled in a coding bootcamp on
        neighbor ice-berg and learned{" "}
        <span className="font-medium">
          full-stack web development from a very smart walrus
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        ability to implement fish images into website design. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out where to put one.. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, animating fish images, Node.js, MongoDB and SQL
        </span>
        . I am also familiar with TypeScript, Prisma and beautiful rocks. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position on any ice-berg</span>{" "}
        as a software developer (but my momy is coming with me).
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        with rocks, teasing orcas and playing with my seagull. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          history, philosophy and how to slide on my belly
        </span>
        . I'm also learning how to dance.
      </p>
    </motion.section>
  );
};
export default About;

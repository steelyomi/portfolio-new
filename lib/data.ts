import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Business Development Manager",
    location: "Backbone Connectivity Network",
    description:
      "Expanded cross-functional organizational capacity by collaborating with the business development, marketing, and product departments on the organizations priorities and creating competitive concept proposals",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  {
    title: "Pre-sale Techical Support",
    location: "Snapnet Limited",
    description:
      "Professionally communicates with customers to identify their buying needs and goals, develops various sales collaterals, and works on pre-sales technical presentations/demos",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Snapnet Limited",
    description:
      " Module Development; Collaborated with Senior Software Developers to implement and update application modules, ensuring alignment with project objectives and coding standards",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Scissor",
    description:
      "Scissor allows users to shorten URLs by pasting a long URL into the Scissor platform and a shorter URL gets automatically generated. The shortened URL is designed to be as short as possible, making it easy to share on social media or through other channels.",
    tags: ["React", "TypeScript", "Tailwind",],
    // imageUrl: corpcommentImg,
  },
  {
    title: "HOOBANK",
    description:
      "A modern Bank web app",
    tags: ["React",  "Tailwind", ],
    // imageUrl: rmtdevImg,
  },
  {
    title: "Notes",
    description:
      "A React project for a Note web app.",
    tags: ["React", , "Tailwind", ],
    // imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const;
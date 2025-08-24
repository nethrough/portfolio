import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "fresh-finds",
    category: "web application",
    title: "Fresh Finds",
    src: "/assets/projects-screenshots/fresh_finds/project4-main.png",
    screenshots: [
      "/assets/projects-screenshots/fresh_finds/project4-main.png",
      "/assets/projects-screenshots/fresh_finds/project4-screen1.png", 
      "/assets/projects-screenshots/fresh_finds/project4-screen2.png"
    ],
    live: "https://freshfinds-seven.vercel.app",
    github: "https://github.com/nethrough/freshfinds",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.css, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Fresh Finds is a peer-to-peer marketplace for vegetables, fruits, dairy, meat, and eggs. 
            The platform connects farmers, resellers, and end consumers directly, eliminating middlemen 
            and ensuring fair profits for producers. Built with React (Vite), vanilla CSS/JS, Firebase 
            for backend services, and Python for machine learning. Its first AI-powered feature is a 
            price prediction engine that uses historical market data to provide insights into fair 
            pricing and seasonal fluctuations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Direct farmer-to-consumer sales</li>
            <li>Price prediction engine using machine learning</li>
            <li>Realtime updates with Firebase</li>
            <li>Role-based access for farmers, resellers, and consumers</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/fresh_finds/project4-main.png`,
              `${BASE_PATH}/fresh_finds/project4-screen1.png`,
              `${BASE_PATH}/fresh_finds/project4-screen2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "voice-notes",
    category: "web application", 
    title: "AI Voice Notes",
    src: "/assets/projects-screenshots/voice_notes/project2-main.png",
    screenshots: [
      "/assets/projects-screenshots/voice_notes/project2-main.png",
      "/assets/projects-screenshots/voice_notes/project2-screen1.png"
    ],
    live: "https://voice-notes-beryl.vercel.app",
    github: "https://github.com/nethrough/voice_notes",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.css],
      backend: [PROJECT_SKILLS.openai],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Voice Notes is a 2nd year university project that enables users to record voice notes 
            and automatically convert them into text using OpenAI&apos;s Whisper v3 transcription model. 
            Developed with React (Vite), vanilla JavaScript, and CSS, the app delivers a clean and 
            minimal interface while showcasing how modern AI can be integrated into lightweight web 
            applications. This project highlights both frontend development skills and the practical 
            application of AI-powered speech-to-text technology.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Voice Recording – Record voice notes directly in the browser</li>
            <li>AI-Powered Transcription – Convert speech to text using Whisper v3</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/voice_notes/project2-main.png`,
              `${BASE_PATH}/voice_notes/project2-screen1.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "weather-app",
    category: "web application",
    title: "Weather App", 
    src: "/assets/projects-screenshots/weather_app/main-screenshot.png",
    screenshots: [
      "/assets/projects-screenshots/weather_app/main-screenshot.png",
      "/assets/projects-screenshots/weather_app/screenshot1.png"
    ],
    live: "https://weather-app-five-beryl-35.vercel.app",
    github: "https://github.com/nethrough/weather-app",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js, PROJECT_SKILLS.vite],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            This Weather App was developed as a first-year university project to practice fundamental 
            web development concepts. It is a simple yet functional application built with HTML, CSS, 
            JavaScript, and Vite, and deployed on Vercel. The app allows users to search for a city 
            and view real-time weather details such as temperature, humidity, and conditions by integrating 
            with a weather API. The project&apos;s main purpose was to gain hands-on experience with consuming 
            APIs, manipulating the DOM, and deploying a modern web application, while keeping the interface 
            clean and easy to use.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Search for a city to view real-time weather data</li>
            <li>Displays information such as temperature, humidity, and weather conditions</li>
            <li>API integration to fetch live weather details</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/weather_app/main-screenshot.png`,
              `${BASE_PATH}/weather_app/screenshot1.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "hand-crafts",
    category: "web application",
    title: "Hand Crafts",
    src: "/assets/projects-screenshots/hand_crafts/project3-main.png", 
    screenshots: [
      "/assets/projects-screenshots/hand_crafts/project3-main.png",
      "/assets/projects-screenshots/hand_crafts/project3-screen1.png",
      "/assets/projects-screenshots/hand_crafts/project3-screen2.png"
    ],
    live: "https://handloom-three.vercel.app",
    github: "https://github.com/Yasindu20/Handi-Craft-Site",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Handi Crafts is a modern, responsive web application built with React and Vite, designed 
            to showcase and promote handcrafted goods. Styled using Tailwind CSS, the site provides 
            a clean and user-friendly interface for browsing products, highlighting the artistry and 
            uniqueness of each item. The project emphasizes fast performance, modular code structure, 
            and an intuitive user experience, making it suitable for small businesses or artisans 
            looking to present their creations online.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Displays handcrafted items with images and descriptions</li>
            <li>Optimized build process and lightning-fast development server</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/hand_crafts/project3-main.png`,
              `${BASE_PATH}/hand_crafts/project3-screen1.png`,
              `${BASE_PATH}/hand_crafts/project3-screen2.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "tech-hub",
    category: "web application",
    title: "Tech HUB",
    src: "/assets/projects-screenshots/tech_hub/project4-main.png",
    screenshots: [
      "/assets/projects-screenshots/tech_hub/project4-main.png", 
      "/assets/projects-screenshots/tech_hub/project4-screen1.png",
      "/assets/projects-screenshots/tech_hub/project4-screen2.png"
    ],
    live: "https://techhub-pro.vercel.app",
    github: "https://github.com/Yasindu20/Techhub-Pro-Computer-Shop",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.firebase, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Techhub Pro is a modern, web-based computer shop management system designed to streamline 
            daily operations for computer retail businesses. It allows shop owners and staff to efficiently 
            manage inventory, track sales, generate invoices, and maintain customer records, all from a 
            single platform. The system also provides reporting features to monitor stock levels, sales 
            trends, and financial performance, helping businesses make data-driven decisions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Product inventory management with stock tracking</li>
            <li>Sales and billing system with invoice generation</li>
          </ul>
          <SlideShow
            images={[
              `${BASE_PATH}/tech_hub/project4-main.png`,
              `${BASE_PATH}/tech_hub/project4-screen1.png`,
              `${BASE_PATH}/tech_hub/project4-screen2.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;

"use client";

import React, { useState, useEffect, useRef } from "react";
import TypewriterEffect from "./typewritereffect.jsx";
import BoldTypewriterEffect from "./BoldTypewriterEffect.jsx";
import WaveyBoldEffect from "../components/WaveyBoldEffect.jsx";
import { TextAnimate } from "@/components/magicui/text-animate";
import ProjectCard3D from "../components/project-card-3d.jsx";
import Hover3DEffect from "../components/Hover3DEffect.jsx";
import AnimateOnScroll from "../components/AnimateOnScroll.jsx";

// Main App component that renders the combined HeroSection
export default function App() {
  return <Homepage />;
}

// Combined HeroSection with content from both snippets
const Homepage = () => {
  // State to manage the visibility of the scroll-to-top button
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const animatedTextRef = useRef(null);

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    // Function to check scroll position and toggle button visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Show button after scrolling 300px
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-blur-in");
          } else {
            entry.target.classList.remove("animate-blur-in");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (animatedTextRef.current) {
      observer.observe(animatedTextRef.current);
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animatedTextRef.current) {
        observer.unobserve(animatedTextRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Handles smooth scrolling when a navigation link is clicked
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Handles smooth scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      href: "https://socialhub.rohitkushwaha.com/",
      src: "/youtube-socialhub.webp",
      alt: "SocialHub",
      title: "SocialHub: An All-in-One Social Platform",
      description:
        "An integrated social platform featuring a high-performance Elasticsearch search engine, an AI-powered comment summarizer, and real-time chat with presence indicators.",
      techLogos: [
        { src: "/react.png", alt: "React.js" },
        { src: "/nodejs.png", alt: "Node.js" },
        { src: "/expressjs.png", alt: "Express.js" },
        { src: "/elasticsearch.png", alt: "Elasticsearch" },
        { src: "/websocket.png", alt: "WebSocket" },
        { src: "/gemini.png", alt: "Gemini API" },
        { src: "/mongodb.png", alt: "MongoDB" },
        { src: "/gcp.png", alt: "Google Cloud Platform" },
      ],
    },
    {
      href: "https://aigeneratedimagess.com/",
      src: "/aigenerted.webp",
      alt: "AI Content Generation Pipeline",
      title: "AI Content Generation Pipeline",
      description:
        "A fully automated pipeline that uses the Gemini API and an asynchronous message queue system to transform keywords from google sheet into a searchable gallery of high-performance, web-optimized images.",
      techLogos: [
        { src: "/nextjs.png", alt: "Next.js" },
        { src: "/nodejs.png", alt: "Node.js" },
        { src: "/expressjs.png", alt: "Express.js" },
        { src: "/elasticsearch.png", alt: "Elasticsearch" },
        { src: "/gemini.png", alt: "Gemini API" },
        { src: "/mongodb.png", alt: "MongoDB" },
        { src: "/gcp.png", alt: "Google Cloud Platform" },
      ],
    },
    {
      href: "https://digipinlocator.site/",
      src: "/locatordigipin.png",
      alt: "DigPinLocator",
      title: "DigiPinLocator - India's Digital Address System",
      description:
        "A user-friendly web app built on India Post's open-source backend that instantly finds your digital address, decodes any Digipin, and displays it on an interactive OpenStreetMap.",
      techLogos: [
        { src: "/nextjs.png", alt: "Next.js" },
        { src: "/nodejs.png", alt: "Node.js" },
        { src: "/expressjs.png", alt: "Express.js" },
        { src: "/qrcode.png", alt: "QRCode" },
        { src: "/openstreetmap.png", alt: "OpenStreetMap" },
        { src: "/gcp.png", alt: "Google Cloud Platform" },
      ],
    },
  ];

  const skills = {
    frontend: [
      {
        name: "React",
        src: "/react.png",
        bg: "bg-cyan-500/10",
        hover: "group-hover:bg-cyan-500/20",
      },
      {
        name: "Next.js",
        src: "/nextjs.png",
        bg: "bg-white/10",
        hover: "group-hover:bg-white/20",
      },
      {
        name: "JavaScript",
        src: "/javascript.png",
        bg: "bg-yellow-500/10",
        hover: "group-hover:bg-yellow-500/20",
      },
      {
        name: "Tailwind CSS",
        src: "/tailwind.png",
        bg: "bg-cyan-500/10",
        hover: "group-hover:bg-cyan-500/20",
      },
      {
        name: "HTML5",
        src: "/html.png",
        bg: "bg-orange-500/10",
        hover: "group-hover:bg-orange-500/20",
      },
      {
        name: "CSS3",
        src: "/css.png",
        bg: "bg-blue-500/10",
        hover: "group-hover:bg-blue-500/20",
      },
    ],
    backend: [
      {
        name: "Node.js",
        src: "/nodejs.png",
        bg: "bg-green-500/10",
        hover: "group-hover:bg-green-500/20",
      },
      {
        name: "Express.js",
        src: "/expressjs.png",
        bg: "bg-gray-600/10",
        hover: "group-hover:bg-gray-600/20",
      },
      {
        name: "Elasticsearch",
        src: "/elasticsearch.png",
        bg: "bg-yellow-600/10",
        hover: "group-hover:bg-yellow-600/20",
      },
      {
        name: "Web Socket",
        src: "/websocket.png",
        bg: "bg-blue-400/10",
        hover: "group-hover:bg-blue-400/20",
      },
      {
        name: "Inngest",
        src: "/inngest.jpg",
        bg: "bg-orange-600/10",
        hover: "group-hover:bg-orange-600/20",
      },
    ],
    databases: [
      {
        name: "MongoDB",
        src: "/mongodb.png",
        bg: "bg-green-600/10",
        hover: "group-hover:bg-green-600/20",
      },
      {
        name: "Pinecone",
        src: "/pinecone.png",
        bg: "bg-blue-500/10",
        hover: "group-hover:bg-blue-500/20",
      },
    ],
    aiEngineering: [
      {
        name: "Langchain",
        src: "/lanchain.png",
        bg: "bg-purple-500/10",
        hover: "group-hover:bg-purple-500/20",
      },
      {
        name: "Gemini",
        src: "/gemini.png",
        bg: "bg-blue-600/10",
        hover: "group-hover:bg-blue-600/20",
      },
      {
        name: "OpenAI",
        src: "/openai.png",
        bg: "bg-green-400/10",
        hover: "group-hover:bg-green-400/20",
      },
    ],
    deployment: [
      {
        name: "GitHub Actions",
        src: "/github.png",
        bg: "bg-gray-700/10",
        hover: "group-hover:bg-gray-700/20",
      },
      {
        name: "Git & Github",
        src: "/github.png",
        bg: "bg-gray-700/10",
        hover: "group-hover:bg-gray-700/20",
      },
      {
        name: "Nginx",
        src: "/nginx.png",
        bg: "bg-green-600/10",
        hover: "group-hover:bg-green-600/20",
      },
      {
        name: "Ubuntu (Linux)",
        src: "/ubuntu.png",
        bg: "bg-orange-600/10",
        hover: "group-hover:bg-orange-600/20",
      },
      {
        name: "GCP",
        src: "/gcp.png",
        bg: "bg-blue-500/10",
        hover: "group-hover:bg-blue-500/20",
      },
      {
        name: "DigitalOcean",
        src: "/digitalocean.png",
        bg: "bg-blue-700/10",
        hover: "group-hover:bg-blue-700/20",
      },
    ],
  };

  return (
    // Main container with new gradient background, grid pattern, and relative positioning
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden font-sans w-full ">
      {/* Background grid pattern */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center pt-8">
        <div className="flex space-x-8 text-[17px] font-semibold">
          <a
            href="#projects"
            onClick={handleNavClick}
            className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={handleNavClick}
            className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#about"
            onClick={handleNavClick}
            className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            About Me
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 mt-20">
        {/* Name */}
        <div className="text-[25px] sm:text-[30px] tracking-wide text-white mb-15 font-semibold h-3">
          <TypewriterEffect
            text="HI, I'M ROHIT KUSHWAHA"
            typingSpeed={100}
            erasingSpeed={70}
            pauseBeforeErasing={600}
            pauseBeforeTyping={200}
            willErase={true}
            loop={true}
            className="bg-gradient-to-r from-blue-200 via-slate-100 to-blue-300 bg-clip-text text-transparent"
            onComplete={() => {}}
            onTextUpdate={(text) => {}}
          />
        </div>

        {/* Main heading */}
        <div className="text-center max-w-5xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            <Hover3DEffect>
              <span ref={animatedTextRef} className="text-gradient">
                AI-Centric Full Stack Developer | Specializing in MERN, Next.js
                & Generative AI{" "}
              </span>
            </Hover3DEffect>
          </h1>
        </div>

        {/* Description */}
        <p className="text-[17px] md:text-[19px] text-gray-300 mb-12 max-w-2xl text-center h-16 flex items-center justify-center">
          <BoldTypewriterEffect
            text="I build fast, scalable, and intelligent applications that deliver an exceptional user experience."
            typingSpeed={50}
          />
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center md:gap-10 gap-5 mb-12 cta-button-container">
          <a
            href="#projects"
            onClick={handleNavClick}
            className="inline-flex items-center md:px-8 px-3 md:py-4 py-2.5 bg-transparent border border-gray-400/50 rounded-lg text-white hover:bg-gray-700/20 transition-all duration-300 backdrop-blur-sm group cursor-pointer animate-swap-left"
          >
            <span className="md:mr-3 mr-2">View My Work</span>
            <svg
              className="w-4 h-4 transform -rotate-45 group-hover:rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex items-center md:px-8 px-3 md:py-4 py-2.5 bg-transparent border border-gray-400/50 rounded-lg text-white hover:bg-gray-700/20 transition-all duration-300 backdrop-blur-sm group cursor-pointer animate-swap-right"
          >
            <span className="md:mr-3 mr-2">Get in Touch</span>
            <svg
              className="w-4 h-4 transform -rotate-45 group-hover:rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/irohitkushwaha/"
            className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="https://github.com/irohitkushwaha"
            className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://x.com/irohit_kushwaha"
            className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="relative z-10 pt-20 px-4">
        {/* Section Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 h-15">
            <TypewriterEffect
              text="Featured Work"
              typingSpeed={100}
              erasingSpeed={70}
              pauseBeforeErasing={600}
              pauseBeforeTyping={200}
              willErase={true}
              loop={true}
            />
          </h2>
          <p className="text-gray-400 text-lg h-3  md:h-8 flex items-center justify-center">
            <BoldTypewriterEffect
              text="From Concept to Reality"
              typingSpeed={50}
            />
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <AnimateOnScroll
                key={index}
                animationClass={
                  index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                }
                hiddenClass="hidden-on-load"
              >
                <ProjectCard3D {...project} />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-8 max-w-3xl mx-auto">
            {projects.slice(2, 3).map((project, index) => (
              <AnimateOnScroll
                key={index}
                animationClass="animate-slide-in-bottom"
                hiddenClass="hidden-on-load"
              >
                <ProjectCard3D {...project} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Container for Skills and About sections */}
      <div
        id="skills"
        className="relative z-10 pt-20 px-4 max-w-7xl mx-auto space-y-20 w-full"
      >
        {/* Skills Section */}
        <div className="w-full">
          {/* Section Header */}
          <div className="text-center mb-16 w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6  md:mb-4 h-15">
              <TypewriterEffect
                text="Technologies & Expertise"
                typingSpeed={100}
                erasingSpeed={70}
                pauseBeforeErasing={600}
                pauseBeforeTyping={200}
                willErase={true}
                loop={true}
              />
            </h2>
            <p className="text-gray-400 text-lg h-8 flex items-center justify-center">
              <BoldTypewriterEffect
                text="Cutting-Edge Tools & Frameworks"
                typingSpeed={50}
              />
            </p>
          </div>
          <div className="grid gap-8 w-full">
            {/* Frontend */}
            <Hover3DEffect>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2 md:p-8 hover:bg-white/10 transition-all duration-300 w-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center p-4 md:p-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  Frontend
                </h3>
                <div className="marquee marquee-left">
                  <div className="marquee-content md:gap-x-12 gap-x-5 py-4">
                    {skills.frontend.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center group flex-shrink-0"
                      >
                        <div
                          className={`md:w-16 md:h-16 w-8 h-8 ${tech.bg} ${tech.hover} rounded-xl flex items-center justify-center mb-3 transition-all duration-300`}
                        >
                          <img
                            src={tech.src}
                            alt={tech.name}
                            className="md:w-12 md:h-12 w-8 h-8 object-contain"
                          />
                        </div>
                        <span className="text-xs md:text-sm text-gray-300 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Hover3DEffect>
            {/* Backend */}
            <Hover3DEffect>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2 md:p-8 hover:bg-white/10 transition-all duration-300 w-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center p-4 md:p-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  Backend
                </h3>
                <div className="marquee marquee-right">
                  <div className="marquee-content md:gap-x-12 gap-x-5 py-4">
                    {skills.backend.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center group flex-shrink-0"
                      >
                        <div
                          className={`md:w-16 md:h-16 w-8 h-8 ${tech.bg} ${tech.hover} rounded-xl flex items-center justify-center mb-3 transition-all duration-300`}
                        >
                          <img
                            src={tech.src}
                            alt={tech.name}
                            className="md:w-12 md:h-12 w-8 h-8 object-contain"
                          />
                        </div>
                        <span className="text-xs md:text-sm text-gray-300 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Hover3DEffect>
            {/* Databases */}
            <Hover3DEffect>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2 md:p-8 hover:bg-white/10 transition-all duration-300 w-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center p-4 md:p-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  Databases
                </h3>
                <div className="marquee marquee-left">
                  <div className="marquee-content md:gap-x-12 gap-x-5 py-4">
                    {skills.databases.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center group flex-shrink-0"
                      >
                        <div
                          className={`md:w-16 md:h-16 w-8 h-8 ${tech.bg} ${tech.hover} rounded-xl flex items-center justify-center mb-3 transition-all duration-300`}
                        >
                          <img
                            src={tech.src}
                            alt={tech.name}
                            className="md:w-12 md:h-12 w-8 h-8 object-contain"
                          />
                        </div>
                        <span className="text-xs md:text-sm text-gray-300 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Hover3DEffect>
            {/* AI Engineering */}
            <Hover3DEffect>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2 md:p-8 hover:bg-white/10 transition-all duration-300 w-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center p-4 md:p-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full px-1 mr-4"></div>
                  AI Engineering & Integration
                </h3>
                <div className="marquee marquee-right">
                  <div className="marquee-content md:gap-x-12 gap-x-5 py-4">
                    {skills.aiEngineering.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center group flex-shrink-0"
                      >
                        <div
                          className={`md:w-16 md:h-16 w-8 h-8 ${tech.bg} ${tech.hover} rounded-xl flex items-center justify-center mb-3 transition-all duration-300`}
                        >
                          <img
                            src={tech.src}
                            alt={tech.name}
                            className="md:w-12 md:h-12 w-8 h-8 object-contain"
                          />
                        </div>
                        <span className="text-xs md:text-sm text-gray-300 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Hover3DEffect>
            <Hover3DEffect>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2 md:p-8 hover:bg-white/10 transition-all duration-300 w-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center p-4 md:p-0">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 px-1"></div>
                  Deployment & Infrastructure
                </h3>
                <div className="marquee marquee-left">
                  <div className="marquee-content md:gap-x-12 gap-x-5 py-4">
                    {skills.deployment.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center group flex-shrink-0"
                      >
                        <div
                          className={`md:w-16 md:h-16 w-8 h-8 ${tech.bg} ${tech.hover} rounded-xl flex items-center justify-center mb-3 transition-all duration-300`}
                        >
                          <img
                            src={tech.src}
                            alt={tech.name}
                            className="md:w-12 md:h-12 w-8 h-8 object-contain"
                          />
                        </div>
                        <span className="text-xs md:text-sm text-gray-300 font-medium">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Hover3DEffect>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="py-20 px-3 md:px-4 relative z-10 ">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 h-15">
            <TypewriterEffect
              text="The Developer Behind the Code"
              typingSpeed={100}
              erasingSpeed={70}
              pauseBeforeErasing={600}
              pauseBeforeTyping={200}
              willErase={true}
              loop={true}
            />
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <Hover3DEffect>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-gray-300 space-y-4 text-lg">
                <p>
                  <BoldTypewriterEffect
                    text="I'm a product-focused developer who is passionate about the journey from a great idea to a real-world solution."
                    typingSpeed={25}
                  />
                </p>
                <p>
                  <BoldTypewriterEffect
                    text="I believe the best technology is that which solves a genuine human problem and delivers a seamless user experience."
                    typingSpeed={25}
                  />
                </p>
                <p>
                  <BoldTypewriterEffect
                    text='My process starts by understanding the "why" behind the project.'
                    typingSpeed={25}
                  />
                </p>
                <p>
                  <BoldTypewriterEffect
                    text="I then leverage my expertise in the MERN stack and AI to build applications that are not just technically excellent, but are also intuitive, engaging, and aligned with your business goals."
                    typingSpeed={25}
                  />
                </p>
                <p>
                  <BoldTypewriterEffect
                    text="I'm driven by the challenge of building something that people love to use."
                    typingSpeed={25}
                  />
                </p>
              </div>
            </div>
          </Hover3DEffect>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center pt-20 relative z-10 py-20 px-4 max-w-7xl mx-auto space-y-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 h-15">
          <TypewriterEffect
            text="Get in Touch"
            typingSpeed={100}
            erasingSpeed={70}
            pauseBeforeErasing={600}
            pauseBeforeTyping={200}
            willErase={true}
            loop={true}
          />
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 h-24 flex items-center justify-center">
          <BoldTypewriterEffect
            text="I'm currently open to new opportunities to build impactful, real-world solutions. If you need an expert developer who can turn ideas into reality, I would love to connect."
            typingSpeed={50}
          />
        </p>
        <Hover3DEffect>
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-8 max-w-md mx-auto">
            <a
              href="mailto:rohit@rohitkushwaha.com"
              className="inline-flex items-center gap-3 text-lg text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              rohit@rohitkushwaha.com
            </a>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/irohitkushwaha/"
                className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/irohitkushwaha"
                className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://x.com/irohit_kushwaha"
                className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </Hover3DEffect>
      </section>

      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

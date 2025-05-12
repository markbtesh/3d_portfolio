import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, link }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.load();
    }
  }, [isVisible]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-[#15103047] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div ref={containerRef} className="relative w-full h-[230px]">
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-2xl">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
          {isVisible && (
            <video
              ref={videoRef}
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
              className={`w-full h-full object-cover rounded-2xl ${!isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
              onLoadedData={handleVideoLoad}
            >
              <source src={image} type="video/mp4" />
            </video>
          )}
        </div>

        <a 
          className="cursor-pointer" 
          onClick={() => window.open(link === "" ? `https://${name}` : `https://${link}`, "_blank")}
        >
          <div className="mt-5">
            <h3>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </a>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleProjects = isSmallScreen ? projects.slice(0, 5) : projects;

  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Websites.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects are websites I have designed and built for various clients. Each project is briefly showcased and displays the technology it uses. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively
     
        </motion.p>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-7'>
        {visibleProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(Works, "work")


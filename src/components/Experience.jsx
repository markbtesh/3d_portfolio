import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        
        rotate: '5deg'
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      
    >
      <img
      className="w-full h-full object-cover"
      src={ experience.img }>
      </img>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
<motion.div variants={textVariant()}>
<p className={styles.sectionSubText}> What I have done </p>
<h2 className={styles.sectionHeadText}> Work Experience </h2>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}

      </VerticalTimeline>
    </div>
</motion.div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
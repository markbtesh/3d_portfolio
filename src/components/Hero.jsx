import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faHandPointer } from '@fortawesome/free-solid-svg-icons';



const Hero = () => {

  
  return (
    <section className="relative w-full h-screen mx-auto">

      <div className={`${styles.paddingX} absolute inset-0 sm:top-[120px] top-[75px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF5D29]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />

        </div>

        <div className='z-20 absolute sm:left-[100px] left-[50px] '>
        <h1 className={`${styles.heroHeadText} `}> Hi, I'm <span className="text-[#FF5D29]"> Mark</span></h1>
        <p className={`${styles.heroSubText} mt=2 text-white-100`}>
          I develop websites, programs, <br className="sm:block hidden" /> and web applications.
          <br className="sm:block hidden" />Welcome to my portfolio, feel free <br className="sm:block hidden" /> to interact with everything!
        </p>
      <br />
        <a
           href="#fullstack%20work"
            className='bg-[#574260] hover:bg-[#3a2c41] transition-colors py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary/50'
          >View My Projects</a>
        <br /> 
        <br />
        <ul className="icon-list">
      <li><FontAwesomeIcon icon={faPhone} color="#FF5D29" className='pr-2'/>
        <span>917-648-0846</span></li>
      
      <li><FontAwesomeIcon icon={faEnvelope} color="#FF5D29" className='pr-2'/>
        <span>mbsoftdesign@gmail.com</span></li>
      </ul>
        <br /> 
        <div >
      <a href="https://m.facebook.com/mark.btesh/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} color='#1877F2' size="3x" className="pr-3"/>
      </a>
      <a href="https://www.instagram.com/marksoftdesign/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} color="" size="3x" style={{background:"-webkit-linear-gradient( #fa7e1e,#d62976,#962fbf)"}} className=" mr-2 pr-1 pl-1 rounded-2xl"/>
      </a>
      <a href="https://www.linkedin.com/in/mark-btesh-a25336191/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} color='#0a66c2' size="3x" />
      </a>
      <a href="https://github.com/markbtesh" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} color='black' size="3x"  className=" mr-2 pr-1 pl-2 rounded-2xl" />
      </a>
    </div>
      </div>
      </div>
      <ComputersCanvas />
      
      <div className='absolute xs:bottom-40 bottom-36 left-60 w-full flex justify-center items-center'>
    
          <div className='w-[35px] h-[64px] flex justify-center items-start p-2'>
            <motion.div
            initial={{ opacity:0}}
              animate={{
                x: [0, 30, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                delay: 3,
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full'
            >
              
              <FontAwesomeIcon icon={faHandPointer} color='gray' size="1x"  className=" mr-2 pr-1 pl-2 rounded-2xl" />
              </motion.div>
          </div>
      
        </div>

      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        
        <a href='#about'>
          <div className='w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      
    </section>
  )
}

export default Hero

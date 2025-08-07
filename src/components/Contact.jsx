import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_7euve5s', 'template_e4uwjj9',
    {
    from_name: form.name,
    from_email: form.email,
    from_phone: form.phone,
    to_name: 'Mark',
    to_email: 'mbsoftdesign@gmail.com',
    message: form.message + '\n from: ' + form.email,
    },
    'Cs_rvHCmdtHU-bZqd'

    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',

      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Something went wrong')
    })


  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#15103047] p-8 rounded-2xl">
           <p className={styles.sectionSubText}>Get In Touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          ref={formRef} 
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
            <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your full name?"
              className='bg-[#574260] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-[#574260] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your phone number</span>
            <input
              type='tel'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder="What's your phone number?"
              className='bg-[#574260] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='How can I help you?'
              className='bg-[#574260] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#574260] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <div className='z-3 box'>
      <a href="https://m.facebook.com/mark.btesh/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} color='#1877F2' size="2x" className="pr-3"/>
      </a>
      <a href="https://www.instagram.com/marksoftdesign/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} color="" size="2x" style={{background:"-webkit-linear-gradient( #fa7e1e,#d62976,#962fbf)"}} className=" mr-2 pr-1 pl-1 rounded-2xl"/>
      </a>      
      <a href="https://www.linkedin.com/in/mark-btesh-a25336191/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} color='#0a66c2' size="2x" />
      </a>
    </div>
    <ul className="icon-list box">
      <li><FontAwesomeIcon icon={faPhone} color="#915eff" className='pr-2'/>
        <span>917-648-0846</span></li>
      
      <li><FontAwesomeIcon icon={faEnvelope} color="#915eff" className='pr-2'/>
        <span>mbsoftdesign@gmail.com</span></li>
      </ul>
          </form>

        </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")

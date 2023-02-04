'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts'
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';

const About = () => (
  <section className='about'>
    <div className='gradient-02'></div>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      className='about__container container'
    >
      <TypingText title={'| About Metaverus'} textStyle={''} />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        className='about__text'
      >
        <span>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span>madness of the metaverse</span> of today, using only <span>VR</span> devices you can easily <span>explore</span> the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        initial='hidden'
        whileInView='show'
        className='about__arrow'
        src='/arrow-down.svg'
        alt='arrow-down'
        style={{ position: 'relative', zIndex: 5 }}
      >
      </motion.img>
    </motion.div>
  </section>
);

export default About;

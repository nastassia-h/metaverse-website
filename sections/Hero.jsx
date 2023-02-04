'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import { staggerContainer, slideIn, textVariant } from '../utils/motion';


const Hero = () => (
  <section
    className='hero'
  >
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ amount: 0.25, once: false }}
      className='hero__container'
    >
      <div className='hero__title'>

        <motion.h1
          variants={textVariant(1.1)}
          initial='hidden'
          whileInView='show'
          className='hero__title-first'
        >
          <div className='home'>
            <TypingText title={'| Home'} textStyle={''} />
          </div>
          METAVERSE
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          initial='hidden'
          whileInView='show'
          className='hero__title-second'
        >
          <h1>MA</h1>
          <div className='heroDtext'></div>
          <h1>NESS</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        className='hero__content'
      >
        <div className='hero-gradient hero__gradient' />
        <div className='hero__image ibg'>
          {/* <img src="/cover.png" alt="cover" /> */}
        </div>
        <a href="#explore" className='hero__link'>
          <img src="/stamp.png" alt="stamp" />
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;

'use client';

import { motion } from "framer-motion";
import { TypingText, TitleText } from '../components/CustomTexts'
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className="world">
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='world__container container'
    >
      <TypingText title={'| People on the World'} textStyle={''} />
      <TitleText title={'Track friends around you and invite them to play together in the same world'} textStyle={''} />
      <div className="world__map">
        <div className="world__image">
          <img src="/map.png" alt="map" />
        </div>
        <motion.div
          variants={fadeIn('down', 'tween', 0.3, 1)}
          className='world__people world__people-01'>
          <img src="/people-01.png" alt="people-01" />
        </motion.div>
        <motion.div
          variants={fadeIn('down', 'tween', 0.4, 1)}
          className='world__people world__people-02'>
          <img src="/people-02.png" alt="people-02" />
        </motion.div>
        <motion.div
          variants={fadeIn('down', 'tween', 0.5, 1)}
          className='world__people world__people-03'>
          <img src="/people-03.png" alt="people-03" />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default World;

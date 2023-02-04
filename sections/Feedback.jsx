'use client';

import { motion } from 'framer-motion'
import { staggerContainer, slideIn, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className="feedback">
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='feedback__container container'
    >
      <div className='gradient-04'></div>
      <div className='feedback-gradient'></div>
      <div className='feedback__content'>
        <motion.a
          href='#explore'
          variants={zoomIn(0.2, 1)}
          initial='hidden'
          whileInView='show'
          whileHover={{ scale: 1.05 }}
          className='feedback__link'
        >
          <img src='./stamp.png' alt="" />
        </motion.a>
        <motion.din
          variants={slideIn('left', 'spring', 0.2, 1)}
          initial='hidden'
          whileInView='show'
          className='feedback__comment'
        >
          <div>Samantha </div>
          <div>Founder Metaverus</div>
          <p>“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
        </motion.din>
        <motion.div
          variants={slideIn('right', 'spring', 0.2, 1)}
          initial='hidden'
          whileInView='show'
          className='feedback__image ibg'
          style={{ backgroundImage: `url(./planet-09.png)` }}
        >
        </motion.div>
      </div>

    </motion.div>
  </section>
);

export default Feedback;

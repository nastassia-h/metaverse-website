'use client';
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion';
import { startingFeatures } from '../constants'

const StartSteps = () => (
  <div className='startSteps'>
    {startingFeatures.map((step, index) =>
      <motion.div
        variants={fadeIn('down', 'spring', index * 0.5, 1)}
        className='startSteps__item'
      >
        <div className='startSteps__number'>
          {index + 1}
        </div>
        <div className='startSteps__text'>
          {step}
        </div>
      </motion.div>
    )}
  </div>
);

export default StartSteps;

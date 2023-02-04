'use client';
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion';
import { newFeatures } from '../constants'


const NewFeatures = () => (
  <div className='newFeatures'>
    {newFeatures.map((feature, index) =>
      <motion.div
        variants={fadeIn('down', 'spring', index * 0.5, 1)}
        className='newFeatures__item'
      >
        <div className='newFeatures__image'>
          <img src={feature.imgUrl} alt="" />
        </div>
        <div className='newFeatures__title'>
          {feature.title}
        </div>
        <div className='newFeatures__text'>
          {feature.subtitle}
        </div>
      </motion.div>
    )}
  </div>
);

export default NewFeatures;

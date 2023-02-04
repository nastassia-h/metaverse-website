'use client';

import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion';
import { insights } from '../constants'

const InsightCard = ({ index, insight }) => (
  <motion.div
    variants={fadeIn('left', 'spring', index * 1, 1)}
    className='insightCard'
  >
    <div className='insightCard__image ibg'
      style={{ backgroundImage: `url(${insight.imgUrl})` }}
    >
    </div>
    <div className='insightCard__content'>
      <div className='insightCard__title'>
        {insight.title}
      </div>
      <div className='insightCard__text'>
        {insight.subtitle}
      </div>
    </div>
    <a href="" className='insightCard__link'>
      <div>
        <img src='./arrow.svg' alt="arrow" />
      </div>
    </a>
  </motion.div>
);

export default InsightCard;

'use client';

import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, title, imgUrl, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={active === id ? 'exploreCard exploreCard-active' : 'exploreCard'}
  >
    <div
      style={{ backgroundImage: `url(${imgUrl})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100%' }}
      onClick={() => { handleClick(id) }}
    >
      <div className='exploreCard__content'>
        <a href='#' className={active !== id ? 'exploreCard__link' : 'exploreCard__link exploreCard__link-active'}></a>
        <p className={active !== id ? 'exploreCard__text exploreCard__text-hidden' : 'exploreCard__text exploreCard__text-visible'}>ENTER METAVERSE</p>
        <p className={active !== id ? 'exploreCard__title exploreCard__title-vertical exploreCard__title-vertical-active' : 'exploreCard__title exploreCard__title-vertical'}>{title}</p>
        <p className={active !== id ? 'exploreCard__title exploreCard__title-horizontal' : 'exploreCard__title exploreCard__title-horizontal exploreCard__title-horizontal-active'}>{title}</p>
        <div className={active === id ? 'exploreCard__bg exploreCard__bg-active' : 'exploreCard__bg'}></div>
      </div>
    </div>
  </motion.div>
);

export default ExploreCard;

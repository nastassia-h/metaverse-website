'use client';

import { motion } from 'framer-motion'

import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyle }) => (
  <motion.p
    variants={textContainer}
    className='typingText'
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title }) => (
  <motion.h2
    variants={textContainer}
    className='TitleText'
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
        variants={textVariant2}
        key={index}
      >
        {letter}
      </motion.span>
    ))}
  </motion.h2>
);

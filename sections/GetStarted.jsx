'use client';

import { motion } from "framer-motion";
import { TypingText, TitleText } from '../components/CustomTexts'
import StartSteps from "../components/StartSteps";
import { staggerContainer, planetVariants } from '../utils/motion';

export { startingFeatures } from '../constants'

const GetStarted = () => (
  <section className="getStarted">
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='getStarted__container container'
    >
      <motion.div
        variants={planetVariants('left')}
        initial='hidden'
        whileInView='show'
        className="getStarted__image"
      >

      </motion.div>
      <div lassName="getStarted__content">
        <TypingText title={'| How Metaverus Works'} textStyle={''} />
        <TitleText title={'Get started with just a few clicks'} textStyle={''} />
        <StartSteps />
      </div>
    </motion.div>
  </section>
);

export default GetStarted;

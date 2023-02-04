'use client';
import { NewFeatures } from "../components";
import { motion } from "framer-motion";
import { TypingText, TitleText } from '../components/CustomTexts'
import { staggerContainer, planetVariants } from '../utils/motion';

const WhatsNew = () => (
  <section className="whatNew">
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='whatNew__container container'
    >
      <motion.div>
        <div lassName="whatNew__content">
          <TypingText title={'| Whats New?'} textStyle={''} />
          <TitleText title={'What\'s new about Metaversus?'} textStyle={''} />
          <NewFeatures />
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        initial='hidden'
        whileInView='show'
        className="whatNew__image"
      >
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;

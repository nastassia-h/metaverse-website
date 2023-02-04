'use client';

import { motion } from "framer-motion";
import { TypingText, TitleText } from '../components/CustomTexts'
import InsightCard from "../components/InsightCard";
import { staggerContainer } from '../utils/motion';
import { insights } from '../constants'

const Insights = () => (
  <section className="insights">
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='insights__container container'
    >
      <TypingText title={'| Insight'} textStyle={''} />
      <TitleText title={'Insight about metaverse'} textStyle={''} />
      <div className='insights__cards'>
        {insights.map((insight, index) =>
          <InsightCard index={index} insight={insight} key={index} />
        )}
      </div>
    </motion.div>
  </section>
);

export default Insights;

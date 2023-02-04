'use client';
import { ExploreCard } from '../components'

import { motion } from "framer-motion";
import { TypingText, TitleText } from '../components/CustomTexts'
import { staggerContainer } from '../utils/motion';

import { exploreWorlds } from "../constants";
import { useState } from 'react';



const Explore = () => {
  const [active, setActive] = useState('world-2')
  return (
    <section id='explore' className="explore">
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className="explore__container container"
      >
        <TypingText title={'| The World'} textStyle={''} />
        <TitleText title={'Choose the world you want to explore'} textStyle={''} />
        <div className="explore__cards">
          {exploreWorlds.map((card, index) =>
            <ExploreCard id={card.id} title={card.title} index={index} imgUrl={card.imgUrl} active={active} handleClick={setActive} />
          )}
        </div>
      </motion.div>
    </section>
  );
}
export default Explore;

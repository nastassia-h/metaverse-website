'use client';

import { motion } from 'framer-motion'
import { footerVariants } from '../utils/motion';

import { socials } from '../constants';

const Footer = () => (
  <footer className="footer container">
    <motion.div
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className='footer__content'
    >
      <div className='footer__header'>
        <p>Enter the Metaverse </p>
        <a href="">
          <img src="./headset.svg" alt="" />
          {`ENTER METAVERSE`}
        </a>
      </div>
      <div className='footer__body'>
        <div>METAVERUS</div>
        <p>Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
        <div className='footer__social'>
          {socials.map((social) =>
            <a href=''>
              <img src={social.url} key={social.name}></img>
            </a>
          )}
        </div>
      </div>
    </motion.div>
    <div className='footer-gradient'></div>
  </footer>
);

export default Footer;

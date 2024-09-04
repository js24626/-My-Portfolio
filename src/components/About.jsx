import React from 'react';
import Me from "../assets/Me.jpg";
import { ABOUT_TEXT } from '../constants';
import {  motion } from "framer-motion"

const About = () => {
  return (
    <div 
    whileInView={{opacity:1 ,y:0 }}
         initial = {{opacity:0 , y:-100}}
         transition={{duration:1.5}}className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h1
      whileInView={{opacity:1 ,y:0 }}
      initial = {{opacity:0 , y:-100}}
      transition={{duration:1.5}} 
       className="my-20 text-center text-[#e1ddd6] text-4xl">
        About <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Me</span>
      </motion.h1>
      <div className="flex flex-wrap items-center">
      
        <motion.div 
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x: -100}}
        transition={{ duration:0.5}}
        className="w-full lg:w-1/2 lg:pl-8 flex justify-center lg:justify-start">
          <div className="w-80 h-100 p-4 rounded-lg shadow-lg flex items-center justify-center">
            <img 
              src={Me} 
              alt="About" 
              className="w-full h-full object-cover rounded-lg" 
            />
          </div>
        </motion.div>
       
        <motion.div
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:pr-8">
          <div className="flex flex-col items-center lg:items-start lg:justify-start">
            <p className="text-neutral-400 p-4">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

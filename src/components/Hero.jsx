import { HERO_CONTENT } from "../constants/index"; 
import profilepic from "../assets/Hassan1.jpeg";
import { delay, motion } from "framer-motion"
const container = (delay) =>({
  hidden: {x:-100, opacity:0},
  visible : {x:0 , opacity : 1 , transition:{duration:0.5, delay:delay}}
})
const Hero = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap items-center">
         
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
              variants={container(0)}
              initial="hidden"
              animate= "visible"
               className="pb-4 text-xl font-extralight  tracking-tight text-[#f0eae0] lg:mt-16 lg:text-4xl">
                Hassan Mehmood
              </motion.h1>
              <motion.span 
               variants={container(0.5)}
              initial="hidden"
              animate= "visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">Front-End Developer</motion.span>
              <motion.p 
               variants={container(1)}
              initial="hidden"
              animate= "visible"className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-400"> {HERO_CONTENT}</motion.p>
            </div>
          </div>
         
          <div className="w-full lg:w-1/2 lg:pr-8">
            <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-90 p-4 rounded-lg  flex items-center justify-center">
                <motion.img 
                initial={{x:100,opacity:0}}
                animate = {{x:0, opacity:1}}
                transition={{duration:1, delay:1.0}}

                  src={profilepic} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;

import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { IoLogoJavascript} from 'react-icons/io5'
import { FaNodeJs} from 'react-icons/fa'
import { SiMongodb} from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaGitAlt } from 'react-icons/fa'
import {  animate, motion } from "framer-motion"


const iconVariants = (duration) => ({
    initial:{y: -10},
    animate:{
        y:[10, -10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse",
        }
    }
})
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
         whileInView={{opacity:1 ,y:0 }}
         initial = {{opacity:0 , y:-100}}
         transition={{duration:1.5}}
        className='my-20 text-center text-neutral-200 text-4xl '>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1 ,x:0 }}
        initial = {{opacity:0 , x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className=' bg-transparent text-4xl text-cyan-400' />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < IoLogoJavascript className=' bg-transparent text-4xl text-orange-500' />
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className=' bg-transparent text-4xl text-green-700' />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className=' bg-transparent text-4xl text-green-500' />
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className=' bg-transparent text-4xl text-cyan-500' />
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGitAlt className='bg-transparent text-4xl text-orange-700' />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies;

import React from 'react'
import { CONTACT } from '../constants'
import {  motion } from "framer-motion"
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
         whileInView={{opacity:1 ,y:0 }}
         initial = {{opacity:0 , y:-100}}
         transition={{duration:0.5}}
        className='my-10 text-center  text-neutral-200 text-4xl'> Get In <span className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'> Touch</span> </motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
             whileInView={{opacity:1 ,x:0 }}
             initial = {{opacity:0 , x:-100}}
             transition={{duration:1}}
            className='my-4 text-neutral-400' > {CONTACT.address}</motion.p>
            <motion.p
             whileInView={{opacity:1 ,y:0 }}
             initial = {{opacity:0 , y:100}}
             transition={{duration:0.5}}
            className="my-4 text-neutral-400"> {CONTACT.phoneNo}</motion.p>
          <a href="#" className='border-b text-neutral-400'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
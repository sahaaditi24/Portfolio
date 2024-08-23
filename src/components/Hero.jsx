
import {styles} from '../styles'


import React from 'react'

const Hero = () => {
  return (
    <section className='relative w-full h-[70vh] sm:h-[100vh] md:h-[75vh] lg:h-[80vh] xl:h-[75vh] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff] pl-2'></div>
            <div className='w-1 sm:h-80 h-40 violet-gradient'></div>

      
        </div>            
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Aditi</span></h1>
               <p className={`${styles.heroSubText} mt-2 text-white-100`}> I'm a Front-End developer, <br className='sm:block hidden'/>Built responsive and user-friendly interfaces<br className='sm:block hidden'/>Developed a strong interest in programming, particularly in Java and MySQL<br className='sm:block hidden'/>Actively participated in hackathons, taking on new challenges.<br className='sm:block hidden'/>Gained experience in leadership roles during college events, focusing on collaboration and innovation.<br className='sm:block hidden'/></p>
            </div>  


      </div>
      
    </section>
  )
}

export default Hero
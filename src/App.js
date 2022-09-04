import React, { useState, useRef } from 'react'
import Spline from '@splinetool/react-spline';
import { IoMenu, IoCodeWorking, IoLogoGithub } from 'react-icons/io5'
import './index.css';
import Luka from './imgs/Luka.jpg'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Projects, SocialLinks } from './data'
import { AnimatePresence, motion } from 'framer-motion'

const App = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <AnimatePresence>


      <div key={9999} className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20 font-mons">
        <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center shadow-2xl">
            <p className='text-lg'>Luka Gorgadze</p>
            <div className="hidden md:flex items-center gap-6 ml-auto">
              <a href="#home" className='text-base text-textBase hover:text-slate-800 cursor-pointer duration-100 ease-in-out'>Home</a>
              <a href="#about" className='text-base text-textBase hover:text-slate-800 cursor-pointer duration-100 ease-in-out'>about</a>
              <a href="#projects" className='text-base text-textBase hover:text-slate-800 cursor-pointer duration-100 ease-in-out'>projects</a>
              <a href="#contact" className='text-base text-textBase hover:text-slate-800 cursor-pointer duration-100 ease-in-out'>contact</a>
              <a href="#download" className='ml-auto text-base text-textBase hover:text-slate-800 cursor-pointer border border-textBase
            px-2 py-2 rounded-2xl hover:border-gray-800 duration-100 ease-in-out'>Download CV</a>
            </div>
            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}>
              <IoMenu className='text-2xl text-textBase' />
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-2xl fixed top-24 right-16 flex
              flex-col items-center justify-evenly gap-6" >
                <a href="#home" className='text-base text-textBase hover:text-slate-800 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}>Home</a>
                <a href="#about" className='text-base text-textBase hover:text-slate-800 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}>about</a>
                <a href="#projects" className='text-base text-textBase hover:text-slate-800 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}>projects</a>
                <a href="#contact" className='text-base text-textBase hover:text-slate-800 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}>contact</a>
                <a href="#download" className='text-base text-textBase hover:text-slate-800 cursor-pointer border border-textBase
            px-2 py-2 rounded-2xl hover:border-gray-800 duration-100 ease-in-out'>Download CV</a>

              </motion.div>
            )}
          </div>
        </nav>

        <div className="relative w-[80%] mt-[100px]" id='home'>
          <div className='h-[500px]'>
            <Spline scene="https://prod.spline.design/mA3OLrEbdNTFAYQp/scene.splinecode" className='rounded-2xl' />
          </div>
          <div className='absolute bottom-10 w-full justify-center items-center flex'>
            <div className="shadow-md p-4 flex items-center justify-center rounded-3xl">
              <p className='text-white'> Press and drag to orbit</p>
            </div>
          </div>
        </div>

        {/* Main Sections */}

        {/* About Section */}
        <main className='w-[80%] mt-50'>
          <section className='w-full grid gap-y-0 grid-cols-1 md:grid-cols-2 gap-4 my-24'
            id='about'>
            <div className="w-full h-420 flex items-center justify-center">
              <div className='w-275 h-340 border-2 bg-blue-200 rounded-[30px] relative ' >
                <img src={Luka} alt="" className='w-full h-full  border-2 absolute -right-4 top-5 object-cover rounded-[30px] drop-shadow-2xl ' />
              </div>
            </div>

            {/* Content */}
            <div className='w-[90%] h-[500px] flex flex-col items-center justify-center text-white my-auto mx-auto'>
              <p className='p-5 my-auto'> Hey, welcome to my portfolio page, I am an undergraduate CS student (studying at <a className='text-blue-600' href="https://www.kiu.edu.ge/">KIU </a>) from Georgia  and a Former Unity Developer at <a className='text-blue-600' href="https://www.happybat.com/index.php?active=Home">Happy Bat. </a>
                I have always been passionate about programming and math related subjects. I started my coding journey in game development and have been working in industry for more than a year. Not long ago, me and my friends decided to build our own
                game dev company and left our full time jobs to make this dream of ours a reality, currently I am looking for a part time job in web development to broaden my skills as a developer and to gain experience </p>

            </div>
          </section>

          {/* TimeLine */}

          <section className='w-full flex items-center justify-center'>
            <VerticalTimeline>
              {
                Experience && Experience.map((elem) => {
                  return (<VerticalTimelineElement
                    key={elem.id}
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date={elem.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={elem.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">{elem.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{elem.location}</h4>
                    <p>
                      {elem.description}
                    </p>
                  </VerticalTimelineElement>
                  )
                })
              }
            </VerticalTimeline>
          </section>
          {/* Projects section */}

          <section className='flex flex-row flex-wrap items-center justify-evenly my-24 gap-2' id='projects'>
            {Projects && Projects.map((elem) => {
              return <div key={elem.id} className="border border-white-800 rounded-2xl p-2 min-w-[375px] h-[400px] md:max-w-[375px] hover:border-blue-500 duration-100
          ease-in-out">
                <p className='text-lg text-white uppercase text-center'>
                  {elem.name.length > 20 ? `${elem.name.slice(0, 20)}...` : elem.name}
                </p>
                <img src={elem.imageSrc} alt="" className='w-[800px] h-[200px] object-cover rounded-2xl my-4' />
                <div className='flex flex-1 items-center justify-between'>
                  <div>
                    <p className='text-sm text-gray-500 text-center'>Technologies:  {elem.techs}
                  
                    </p>

                    <span className='block text-m text-white w-[80%] mx-auto my-2'>
                      {elem.description}
                    </span>
                  </div>

                  <a href={elem.github} target="_blank">
                    <motion.div
                      whileTap={{ scale: 0.2 }}>
                      <IoLogoGithub className='text-white text-3xl cursor-pointer'></IoLogoGithub>
                    </motion.div>
                  </a>
                </div>
              </div>
            })}
          </section>
          {/* Contact */}
          <section id='contact' className='flex flex-col items-center justify-center w-full my-24'>
            <p className='text-2xl text-white capitalize'>Follow Me</p> 
            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {
                SocialLinks && SocialLinks.map((elem) => {
                  return <motion.a target={"_blank"} key={elem.id} whileTap={{ scale: 0.8 }} href={elem.link} className='w-full md:w-auto px-3 md:px-8 py-5 border border-white rounded-2xl
             hover:border-blue-600 duration-100 ease-in-out cursor-pointer flex  items-center
              justify-center gap-3"'>
                    {/* <IoLogoGithub className='text-white text-3xl cursor-pointer' /> */}
                    {elem.iconSrc}
                    <p className='text-lg text-white'>{elem.name}</p>
                  </motion.a>

                })

              }
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App

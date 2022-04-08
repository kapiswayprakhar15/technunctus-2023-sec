import React,{useState,useRef} from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion,useViewportScroll,useTransform} from 'framer-motion'
import { useInView } from "react-intersection-observer"
import Link from 'next/link'
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import events from "../utils/events"
import Card from "../components/Card"
import Profile from "../components/Profile"
import eventHeads from "../utils/profile"
import Tilt from "react-parallax-tilt"
import { teamHead } from "../utils/framer"
import {useRouter} from "next/router"

export default function Home() {

  const { scrollY, scrollYProgress } = useViewportScroll()
  const { ref: aboutContainer, inView } = useInView({ threshold: 0.2 });
  const cursorRef=useRef(null)
  const titleSponsorRef=useRef(null)
  const router=useRouter()


  const transform1 = useTransform(scrollY, [2200, 3000], [0.2, 1]);
  const transform2 = useTransform(scrollY, [1800, 2200], [0.2, 1]);
  const transform3 = useTransform(scrollY, [1400, 1800], [0.2, 1]);
  const transform4 = useTransform(scrollY, [1000, 1400], [0.2, 1]);

  const exactLocation=(e)=>{
    console.log(e.pageX,e.pageY,cursorRef.current)
    let bounds = titleSponsorRef.current.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;

    cursorRef.current.style.left=x+"px";
    cursorRef.current.style.top=y+"px";
  }

  return (
    <div>
      <Head>
        <title>Technunctus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid sm:grid-cols-[0.6fr,0.25fr] relative items-center coverBg"
        style={{height:"calc(100vh - 92px)"}}
           >
         <Image src="/static/page.png"
         alt="logo headers"
         layout="fill"
         objectFit="cover"
         objectPosition={"bottom"}
         className="-z-10"
         />
         <div className="sm:p-20 text-center sm:text-left">
         <motion.p className="text-xl sm:text-3xl text-white"> IIT Jammu presents</motion.p>

           <motion.p className="text-5xl sm:text-9xl  font-bold "> Tec<motion.span 
            
             className="hTitle">h</motion.span>nunctus</motion.p>
          <motion.p className="text-xl sm:text-3xl text-white"> 2022</motion.p>

           <button className="gradientButton mt-4 cursor-pointer" onClick={()=>router.push("/e")}>Check Events</button>
         </div>
         <div className='hidden sm:block relative'>
           <Image
             src="/static/logo.png"
             alt="Technunctus Logo"
             layout='fixed'
             height={"400"}
             width={"400"}
             objectFit='contain'
            />
         </div>
      </div>

      <motion.div 
        initial="initial"
        exit="exit"
        animate={inView && "animate"}
        variants={teamHead}
        ref={aboutContainer} className="mb-12 sm:mb-0 grid place-items-center">
        <div className="bg-black mx-8 sm:mx-20 rounded ">
            <div className='grid sm:grid-cols-[0.3fr,0.7fr] justify-center  items-center'>
              <div className="h-80 sm:h-full relative gradientRightBorder">
                <Image 
                  src="https://images.unsplash.com/photo-1518709911915-712d5fd04677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVuZXJneXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
                  alt="About Team "
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 sm:p-12">
                <p className='text-3xl mb-8'>Word From Team</p>
                <p className='text-sm sm:text'>Technunctus’22 is a platform for students to manifest their talents by working on challenging problems and to learn and grow from the various talks given by industry experts on contemporary topics and issues. It boasts having more than two dozen events from a multitude of fields like robotics, astronomy, finance, programming and so forth spread across 3 days of engagement, excitement and illumination. It is a pan-India event with participants from all IITs and NITs as well as reputed colleges from Jammu and Kashmir.</p>
                <Link
                  href="/a"
                >
                  <a className="gradientButton inline-block mt-4">Read More</a>
                </Link>
              </div>
            </div>
        </div>
      </motion.div>


      {/* <div ref={titleSponsorRef} onMouseMove={(e)=>{exactLocation(e)}} className="pt-20 sm:pt-40 overflow-hidden pb-20 grid place-items-center relative">
        <div ref={cursorRef} className="cursor"></div>
        <div className="text-center text-2xl sm:text-3xl">
          <p>Title Sponsors</p>
          <div>
            <Link
              href="/titlesponsorswebsite"
            >
              <a className='flex justify-center text-6xl sm:text-7xl m-4'>
                  <KeyboardCommandKeyIcon className="text-[#39ff14]" style={{fontSize:"5rem"}}/>
                  <p className="ml-4 font-semibold">Android</p>
              </a>
            </Link>
            <p>Marsh McLennan Global Services India Pvt Ltd</p>
          </div>
        </div>
      </div> */}


      <div className="sm:h-screen grid place-items-center">
        <div>
          <p className='text-3xl my-8 text-center'>Events</p>
          <div className='grid sm:grid-cols-4 gap-8 mx-8 sm:mx-20'>
            {events.slice(0,4).map((item,index)=>{
              return(
                <Card key={index} {...item}/>
              )
            }) }
          </div>
          <Link href="/e">
            <a className="hover:text-underline text-center block my-4">Click Here to load more</a>
          </Link>
        </div>
      </div>

      <div className="container">
            <p className="glitch">
              <span aria-hidden="true">Let&apos;s do it</span>
              Let&apos;s do it
              <span aria-hidden="true">Let&apos;s do it</span>
            </p>
      </div>

      <motion.div className="sm:h-screen grid place-items-center">
        <div>
          <p className='text-3xl my-8 mr-8 text-center'>Team Members</p>
          <div className='grid sm:grid-cols-3 gap-8 mx-8 sm:mx-20'>
            {eventHeads.slice(0,4).map((item,index)=>{
              return(
                <Tilt key={item.key}>
                  <Profile {...item}/>
                </Tilt>
              )
            }) }
            <Link
              href="/t"
              passHref={true}
            >
              <motion.a 
                whileTap={{scale:0.95}}
                className='m-1 grid place-items-center border border-[#00ffff] rounded'>
                  <p>See More...</p>
              </motion.a>
            </Link>
          </div>
        </div>
      </motion.div>


    </div>
  )
}

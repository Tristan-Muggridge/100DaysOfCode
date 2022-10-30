import Head from 'next/head'

// Icons
import { BiSearch, BiPlay, BiPause, BiMenu, BiChevronRight } from 'react-icons/bi'

// Apparently can't use img in React? Problem for another day because this works!
import Image from "next/image"
import MuggleLogo from "../../public/Muggle/logo.svg"

import carousel1 from "../../public/Muggle/carousel1.jpg"
import carousel2 from "../../public/Muggle/carousel2.jpg"
import carousel3 from "../../public/Muggle/carousel3.jpg"

import {navDropDownData} from "../../data/navDropDownData";
import { useState, useEffect } from 'react'
import { getFontDefinitionFromNetwork } from 'next/dist/server/font-utils'

const navHoverables = {Study: "Study", "Current Students": "Current Students", Research: "Research", Alumni: "Alumni", About: "About", None: "None", Magnify:"Magnify"};
const carouselImages = [
  {img: carousel1, alt: "", bannerHeadline: "Rise in global rankings", bannerBlurb: () => {return (<span>Muggle University has been named in the Top 301-350 in the Time Higher Education World University Rankings. <a className='text-blue-neutral hover:underline hover:cursor-pointer'> Read more. </a></span>)}}, 
  {img: carousel2, alt: "", bannerHeadline: "Applications now open", bannerBlurb: () => {return (<span> New opportunities, big ambitions. <a className='text-blue-neutral hover:underline hover:cursor-pointer'> Apply now </a> to start this November </span>)}}, 
  {img: carousel3, alt: "", bannerHeadline: "A different path to your degree", bannerBlurb: () => {return (<span>Discover our free <a className='text-blue-neutral hover:underline hover:cursor-pointer'> pathway programs </a> with a guaranteed entry to most Muggle degrees </span>)}}
];

export default function Home() {

  const onResize = () => window.innerWidth > 819 ? setMobileMode(false) : setMobileMode(true)
  const updateActiveCarouselImage = (element) => {setActiveCarouselImage(element)}

  const [ hoveredNav, setHoveredNav ] = useState(navHoverables.None);
  const [ activeCarouselImage, setActiveCarouselImage ] = useState(0);
  const [ playing, setPlaying ] = useState(true);
  const [ windowDimensions, setWindowDimensions ] = useState({height: 0, width: 0});
  const [ mobileMode, setMobileMode ] = useState(false);

  useEffect(() => {
    if (playing == false) return;

    const interval = setInterval(() => {
      const nextImage = activeCarouselImage + 1 < carouselImages.length ? activeCarouselImage + 1 : 0;
      updateActiveCarouselImage( nextImage );
    }, 6000);
  
    return () => {
      clearInterval(interval);
    };
  }, [updateActiveCarouselImage, setPlaying]);


  useEffect(() => {
    setWindowDimensions({height: window.innerHeight, width: window.innerWidth});
    window.innerWidth > 819 ? setMobileMode(false) : setMobileMode(true);
    window.addEventListener('resize', onResize);
  }, []);

  return (
    <div className='w-full'>
      <Head>
        <title>Mock-Muggle Branding</title>
        <meta name="description" content="Attempting to recreate the Muggle home page to learn more about front-end development and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Education Notice */}
      {/* <h1 className='text-4xl absolute left-1/2 transform -translate-x-1/2 z-10'> FOR EDUCATIONAL PURPOSES </h1> */}
      <main className='bg-white'>

        {/* Navigation Menu */}
        
          <nav className="px-4 pt-4 flex justify-between max-w-6xl align-middle items-center mx-auto -mb-[16px]">
          { 
            mobileMode == false 
            ? 
            <>
            <h1 className='w-36'> <a href="http://localhost:3000/Muggle"> <Image src={MuggleLogo} alt="Muggle University Logo" className='-translate-y-3'/> </a></h1>
              <div className='flex flex-col justify-center'>
                
                <ul className=' flex justify-between gap-8 ml-auto p-4'>
                  {
                    ["LIBRARY", "INTERNATIONAL", "CONTACT", "UCONNECT"].map((e, indx) => {
                      return (
                        <li key={indx} className='text-sm text-blue-neutral hover:underline hover:cursor-pointer'> <a href="http://google.com"> {e} </a> </li>
                      )})
                  }
                </ul>

                <ul className=' flex justify-between '>
                  {
                    ["Study", "Current Students", "Research", "Alumni", "About"].map((e, indx) => {
                      return (
                        <li key={indx} 
                            className={hoveredNav != navHoverables[e] ? 'mt-3 px-4 pb-4 text-lg text-blue-dark || select-none' : 'mt-3 px-4 pb-2 text-lg text-blue-dark select-none || border-b-blue-neutral border-b-4 cursor-pointer'}
                            onMouseEnter={ () => {setHoveredNav(navHoverables[e])} }
                            onMouseLeave={ () => {setHoveredNav(navHoverables.None)}}
                        > {e} </li>
                      )})
                  }
                  {/* <div className='text-lg blue-dark px-4 hover:border-b-blue-neutral hover:border-b-4 -mb-0.5 pb-6 mt-4 hover:cursor-pointer'> */}
                  <div className='p-2 text-blue-dark my-auto || hover:outline hover:outline-1 hover:outline-blue-dark hover:rounded-full hover:cursor-pointer hover:text-blue-neutral'>
                    <BiSearch className='text-2xl blue-dark inline '/>
                  </div>
              </ul>
            </div>  
          </> 
          : 
          <>
              <h1 className='w-44'> <a href="http://localhost:3000/Muggle"> <Image src={MuggleLogo} alt="Muggle University Logo"/> </a></h1>
              <BiMenu className=' w-10 h-10 || hover:text-blue-neutral hover:cursor-pointer'/>
          </>
        }
        </nav>

        
        {/* Navigation Sub-Menus */}
        <div className={hoveredNav != navHoverables.None ? 'bg-gray-100 h-96 absolute w-full -mt-0.5' : 'hidden'} onMouseEnter={() => {setHoveredNav(hoveredNav)}} onMouseLeave={() => {setHoveredNav(navHoverables.None)}}>
          <h2 className='p-10 text-4xl'>{hoveredNav}</h2>
          <div className='px-6 h-20 w-full grid grid-cols-4'>    
            {
              navDropDownData[hoveredNav].Links.map((column) => {
                return (
                  <ul>
                    {column.map((row) => { return (<li className='py-1 px-4 hover:bg-gray-200 mx-2'> {row} </li>) })}
                  </ul>
              )})
            }
          <div className='grid grid-cols-4'>
            <div className=' bg-gray-300 w-0 border h-40 -translate-y-3 col-span-1 mr-0'/>
              <div className='col-span-2 ml-0'>
                <p className='text-sm font-extralight'>{navDropDownData[hoveredNav].Prompt}</p>
                <button className='mt-4 border border-black rounded-2xl py-2 px-6 w-auto hover:bg-gray-200'>{navDropDownData[hoveredNav].ButtonText}</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Covid Notice */}
        <section className=''>
          <div className='h-auto bg-blue-dark text-white '>
              <p className='py-1 text-center text-sm align-middle'> Visit our <b> COVID-19 webpage </b> for the latest updates. </p>
          </div>
        </section>

        {/* Carousel */}
        <section>
          <div className='h-[600px] min-w-full mx-auto'>
              <Image src={carouselImages[activeCarouselImage].img} alt={carouselImages[activeCarouselImage].alt} style={{"object-fit": "cover", "object-position": "50%, 20%", "minHeight": "100%", "maxHeight": "100%", minWidth: "100%", "userSelect": "none"}}/>
          </div>

            {/* Image Overlayed Elements  */}
            <div className='relative'> 
              {/* Carousel Playback */}
              <div className='-translate-y-24 -my-20'>
                <ul className='flex justify-center mx-auto items-center'>
                  
                  {
                    carouselImages.map((e, indx) => {
                      return (
                        <button 
                          key={indx}
                          className={ indx == activeCarouselImage 
                            ? ' bg-white rounded-full w-4 h-4 hover:bg-blue-neutral mx-1'
                            :'border-4 border-white rounded-full w-4 h-4 hover:border-blue-neutral mx-1'
                          }
                          onClick={() => {updateActiveCarouselImage(indx)}} />
                      )
                    })
                  }
                  
                  <BiPause  className={ playing == true ? 'text-3xl hover:text-blue-neutral text-white' : 'hidden'} onClick={() => {setPlaying(false)}}/>
                  <BiPlay className={ playing ? 'hidden' : 'text-3xl hover:text-blue-neutral text-white'} onClick={() => {setPlaying(true)}}/>
                </ul>
              </div>
            
              {/* Banner */}
              <div className='bg-white text-center w-3/5 h-44 rounded-3xl p-4 mx-auto max-w-lg mb-16'>
                <h1 className='text-4xl font-semibold'> { carouselImages[activeCarouselImage].bannerHeadline } </h1>
                <p className='text-lg mt-4'> {carouselImages[activeCarouselImage].bannerBlurb()} </p>
              </div>
            </div>
          </section>

          {/* Find a degree */}
          <section className='max-w-6xl text-center mx-auto mb-10 w-[80%]'>
            <div className=''>
              <hr className='mx-auto'/>
              <h2 className='text-4xl my-10'> Find a degree </h2>

              <form action="" method="post" className='outline outline-black outline-[1px] rounded-md w-2/3 mx-auto flex justify-between mb-8 '>
                  <input type="text" placeholder='Search Muggle degrees' name="degreeSearch" id="degreeSearch" className="pl-4 w-full"/>                
                  <BiSearch className='text-blue-neutral bg-blue-dark h-14 w-12 py-3 || hover:cursor-pointer hover:text-blue-dark hover:bg-blue-neutral '/>
              </form>
            </div>
            
            {/* Links to study areas */}
            <ul className={ mobileMode == true ? 'grid grid-cols-2 gap-3' : 'grid grid-cols-3 gap-3'}>
              {
                [
                  "Argiculture & Environment", "Arts & Humanities", "Aviation", 
                  "Business & Management", "Education & Teaching", "Engineering", 
                  "Information & Communication Technology", "Law & Criminology", "Media & Communication",
                  "Nursed & Allied Health", "Psychology & Human Services", "Sciences",
                  "Surveying & Built Environment", "Visual & Performing Arts", ( <a href="#" className='text-blue-neutral font-semibold'> + New degrees </a> )
                ].map((e) => { return (
                  <li className='hover:cursor-pointer border-b-2 hover:border-b-blue-neutral'>
                    <div className='text-left flex justify-between items-center py-2 mb-2 '>
                      <p> {e} </p>
                      <BiChevronRight className='text-xl'/>
                    </div>
                  </li>
                )})
              }
            </ul>

            <h2 className='text-4xl mt-16 mb-8'> Other study options </h2>

            <ul className={ mobileMode == true ? 'grid grid-cols-2 gap-3' : 'grid grid-cols-3 gap-3'}>
                {
                  [
                    "Double degrees", "English Language", "Pathways",
                    "Short programs", "Single courses", "Muggle Upskill"
                  ].map((e) => { return (
                    <li className='hover:cursor-pointer border-b-2 hover:border-b-blue-neutral'>
                      <div className='text-left flex justify-between items-center py-2 mb-2 '>
                        <p> {e} </p>
                        <BiChevronRight className='text-xl'/>
                      </div>
                    </li>
                  )})
                }
            </ul>
            
            <h2 className='text-2xl mt-16 mb-5'> Already know what you want to study? </h2>
            
            <div className='mx-auto'>
              <button className='py-4 px-8 m-5 w-22 bg-blue-neutral text-blue-dark rounded-2xl font-semibold'> Apply <BiChevronRight className='text-xl inline'/> </button>
              {mobileMode == true ? <br /> : <></>}
              <button className='py-4 px-8 m-5 text-blue-neutral bg-blue-dark rounded-2xl font-semibold'> Enquire <BiChevronRight className='text-xl inline'/> </button>
            </div>
          </section>

      </main>

    </div>
  )
}

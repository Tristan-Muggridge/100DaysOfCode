import Head from 'next/head'

import { NavBar } from './NavBar'

// Icons
import { BiSearch, BiPlay, BiPause, BiChevronRight } from 'react-icons/bi'

// Apparently can't use img in React? Problem for another day because this works!
import Image from "next/image"

import carousel1 from "../../public/Muggle/carousel1.jpg"
import carousel2 from "../../public/Muggle/carousel2.jpg"
import carousel3 from "../../public/Muggle/carousel3.jpg"

import { useState, useEffect } from 'react'

// const navHoverables = {Study: "Study", "Current Students": "Current Students", Research: "Research", Alumni: "Alumni", About: "About", None: "None", Magnify:"Magnify"};
const carouselImages = [
  {img: carousel1, alt: "", bannerHeadline: "Rise in global rankings", bannerBlurb: () => {return (<span>Muggle University has been named in the Top 301-350 in the Time Higher Education World University Rankings. <a className='text-blue-neutral hover:underline hover:cursor-pointer'> Read more. </a></span>)}}, 
  {img: carousel2, alt: "", bannerHeadline: "Applications now open", bannerBlurb: () => {return (<span> New opportunities, big ambitions. <a className='text-blue-neutral hover:underline hover:cursor-pointer'> Apply now </a> to start this November </span>)}}, 
  {img: carousel3, alt: "", bannerHeadline: "A different path to your degree", bannerBlurb: () => {return (<span>Discover our free <a className='text-blue-neutral hover:underline hover:cursor-pointer'> pathway programs </a> with a guaranteed entry to most Muggle degrees </span>)}}
];

export default function Home() {

  const updateActiveCarouselImage = (element) => {setActiveCarouselImage(element)}

  // const [ hoveredNav, setHoveredNav ] = useState(navHoverables.None);
  const [ activeCarouselImage, setActiveCarouselImage ] = useState(0);
  const [ playing, setPlaying ] = useState(true);

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

  return (
    <div className='w-full'>
      <Head>
        <title>Mock-Muggle Branding</title>
        <meta name="description" content="Attempting to recreate the UniSQ home page to learn more about front-end development and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white'>

        <NavBar />

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
            <ul className='grid grid-cols-2 gap-3 md:grid-cols-3'>
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

            <ul className='grid grid-cols-2 gap-3 md:grid-cols-3'>
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
              <button className='py-4 px-8 m-5 w-22 bg-blue-neutral text-blue-dark rounded-2xl font-semibold md:w-40 w-full'> Apply <BiChevronRight className='text-xl inline'/> </button>
              <button className='py-4 px-8 m-5 text-blue-neutral bg-blue-dark rounded-2xl font-semibold md:w-40 w-full'> Enquire <BiChevronRight className='text-xl inline'/> </button>
            </div>
          </section>

      </main>

    </div>
  )
}

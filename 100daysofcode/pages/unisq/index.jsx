import Head from 'next/head'

// Icons
import { BiSearch, BiPlay, BiPause, BiMenu } from 'react-icons/bi'

// Apparently can't use img in React? Problem for another day because this works!
import Image from "next/image"
import unisqLogo from "../../public/UniSQ/logo.svg"

import carousel1 from "../../public/unisq/carousel1.jpg"
import carousel2 from "../../public/unisq/carousel2.jpg"
import carousel3 from "../../public/unisq/carousel3.jpg"

import { navDropDownData } from './navDropDownData'
import { useState, useEffect } from 'react'

const navHoverables = {Study: "Study", "Current Students": "Current Students", Research: "Research", Alumni: "Alumni", About: "About", None: "None", Magnify:"Magnify"};
const carouselImages = [
  {img: carousel1, alt: "", bannerHeadline: "Rise in global rankings", bannerBlurb: "The University of Southern Queensland has been named in the Top 301-350 in the Time Higher Education World University Rankings."}, 
  {img: carousel2, alt: "", bannerHeadline: "ヤッホ～　かわいいッピ", bannerBlurb: "サキュバスじゃないけど、我慢してみるよ～."}, 
  {img: carousel3, alt: "", bannerHeadline: "奴ら勉強中をふりしてるっぽい", bannerBlurb: "正直言うと。。。多分ヘンタイを見てるところです"}
];

export default function Home() {

  const [ hoveredNav, setHoveredNav ] = useState(navHoverables.None);
  const [ activeCarouselImage, setActiveCarouselImage ] = useState(0);
  const [ playing, setPlaying ] = useState(true);
  const [ windowDimensions, setWindowDimensions ] = useState({height: 0, width: 0});

  useEffect(() => {
    if (playing == false) return;

    const interval = setInterval(() => {
      const nextImage = activeCarouselImage + 1 < carouselImages.length ? activeCarouselImage + 1 : 0;
      setActiveCarouselImage( nextImage );
    }, 6000);
  
    return () => {
      clearInterval(interval);
    };
  });

  const onResize = () => setWindowDimensions({height: window.innerHeight, width: window.innerWidth}); console.debug(windowDimensions)

  useEffect(() => {
    setWindowDimensions({height: window.innerHeight, width: window.innerWidth});
    window.addEventListener('resize', onResize);
  }, []);

  return (
    <div className='w-full'>
      <Head>
        <title>Mock-UniSQ Branding</title>
        <meta name="description" content="Attempting to recreate the UniSQ home page to learn more about front-end development and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Education Notice */}
      {/* <h1 className='text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'> FOR EDUCATIONAL PURPOSES </h1> */}
      <main className='bg-white'>

        {/* Navigation Menu */}
        
          <nav className=" px-4 pt-4 flex justify-between max-w-6xl align-middle items-center mx-auto">
          { 
            windowDimensions.width > 819 
            ? 
            <>
            <h1 className='w-44'> <a href="http://localhost:3000/unisq"> <Image src={unisqLogo} alt="University of Southern Queensland logo"/> </a></h1>
              <div className='flex flex-col justify-center gap-4'>
                <ul className=' flex justify-between gap-8 ml-auto'>
                  {
                    ["LIBRARY", "INTERNATIONAL", "CONTACT", "UCONNECT"].map((e, indx) => {
                      return (
                        <li key={indx} className='text-sm text-gray-600 hover:underline hover:cursor-pointer'> <a href="http://google.com"> {e} </a> </li>
                      )})
                  }
                </ul>
                <ul className=' flex justify-between'>
                  {
                    ["Study", "Current Students", "Research", "Alumni", "About"].map((e, indx) => {
                      return (
                        <li key={indx} 
                            className={hoveredNav != navHoverables[e] ? 'text-lg text-gray-700 pb-4 px-4' : 'text-lg text-gray-700 px-4 border-b-yellow-500 border-b-4 pb-0 cursor-pointer'}
                            onMouseEnter={ () => {setHoveredNav(navHoverables[e])} }
                            onMouseLeave={ () => {setHoveredNav(navHoverables.None)}}
                        > {e} </li>
                      )})
                  }
                  <div className='hover:border-b-yellow-500 hover:border-b-4 hover:cursor-pointer hover:pb-0 || '>
                    <BiSearch className='text-2xl text-gray-700 '/>
                  </div>
              </ul>
            </div>  
          </> 
          : 
          <>
              <h1 className='w-44'> <a href="http://localhost:3000/unisq"> <Image src={unisqLogo} alt="University of Southern Queensland logo"/> </a></h1>
              <BiMenu className=' w-10 h-10 || hover:text-yellow-500 hover:cursor-pointer'/>
          </>
        }
        </nav>

        
        {/* Navigation Sub-Menus */}
        <div className={hoveredNav != navHoverables.None ? 'bg-gray-100 h-96 absolute' : 'hidden'} onMouseEnter={() => {setHoveredNav(hoveredNav)}} onMouseLeave={() => {setHoveredNav(navHoverables.None)}}>
          <h2 className=' p-10 text-4xl'>{hoveredNav}</h2>
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
        <section className='m-0'>
          <div className='h-auto bg-purple-900 text-white'>
              <p className='py-1 text-center text-sm align-middle'> Visit our <b> COVID-19 webpage </b> for the latest updates. </p>
          </div>
        </section>

        {/* Carousel */}
        <section>
          <div className='h-[600px] min-w-full'>
              <Image src={carouselImages[activeCarouselImage].img} alt={carouselImages[activeCarouselImage].alt} style={{"object-fit": "cover", "object-position": "50% 20%", "minHeight": "100%", "maxHeight": "100%", "userSelect": "none"}}/>
          </div>

            {/* <div className='-translate-y-32 '>  */}
            <div className='relative'> 
              {/* Carousel Playback */}
              <div className='-translate-y-24 -my-20'>
                <ul className='flex justify-center mx-auto items-center'>
                  
                  {
                    carouselImages.map((e, indx) => {
                      return (
                        <button 
                          key={indx}
                          className={ activeCarouselImage != indx 
                            ? 'border-2 border-white rounded-full w-6 h-6 hover:border-yellow-500 mx-1' 
                            : 'border-2 border-white bg-white rounded-full w-6 h-6 hover:border-yellow-500 mx-1'}
                          onClick={() => {setActiveCarouselImage(indx)}} />
                      )
                    })
                  }
                  
                  <BiPause  className={ playing == true ? 'text-3xl hover:text-yellow-500 text-white' : 'hidden'} onClick={() => {setPlaying(false)}}/>
                  <BiPlay className={ playing ? 'hidden' : 'text-3xl hover:text-yellow-500 text-white'} onClick={() => {setPlaying(true)}}/>
                </ul>
              </div>
            
              {/* Banner */}
              <div className='bg-white text-center w-3/5 rounded-3xl p-4 mx-auto max-w-4xl mb-16'>
                <h1 className='text-4xl font-semibold'> { carouselImages[activeCarouselImage].bannerHeadline } </h1>
                <p className='text-lg mt-4'> {carouselImages[activeCarouselImage].bannerBlurb}
                   <a className='text-blue-500 hover:underline hover:cursor-pointer'> Read more. </a>
                </p>
              </div>
            </div>
          </section>

          {/* Find a degree */}
          <div className='max-w-6xl mx-auto text-center '>
            <hr className='w-[80%] mx-auto'/>
            <h2 className='text-4xl my-10'> Find a degree </h2>

            <form action="" method="post">
              <input type="text" placeholder='Search UniSQ degrees' name="degreeSearch" id="degreeSearch" className="border-black border-[1px] rounded-lg w-80 h-8 p-6" />
            </form>
          </div>

      </main>

    </div>
  )
}

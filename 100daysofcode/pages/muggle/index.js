import Head from 'next/head'
import Image from 'next/image'

// Components
import NavBar from './NavBar'
import Carousel from './Carousel'
import Button from './Button'

// Icons
import { BiSearch, BiChevronRight } from 'react-icons/bi'
import { IoRibbonOutline } from 'react-icons/io5'
import { SlBookOpen } from 'react-icons/sl'
import { BsPeople } from 'react-icons/bs'

import carousel1 from "../../public/Muggle/carousel1.jpg"
import carousel2 from "../../public/Muggle/carousel2.jpg"
import carousel3 from "../../public/Muggle/carousel3.jpg"

import news1 from "../../public/Muggle/news1.jpg"
import news2 from "../../public/Muggle/news2.jpg"

// const navHoverables = {Study: "Study", "Current Students": "Current Students", Research: "Research", Alumni: "Alumni", About: "About", None: "None", Magnify:"Magnify"};
const carouselImages = [
  {img: carousel1, alt: "", bannerHeadline: "Rise in global rankings", bannerBlurb: () => {return (<span>Muggle University has been named in the Top 301-350 in the Time Higher Education World University Rankings. <a className='text-blue-neutral hover:underline hover:cursor-pointer'> Read more. </a></span>)}}, 
  {img: carousel2, alt: "", bannerHeadline: "Applications now open", bannerBlurb: () => {return (<span> New opportunities, big ambitions. <a className='text-blue-neutral hover:underline hover:cursor-pointer'> Apply now </a> to start this November </span>)}}, 
  {img: carousel3, alt: "", bannerHeadline: "A different path to your degree", bannerBlurb: () => {return (<span>Discover our free <a className='text-blue-neutral hover:underline hover:cursor-pointer'> pathway programs </a> with a guaranteed entry to most Muggle degrees </span>)}}
];

export default function Home() {
  
  return (
    <div className='w-full scroll-smooth'>
      <Head>
        <title>Mock-Muggle Branding</title>
        <meta name="description" content="Attempting to recreate the UniSQ home page to learn more about front-end development and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white'>

        {/* Navigation Bar */}
        <NavBar />

        {/* Covid Notice */}
        <section className=''>
          <div className='h-auto bg-blue-dark text-white '>
              <p className='py-1 text-center text-sm align-middle'> Visit our <b> COVID-19 webpage </b> for the latest updates. </p>
          </div>
        </section>

        {/* Carousel */}
        <Carousel carouselImages={carouselImages}/>

          {/* Find a degree */}
          <section className='max-w-6xl text-center mx-auto mb-10 w-[80%]'>
            <div className=''>
              <hr className='mx-auto'/>
              <h2 className='text-4xl my-10'> Find a degree </h2>

              <form action="" method="post" className='mb-14 mx-auto outline flex justify-between outline-black outline-[1px] rounded-md w-2/3'>
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
              <Button text={'Apply'} bg={'blue-neutral'} fontColour={'blue-dark'} />
              <Button text={'Enquire'} bg={'blue-dark'} fontColour={'blue-neutral'} />
            </div>
          </section>
      </main>

      <section className='w-full bg-blue-dark'>
        <div className='h-96 grid grid-cols-3 justify-items-center text-white'>
          
          <div className='py-24 px-14 mx-18 text-center'> 
            <IoRibbonOutline size={70} className='mx-auto'/>
            <p className='my-5 text-3xl font-semibold'> No. 1 </p>
            <p className='md:text-lg lg:text-2xl'> Ranked No. 1 internationally for magically-challenged starting salary. </p>
          </div>
          <div className='py-24 px-14 mx-18 text-center'> 
            <SlBookOpen size={70} className='mx-auto'/>
            <p className='my-5 text-3xl font-semibold'> No. 1 </p>
            <p className='md:text-lg lg:text-2xl'> Ranked No. 1 internationally for magically-challenged starting salary. </p>
          </div>
          <div className='py-24 px-14 mx-18 text-center'> 
            <BsPeople size={70} className='mx-auto'/>
            <p className='my-5 text-3xl font-semibold'> No. 1 </p>
            <p className='md:text-lg lg:text-2xl'> Ranked No. 1 internationally for magically-challenged starting salary. </p>
          </div>
        </div>
        
        <div className='flex justify-center pb-8 mt-16'>
          <Button text={'Discover More'} bg={'white'} fontColour={'black'} additional={'outline outline-2 outline-black'}/>
        </div>
      </section>

      <section>
        <h2 className='my-16 text-4xl text-center'> Muggle News </h2>
        <div className='grid grid-cols-1 gap-8 mb-20 justify-center mx-10 || lg:grid-cols-2'>
        {
          [{src: news1, blurb: "Join us on astronomy night!"},{src: news2, blurb: "Patronus summoning night"}].map((e) => {return (
            <div className='mx-auto my-10 w-[80%] h-[40rem] overflow-hidden hover:cursor-pointer' style={{position: "relative"}}>
              <Image src={e.src} alt={e.blurb} style={{"object-fit": "cover", "object-position": "0%, 0%", "minHeight": "100%", "maxHeight": "100%", minWidth: "100%", "userSelect": "none"}} className="rounded-tr-[25%] rounded-bl-[25%]"/>
              <div style={{boxShadow:"inset 0 150px 80px -2px black"}} className='absolute h-full w-full top-0 rotate-180 rounded-tr-[25%] rounded-bl-[25%]'>
                <div className='bottom-0 text-white text-center w-full relative rotate-180 pb-12'>
                  <p className='font-semibold text-2xl'>{e.blurb}</p>
                </div>
              </div>
            </div>
          )})
        }
        </div>
        <div className='flex justify-center'>
          <Button text={'Expore all news'} bg={'white'} fontColour={'black'} additional={'outline outline-2 outline-black'}/>
        </div>
      </section>       

      <section className='bg-cream py-5 mt-10 w-full'>
        <h2 className='my-16 text-4xl text-center'> Upcoming events </h2>
        <div className='grid grid-cols-3 gap-4 justify-center lg:grid-cols-3 mx-10'>
          <div className='h-64 w-70 relative'>
            <Image 
              src={news1} 
              alt={"e.blurb"} 
              style={{"object-fit": "cover", "object-position": "0%, 0%", "minHeight": "100%", "maxHeight": "100%", minWidth: "100%"}} 
            />
            <div className='h-40 w-full absolute bg-white text-black text-2xl top-48 rounded-tr-2xl px-4 || transition-transform duration-700 hover:translate-y-14'>
              <p className='my-2 font-light text-blue-dark'> 30 Nov 2022 </p>
              <p className='my-2 font-semibold'> Title of the event that is upcoming </p>
              <p className='my-2 font-normal text-sm'> location and time at time from beginning AM - end PM </p>
              <BiChevronRight size={40} className='absolute right-0 top-0'/>
            </div>
          </div>
          <div className='h-64 w-70 relative'>
            <Image 
              src={news1} 
              alt={"e.blurb"} 
              style={{"object-fit": "cover", "object-position": "0%, 0%", "minHeight": "100%", "maxHeight": "100%", minWidth: "100%"}} 
            />
            <div className='h-40 w-full absolute bg-white text-black text-2xl top-48 rounded-tr-2xl px-4 || transition-transform duration-700 hover:translate-y-14'>
              <p className='my-2 font-light text-blue-dark'> 30 Nov 2022 </p>
              <p className='my-2 font-semibold'> Title of the event that is upcoming </p>
              <p className='my-2 font-normal text-sm'> location and time at time from beginning AM - end PM </p>
              <BiChevronRight size={40} className='absolute right-0 top-0'/>
            </div>
          </div>
          <div className='grid grid-cols-1 grid-rows-3 gap-2'>
            <div className='bg-white w-full py-4 rounded-2xl relative hover:bg-blue-dark hover:text-white || || transition-colors duration-300'>
              <h4 className='font-light px-6'> August 16th</h4>
              <p className='font-bold px-4'> This is a description of the event</p>
              <BiChevronRight size={40} className='absolute right-0 top-7'/>
            </div>
            <div className='bg-white w-full py-4 rounded-2xl relative hover:bg-blue-dark hover:text-white || || transition-colors duration-300'>
              <h4 className='font-light px-6'> August 16th</h4>
              <p className='font-bold px-4'> This is a description of the event</p>
              <BiChevronRight size={40} className='absolute right-0 top-7'/>
            </div>
            <div className='bg-white w-full py-4 rounded-2xl relative hover:bg-blue-dark hover:text-white || || transition-colors duration-300'>
              <h4 className='font-light px-6'> August 16th</h4>
              <p className='font-bold px-4'> This is a description of the event</p>
              <BiChevronRight size={40} className='absolute right-0 top-7'/>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

import Head from 'next/head'

// Icons
import { BiSearch } from 'react-icons/bi'

// Apparently can't use img in React? Problem for another day because this works!
import Image from "next/image"
import unisqLogo from "../../public/UniSQ/logo.svg"

import { navDropDownData } from './navDropDownData'
import { useState } from 'react'

const navHoverables = {Study: "Study", "Current Students": "Current Students", Research: "Research", Alumni: "Alumni", About: "About", None: "None", Magnify:"Magnify"};


export default function Home() {

  const [ hoveredNav, setHoveredNav ] = useState(navHoverables.None);

  return (
    <div className='w-full'>
      <Head>
        <title>Mock-UniSQ Branding</title>
        <meta name="description" content="Attempting to recreate the UniSQ home page to learn more about front-end development and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white'>
        
        <section>
          <nav className="pt-5 flex justify-between px-5 max-w-5xl mx-auto">
            
            <h1 className='w-44'> <a href="http://localhost:3000/unisq"> <Image src={unisqLogo}/> </a></h1>

            <div className='flex flex-col justify-center gap-4'>
              <ul className=' flex justify-between gap-8 ml-auto'>
                {
                  ["LIBRARY", "INTERNATIONAL", "CONTACT", "UCONNECT"].map((e, indx) => {
                    return (
                      <li key={indx} className='text-sm text-gray-600 hover:underline hover:cursor-pointer'> <a href="http://google.com"> {e} </a> </li>
                    )})
                }
              </ul>

              <ul className=' flex justify-between ml-auto'>
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

                <div className='hover:border-b-yellow-500 hover:border-b-4 hover:cursor-pointer hover:pb-0 || px-2'>
                  <BiSearch className='text-2xl text-gray-700 '/>
                </div>
                
              </ul>

            </div>  
          </nav>

          <div className={hoveredNav != navHoverables.None ? 'bg-gray-100 h-96 absolute' : 'hidden'} onMouseEnter={() => {setHoveredNav(hoveredNav)}} onMouseLeave={() => {setHoveredNav(navHoverables.None)}}>
            <h2 className=' p-10 text-4xl'>{hoveredNav}</h2>
            <div className='px-6 h-20 w-full grid grid-cols-4'>    
              {
                navDropDownData[hoveredNav].Links.map((column) => {
                  return (
                    <ul>
                      {column.map((row) => { return (<li className='py-2 px-4 hover:bg-gray-200 mx-2'> {row} </li>) })}
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

          <div className='w-full h-auto bg-purple-900 text-white m-0 p-0'>
            <p className='py-1 text-center text-sm align-middle'> Visit our <b> COVID-19 webpage </b> for the latest updates. </p>
          </div>
        </section>
        
        <h1 className='text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> FOR EDUCATIONAL PURPOSES </h1>

      </main>

    </div>
  )
}

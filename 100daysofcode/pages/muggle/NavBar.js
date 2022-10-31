import React, { useState } from "react"
import Image from "next/image"

import MuggleLogo from "../../public/Muggle/logo.svg"
import {navDropDownData} from "../../data/navDropDownData"

import { BiSearch, BiMenu } from 'react-icons/bi'


export default function Navbar() {

    const navHoverables = {Study: "Study", "Current Students": "Current Students", Research: "Research", Alumni: "Alumni", About: "About", None: "None", Magnify:"Magnify"};
    const [ hoveredNav, setHoveredNav ] = useState(navHoverables.None);
    const [navActive, setNavActive] = useState(false);

    return (
        <>
            {/* Navigation Bar - Desktop */}
            <nav className="px-4 pt-4 hidden justify-between max-w-6xl align-middle items-center mx-auto -mb-[16px] md:flex">
                <h1 className='w-36'> <a href="http://localhost:3000/Muggle"> <Image src={MuggleLogo} alt="Muggle University Logo" className='-translate-y-3'/> </a></h1>
                <div className='flex flex-col justify-center'>
                    <ul className=' flex justify-between gap-8 ml-auto p-4'>
                        {
                            ["LIBRARY", "INTERNATIONAL", "CONTACT", "UCONNECT"].map((e, indx) => {
                            return (
                                <li 
                                    key={indx} 
                                    className='text-sm text-blue-neutral hover:underline hover:cursor-pointer'
                                > <a href="http://google.com"> {e} </a> </li>
                            )})
                        }
                    </ul>

                    <ul className=' flex justify-between '>
                        {
                            ["Study", "Current Students", "Research", "Alumni", "About"].map((e, indx) => {
                            return (
                            <li key={indx} 
                                className={hoveredNav != navHoverables[e] ? 'mt-3 px-4 pb-4 text-lg text-blue-dark || select-none' : 'mt-3 px-4 pb-2 text-lg text-blue-dark select-none || border-b-blue-neutral border-b-4 cursor-pointer'}
                                onMouseEnter={ () => { setHoveredNav(navHoverables[e])} }
                                onMouseLeave={ () => { setHoveredNav(navHoverables.None)} }
                            > {e} </li>
                            )})
                        }            
                        <div className='p-2 text-blue-dark my-auto || hover:outline hover:outline-1 hover:outline-blue-dark hover:rounded-full hover:cursor-pointer hover:text-blue-neutral'>
                            <BiSearch className='text-2xl blue-dark inline '/>
                        </div>
                    </ul>
                </div>  
            </nav>
            
            {/* DropDown Menu - Desktop */}
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
                        <div className=' bg-gray-300 w-0 border h-40 -translate-y-3 col-span-1 mr-0'></div>/
                        <div className='col-span-2 ml-0'>
                            <p className='text-sm font-extralight'>{navDropDownData[hoveredNav].Prompt}</p>
                            <button className='mt-4 border border-black rounded-2xl py-2 px-6 w-auto hover:bg-gray-200'>{navDropDownData[hoveredNav].ButtonText}</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar - Mobile */}
            <nav className="px-4 pt-4 flex justify-between max-w-6xl align-middle items-center mx-auto -mb-[16px] md:hidden">
                <h1 className='w-44'> <a href="http://localhost:3000/Muggle"> <Image src={MuggleLogo} alt="Muggle University Logo"/> </a></h1>
                <BiMenu className=' w-10 h-10 || hover:text-blue-neutral hover:cursor-pointer' onClick={() => {setNavActive(!navActive)}}/>
            </nav>
            
            {/* Navigation Column - Mobile */}
            <ul className={ navActive == true ? 'bg-blue-dark absolute left-[80%] text-white font-semibold md:hidden' : 'hidden'}>
                {
                    [
                        "Study",
                        "Current Students",
                        "Current Students",
                        "Research",
                        "Alumni",
                        "About",
                    ].map((e) => {return <li className="w-full px-4 py-6 float-left hover:bg-blue-neutral"> <a href="">{e}</a> </li>})
                }
            </ul>
        </>
    )
}
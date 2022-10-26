import Head from 'next/head'

// Icons
import { BiSearch } from 'react-icons/bi'

// Apparently can't use img in React? Problem for another day because this works!
import Image from "next/image"
import unisqLogo from "../../public/UniSQ/logo.svg"

export default function Home() {

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
                          className={'text-lg text-gray-700 pb-4 px-4 hover:border-b-yellow-500 hover:border-b-4 hover:pb-0 hover:cursor-pointer'}
                      > {e} </li>
                    )})
                }

                <BiSearch className='text-xl translate-y-1'/>
              </ul>
            </div>    
          </nav>

          <div className='w-full h-auto bg-purple-900 text-white m-0 p-0'>
            <p className='py-1 text-center text-sm align-middle'> Visit our <b> COVID-19 webpage </b> for the latest updates. </p>
          </div>
        </section>

      </main>

    </div>
  )
}

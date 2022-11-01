import React, { useState, useEffect } from "react";
import Image from "next/image";

import { BiPause, BiPlay } from 'react-icons/bi'

export default function Carousel({carouselImages}) {
    
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
    
    return (<>
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
                )})
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
    </>)
}
import React from "react";

import { BiChevronRight } from 'react-icons/bi'


export default function Button({  onClickFunc, bg, fontColour, text, additional }) {
    return (<>

        <button className={`py-4 px-8 m-5 w-22 text-${ fontColour } bg-${ bg } ${ additional } rounded-2xl font-semibold md:w-56 w-full`} onClick={onClickFunc}> { text } <BiChevronRight className='text-xl inline'/> </button>

    </>)
}
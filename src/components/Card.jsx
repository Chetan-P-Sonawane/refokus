import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Card = ({ width, start, para, hover }) => {
  return (
    <div className={`p-5 hover:${hover} rounded-xl bg-zinc-800 ${width} min-h-[25rem] flex flex-col justify-between`}>

   
        <div className='w-full'>
          <div className='w-full flex items-center justify-between'>
              <h3>One Heading</h3>
              <IoIosArrowRoundForward />
          </div>
              <h1 className='mt-5 text-3xl font-medium'>Its Heading</h1>
        </div>
       
        <div className='bottom w-full '>
        {
          start && (
            <> 
              <h1 className='text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
              <button className='mt-5 py-2 px-4 border-[1px] rounded-full'>Contact us</button>

            </>
          )
        }

        { 
          para && (
           <p className='text-sm text-zinc-500 font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          )
        }
        </div>
    </div>
  )
}

export default Card
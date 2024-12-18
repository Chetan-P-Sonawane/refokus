import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'

const Button = ({title="Get Started"}) => {
  return (
    <div className=' w-40 h-9 px-4  rounded-full font-regular text-black bg-white cursor-pointer '>
      <div className='h-6 mt-1.5 overflow-hidden '>
        <div className='hover:translate-y-[-50%] duration-300 hover:duration-200 hover:delay-75 hover:ease-in-out'>

          <div className='h-6 flex items-center justify-around  '>
            <h1>{title}</h1>
            <div className='text-xl'>
              <IoIosReturnRight />
            </div>
          </div>
         
          <div className='h-6 flex items-center justify-around '>
             <h1>{title}</h1>
             <div className='text-xl'>
               <IoIosReturnRight />
             </div>
          </div>

          </div>
      </div>
      </div>
  )
}

export default Button
import React from 'react'
import Button from './Button'

const Product = ({val,mover,count}) => {
  return (

    <div className='w-full border-b-[2px] border-zinc-600'>
 
      <div onMouseEnter={()=>{mover(count)}} className='relative max-w-screen-xl px-5 py-10 h-[14.9rem] mx-auto flex items-center justify-between'>
         <h1 className='text-6xl capitalize font-semibold'>{val.title}</h1>
           <div className='w-1/3'>
                  <p className='mb-4'>{val.intro}</p>
                  <div className=' flex items-center gap-4 '>
                     {val.live && <Button title={"Live Website"} />}
                     {val.case && <Button title={"Case Study"} />}
                  </div>

           </div>
      </div>

    </div>
  )
}

export default Product
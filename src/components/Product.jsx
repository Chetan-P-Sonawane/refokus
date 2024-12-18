import React from 'react'
import Button from './Button'

const Product = ({val}) => {
  return (

    <div className='w-full border-b-[2px] border-zinc-600'>
 
      <div className='max-w-screen-xl px-20 py-10 mx-auto flex items-center justify-between'>
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
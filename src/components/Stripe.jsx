import React from 'react'

const Stripe = ({val,index}) => {
  return (
    <div className='w-[20%] mt-12'>

       <div key={index} className={`flex items-center justify-between px-8 py-4 border-t-[1px] border-b-[1px] border-r-[1px] ${index === 4 ? "border-r-[0px]" : ""}`}>
            <h1>{val.name}</h1>
            <h2>{val.times}</h2>
        </div> 

    </div>
  )
}

export default Stripe
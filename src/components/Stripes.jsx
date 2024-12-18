import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
    
    const  stripeAwardData=[
        { src: "", name:"cssda.", times: "37" },
        { src: "", name: "FWA.", times: "3" },
        { src: "",name:"awwwards.", times: "16" },
        { src: "", name: "webflow conf.", times: "1" },
        { src: "", name: "no-code conf.", times: "1" },
    ]

  return (
    <div className='w-full flex items-center mt-4 mb-16 bg-zinc-900'>
        {   
            stripeAwardData.map((elem,index)=>(
              // eslint-disable-next-line react/jsx-key
              <Stripe index={index} val={elem} />)
            )
        }
        
    </div>
  )
}

export default Stripes











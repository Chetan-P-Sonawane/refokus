import React from 'react'

const Marque = ({ imagesurls }) => {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
          {imagesurls.map((url, index) => <img className=' w-[6vw] ' key={index} src={url} alt="" />)}
          {imagesurls.map((url, index) => <img className=' w-[6vw] ' key={index} src={url} alt="" />)}
    </div>
  )
}

export default Marque
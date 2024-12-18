import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
      <div className='max-w-screen-xl mx-auto  py-6 flex items-center justify-between font-semibold border-b-[2px] border-zinc-700'>
        <div className='lnav flex items-center'>
              <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />

              <div className="links flex items-center gap-10 ml-28 ">
                  {
                      ["Home", "Work", "Culture", "", "News"].map((item, index) => (
                          item.length === 0 ? <span key={index} className='w-[2px] h-10 bg-zinc-700 rounded-full hidden sm:visible'></span>
                              : (<a className='sm:flex items-center gap-1 text-sm cursor-pointer hidden' key={index}>
                                  {
                                      index === 1 && (<span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-[5px] h-[5px] rounded-full bg-green-400 shadow-md'></span>)
                                  }
                                  {item}
                                </a>
                               )
                      ))

                  }
              </div>
        </div>
        <Button />
    </div>
  )
}

export default Navbar
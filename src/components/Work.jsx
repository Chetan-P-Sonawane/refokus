import React, { useState } from 'react'
import { useScroll } from 'framer-motion'

const Work = () => {  

  const [images,setImages] = useState([
    { 
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203-p-800.webp",
      top: "23%",
      left: "50%",
      isActive: false },
    { 
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203-p-800.webp",
      top: "25%",
      left: "52%",
      isActive: false },
    { 
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3cbf37cf4d6ddc1f21b_Umault%20-%204%203-p-800.webp",
      top: "27%",
      left: "48%",
      isActive: false },
    { 
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203-p-800.webp",
      top: "29%",
      left: "50%",
      isActive: false },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b24920ad7e952c1d3fd062_zoom-04.webp",
       top:"30%",
       left: "49%",
       isActive: false}

  ])
  
  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change", (data) => {

    function showImages(arr) {
      setImages((prev) => (
        prev.map((item, index) => (
          arr.indexOf(index) === -1 ?
            { ...item, isActive: false } :
            { ...item, isActive: true }
        ))
      ))

    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImages([])
        break;
      case 1:
        showImages([0])
        break;
      case 2:
        showImages([0, 1])
        break;
      case 3:
        showImages([0, 1, 2])
        break;
      case 4:
        showImages([0, 1, 2, 3])
        break;
      case 5:
        showImages([0, 1, 2, 3, 4])
    }
  })



  return (
    <div className='w-full '>
  
    <div className='relative max-w-screen-xl mx-auto'>
    
      <h1 className=' text-[26vw] font-medium text-center select-none'>work</h1>
        
        <div className='absolute top-0 left-0  w-full h-full  '>
            {
              images.map((elem,index)=>
                (elem.isActive && <img className=" w-72 absolute -translate-x-[50%] translate-y-[50%]" key={index} style={{ top: elem.top, left: elem.left }} src={elem.url} alt="" />)
               )
            }
        </div>

    </div>

    </div>
  )
}

export default Work
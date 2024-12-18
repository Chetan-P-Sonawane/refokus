import React from 'react'
import Product from './Product'

const Products = () => {
     
    const productData =[
        { 
            title: "Cula", 
            intro:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case:false,
        },
        {
            title: "BCG Platinion",
            intro: "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
            live: false,
            case: true,
        },
        {
            title: "Arqitel",
            intro: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
            live: false,
            case: false,
        },
        {
            title: "Sevdesk",
            intro: "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
            live: true,
            case: true,
        },
    ]


  return (
    <div className='mt-40'>
      {
              productData.map((elem,index)=>(
                  <Product key={index} val={elem} />
              ))
      }
    </div>
  )
}

export default Products
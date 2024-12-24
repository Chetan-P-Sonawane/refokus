import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import cula from '../assets/videos/cula-video.webm';
import bcgp from  "../assets/videos/bcgp-video.webm";
import arqitel from "../assets/videos/arqitel-169.webm";
import sevdesk from  "../assets/videos/sevdesk-169.webm";

const Products = () => {
  const productData = [
    {
      title: "Cula",
      intro:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "BCG Platinion",
      intro:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
      live: false,
      case: true,
    },
    {
      title: "Arqitel",
      intro:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: false,
      case: false,
    },
    {
      title: "Sevdesk",
      intro:
        "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
      live: true,
      case: true,
    },
  ];

  const [posi, setPosi] = useState(0);

  const mover = (val) => {
    setPosi(val * 15);
  };

  return (
    <div className="mt-40 relative">

      {productData.map((elem, index) => (
        <Product key={index} count={index} val={elem} mover={mover} />
      ))}

      <div className="topdiv absolute top-0 w-full h-full pointer-events-none">
        
        <motion.div
          initial={{ y: posi, x: "-50%" }}
          animate={{ y: posi + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className="window w-[20rem] h-[15rem] absolute top-0 left-[50%] bg-white  overflow-hidden"
        >
            <motion.div
              animate={{ y: -posi + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full bg-[#D0D8E0] "
            >
              <video muted autoPlay loop className="w-full h-full " src={cula}></video>

            </motion.div>
            <motion.div
              animate={{ y: -posi + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full bg-[#075D37] "
            >
            <video muted autoPlay loop className="w-full h-full overflow-hidden " src={bcgp}></video>

            </motion.div>
            <motion.div
              animate={{ y: -posi + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full bg-[#252746]"
            >
            <video muted autoPlay loop className="w-full h-full " src={arqitel}></video>

            </motion.div>
            <motion.div
              animate={{ y: -posi + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className="w-full h-full bg-[#F3EDED]"
            >
            <video muted autoPlay loop className="w-full h-full " src={sevdesk}></video>

            </motion.div>

        </motion.div>

      </div>
    </div>
  );
};

export default Products;



  // in the products animation we create a div called topdiv and give position absolute
  // to it with w & h full top-0 making it spread all over on top of the content of its parent
  // we make another div in it called window with h-[15rem] w-[20rem] and positon absolute
  // and left and top so in the animation we want this window to move as we scroll
  // and this window div cosist of another multiple divs each for a product, the divs inside 
  // the vwindow will keep on changing with respect to the product it is on.

  // so for the animation we use onMouseEnter event inside the child Product component
  // also while mapping the productData to product componet we send its index as count this
  // is recieved as prop and is passed to mover function which is called inside of onMouseEnter event,
  // the count is recieved as val in mover function in parent Products comopnent, it is used to multiply
  // with the height of the window div , the value revcieved after multiplication is used to set the 
  // posi by usePosi (useState), and this posi is used while animating with framer-motion as value of y in
  // inital and animate state.

  // when we hover on 1st product the index of it is 0 so index=count then its multipled with 15
  // in mover function 0*15=0 so the y in inital and animate is 0 so its(window) at 1st product,
  // when we hover 2nd product the index is 1 i.e 1*15 =15 so it gets animate y with top 15rem and the
  // frame is on the 2nd product, as we are using useState now 15 is the value of posi so its inital is 15
  // when we enter the mouse in 3rd product the window will move from 2nd product to 3rd beacause of useState,
  //  the posi gets updated and animate in 30rem and also set it as its
  // inital value so that the frame remain in the product the mouse was last in
  // but the problem here is when the window gets animated all the child divs for all products within it 
  // also gets shifted down, so to them we need to give the animate & inital y the same value but in negative way,
  // so when the window moves down the divs within the window moves up with same value. i.e 15rem,
  // after doing it the 1st div within the window moves up by 15rem and when the window gets on 2nd product we are able to see
  //  the div for 2nd product which consist of content like image or video related to 2nd product.
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
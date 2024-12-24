import React from "react";
import { motion } from "framer-motion";

const Marque = ({ imagesurls, direction }) => {
  return (
    <div className="flex w-full py-8 gap-32 overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex flex-shrink-0 gap-32 py-2"
      >
        {imagesurls.map((url, index) => (
          <img className=" w-[6vw] " key={index} src={url} alt="" />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex flex-shrink-0 gap-32 py-2"
      >
        {imagesurls.map((url, index) => (
          <img className=" w-[6vw] " key={index} src={url} alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marque;

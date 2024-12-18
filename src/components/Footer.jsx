import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-[16vw] gap-5 flex items-center justify-between ">
      <div className="w-[60%]">
        <h1 className="text-[12rem] font-semibold leading-none tracking-tight">refokus.</h1>
      </div>

      <div className="w-[20%] flex ">
        <div className="w-1/2  h-[10vw] flex flex-col justify-between ">
          <h3>Socials</h3>
          <div>
            {["Instagram", "Twitter ( X )", "Linkedin"].map((item, index) => (
              <a key={index} className="block text-sm text-zinc-300">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="w-1/2  h-[10vw] flex flex-col justify-between">
          <h3>Sitemap</h3>
          <div>
            {["Home", "Work", "Career", "Conact"].map((item, index) => (
              <a key={index} className="block text-sm text-zinc-300">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="w-[20%]">
        <p className="text-right">
          Refokus is a digital poneering digital agency driven by design and
          empowered by technology.
        </p>
      </div>
    </div>
  );
};

export default Footer;

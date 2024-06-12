import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[30px] max-w-7xl max-auto felx felx-row
         item-start gap-5`}
      >
        <div className="felx flex-col justify-center items-center mt-5"></div>
        <div className="w-5  h-5 rounded-full bg-[#915eff]">
          <div className="w-1 mx-auto  sm:h-80 h-40 violet-gradient" />
        </div>
        <div className={`${styles.heroHeadText} ms-6 text-white`}>
          <h1>
            Hi, I'm <span className=" text-[#915eff]">Abhishek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user Interfaces and web application
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className="absolute  bottom-[-30px] w-full
       flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
             rounded-3xl border-4 border-secondary flex 
             justify-center items-center p-2
            "
          >
            <motion.dev 
              animate={{y: [0, 24, 0]}}
              transition={{
                duration: 1.5,
                repeat : Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

            
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, " ")

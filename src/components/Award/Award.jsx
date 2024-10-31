import SectionHeader from "../Section/SectionHeader";
import Award1 from "../../assets/images/award1.png";
import Award2 from "../../assets/images/award2.png";
import Award3 from "../../assets/images/award3.png";
import Award4 from "../../assets/images/award4.png";
import Donated from "../../assets/images/donated.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Award = () => {
  return (
    <div id="award" className="mt-[100px]">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="w-[55%]"
      >
        <SectionHeader
          buttonText="Award"
          title={`Celebrating Excellence and Dedication`}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 px-5 lg:px-[76px] mt-5 lg:mt-[42px]"
      >
        <img src={Award1} alt="award-1" />
        <img src={Award2} alt="award-2" />
        <img src={Award3} alt="award-3" />
        <img src={Award4} alt="award-4" />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-5 lg:mx-[76px] mt-12">
        <div className="bg-primarySurface col-span-2 text-center h-[326px] flex items-center px-[15px]">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-center text-white text-xl lg:text-[38px] font-bold leading-tight"
          >
            “Some portion of the profit are donated to the Indonesian
            orphanage.”
          </motion.h1>
        </div>
        <img
          src={Donated}
          alt="donated"
          className="h-[226px] lg:h-[326px] w-full"
        />
      </div>
    </div>
  );
};

export default Award;

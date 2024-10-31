import SectionHeader from "../Section/SectionHeader";
import LineSvg from "../../assets/svgs/line.svg";
import { teamData } from "../../data/data";
import TeamCard from "../Card/TeamCard";
import BgAbstract from "../../assets/images/bg-abstract.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Team = () => {
  return (
    <div id="team" className="mt-[50px]">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <SectionHeader buttonText="Team Company" title="Meet the team" />
      </motion.div>
      <div className="mt-4 lg:mt-7 bg-white lg:bg-freshWhite px-5 lg:px-[160px] py-[44px]">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="font-bold text-black2 text-xl lg:text-4xl text-center leading-tight"
        >
          “Our team works with integrity, sincerity, high quality, and a heart
          to serve the customer to the fullest.”
        </motion.h2>
        <motion.p
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-xs lg:text-base text-black2 mt-6 lg:mt-[14px] text-center"
        >
          Our guiding principle is that the finest work comes from diligence,
          skill, and enjoyment.
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center mt-[54px]"
      >
        <h1 className="font-bold text-black text-[42px] lg:flex text-center">
          Great team of
          <span className="flex flex-col justify-center items-center">
            DeborahTech <img src={LineSvg} alt="line-svg" />
          </span>
          Software House
        </h1>
      </motion.div>
      <div
        className="pt-[58px] bg-contain"
        style={{ backgroundImage: `url(${BgAbstract})` }}
      >
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-evenly">
          <div className="mt-10 lg:mt-0">
            <TeamCard data={teamData[0]} />
          </div>
          <TeamCard data={teamData[1]} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center mt-0 lg:mt-[47px]">
          <div className="mt-10 lg:mt-0">
            <TeamCard data={teamData[2]} />
          </div>
          <div className="mt-10 lg:mt-0">
            <TeamCard data={teamData[3]} />
          </div>
          <div className="mt-10 lg:mt-0">
            <TeamCard data={teamData[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

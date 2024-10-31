import { aboutData } from "../../data/data";
import LinkTo from "../Button/LinkTo";
import CountCard from "../Card/CountCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
const About = () => {
  return (
    <div
      id="about-us"
      className="mt-[89px] lg:mt-[131px] px-5 lg:pe-[144px] lg:ps-[76px] w-full "
    >
      <div className="grid grid-flow-row lg:grid-flow-col">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="mb-8 lg:mb-0 w-full lg:w-[230px]"
        >
          <LinkTo to="" text="About Us Company" className="btn-outline-link" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="ms-0 lg:ms-5"
        >
          <h2 className="text-2xl lg:text-4xl font-medium">
            <span className="font-bold">About</span> Deborah Technology
          </h2>
          <p className="mt-2 lg:mt-8 text-base lg:text-2xl text-text leading-normal lg:leading-10 text-start">
            Welcome to Deborah Technology, We are a young, talented team working
            remotely from various locations across Indonesia. We have extensive
            experience building custom websites and mobile applications in our
            current jobs and from several years of previous projects. Fast
            delivery, satisfaction guaranteed.
          </p>
          <div className="p-0 lg:p-[10px] mt-8 hidden md:block">
            <LinkTo
              to="portfolio"
              text="Explore More"
              className="btn-primary-link"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-[27px] lg:mt-[55px]">
            {aboutData.map((item) => {
              return <CountCard key={item.id} data={item} />;
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

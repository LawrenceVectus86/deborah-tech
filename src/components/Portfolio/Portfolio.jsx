import { portfolioData } from "../../data/data";
import PortfolioCard from "../Card/PortfolioCard";
import SectionHeader from "../Section/SectionHeader";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Portfolio = () => {
  return (
    <div id="portfolio" className="mt-[87px]">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="w-full lg:w-[55%]"
      >
        <SectionHeader
          buttonText="Our Portfolio"
          title={`We provide the Perfect Solution to your business growth`}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 lg:px-[76px]"
      >
        {portfolioData.map((item, index) => {
          return <PortfolioCard key={index} data={item} />;
        })}
      </motion.div>
    </div>
  );
};

export default Portfolio;

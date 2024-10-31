import { serviceData } from "../../data/data";
import ServiceCard from "../Card/ServiceCard";
import SectionHeader from "../Section/SectionHeader";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Service = () => {
  return (
    <div id="service" className="mt-[89px]">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full lg:w-[45%]"
      >
        <SectionHeader
          buttonText="Service"
          title={`Find our capabilities that suits your digital product`}
        />
      </motion.div>
      <div className="px-5 lg:px-[76px]">
        {serviceData.map((item) => {
          return (
            <ServiceCard
              key={item.id}
              item={item}
              isRtl={item.id == 2 ? false : true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;

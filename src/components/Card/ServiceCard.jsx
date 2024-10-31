import PropTypes from "prop-types";
import FeatureListCard from "./FeatureListCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const ServiceCard = ({ item, isRtl = false }) => {
  return (
    <div
      className={`flex flex-col ${
        isRtl ? "lg:flex-row" : "lg:flex-row-reverse"
      } mt-[35px] lg:mt-[82px]`}
    >
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.0 }}
        className={`w-full lg:max-w-[630px] max-h-[455px] lg:max-h-[711px] rounded-[28px]   ${
          isRtl ? "me-0 lg:me-[100px]" : "ms-0 lg:ms-[100px]"
        }`}
      >
        <img src={item.image} className={`bg-contain`} alt={item.name} />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.0 }}
        className="service-card-meta mt-3 lg:mt-0"
      >
        <h5 className="text-xl lg:text-5xl font-bold text-black">
          {item.title}
        </h5>
        <p className="text-base lg:text-[22px] text-black mt-2 lg:mt-[49px] leading-5 lg:leading-8">
          {item.description}
        </p>
        <div className="features mt-[10px] lg:mt-[39px]">
          <h6 className="text-xl lg:text-2xl text-black font-bold mb-3 lg:mb-0">
            How do we help
          </h6>
          {item.features.map((item, index) => {
            return <FeatureListCard key={index} text={item} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

ServiceCard.propTypes = {
  item: PropTypes.object.isRequired,
  isRtl: PropTypes.bool,
};

export default ServiceCard;

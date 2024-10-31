import SectionHeader from "../Section/SectionHeader";
import Client1 from "../../assets/images/client1.png";
import Client2 from "../../assets/images/client2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Client = () => {
  return (
    <div id="client" className="mt-[74px]">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="w-[55%]"
      >
        <SectionHeader
          buttonText="Our Happy Client"
          title={`Some of our  clients`}
        />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-[100px] px-5 lg:px-[76px] mt-[42px] min-w-[250px] lg:min-w-[565px] min-h-[80px] lg:min-h-[106px]"
      >
        <img src={Client1} alt="client-1" />
        <img src={Client2} alt="client-2" className="mt-3 lg:mt-0" />
      </motion.div>
    </div>
  );
};

export default Client;

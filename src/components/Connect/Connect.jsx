import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Connect = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="h-[200px] lg:h-[400px] bg-freshWhite mt-[60px] flex flex-col lg:flex-row items-center justify-center px-[20px] lg:px-[76px] py-5 lg:py-0"
    >
      <h1 className="text-black text-2xl lg:text-4xl font-bold leading-tight lg:leading-[52px] text-center">
        Need help with a custom website or mobile Application? Let’s talk - no
        obligation required!
      </h1>
    </motion.div>
  );
};

export default Connect;

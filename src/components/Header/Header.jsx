import HeaderImg from "../../assets/images/header.png";
import OurPartnersImg from "../../assets/images/our-partners.png";
import LinkTo from "../Button/LinkTo";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Header = () => {
  return (
    <div id="home" className="mx-auto pt-36">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-flow-row lg:grid-cols-2  items-center"
      >
        <div className="ms-5 lg:ms-[76px] me-5 lg:me-0 mt-5 lg:mt-0 order-3 lg:order-1">
          <h1 className="text-[30px] lg:text-5xl leading-normal font-bold text-black">
            Custom Website and Mobile Application Solutions
          </h1>
          <p className="mt-[10px] leading-7 text-xs lg:text-xl w-full  lg:w-4/6">
            We help special businesses like yours get tailor-made solutions for
            your specific problems.
          </p>
          <div className="p-0 lg:p-[10px] mt-[38px]">
            <LinkTo
              to="service"
              text="Get Started"
              className="btn-primary-link"
            />
          </div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="order-1 lg:order-2 ms-5 me-0 lg:me-[42px] h-[251px] md:h-[401px] lg:h-[517px]"
        >
          <img
            src={HeaderImg}
            className="header-img bg-no-repeat bg-center"
            alt="header-img"
          />
        </motion.div>
        <img src={OurPartnersImg} className="order-2 lg:order-3" />
      </motion.div>

      <div className="hidden lg:block px-[76px]">
        <div className="border-b-[3px] border-tertiary pt-24"></div>
      </div>
    </div>
  );
};

export default Header;

import Logo from "../../assets/images/logo.png";
import { FaTiktok, FaLinkedin, FaInstagram, FaMap } from "react-icons/fa";
import LinkTo from "../Button/LinkTo";

const Footer = () => {
  return (
    <div className="mt-[95px] mx-5 lg:mx-[76px] mb-[27px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-start  ">
        <div className="w-[328px]">
          <img src={Logo} alt="logo" className="h-[75px]" />
          <h6 className="text-xl text-black mt-[18px] mb-3">
            Custom Website and Mobile Application Solutions
          </h6>
          <div className="flex flex-col">
            <a href="mailto:deborahhuda8@gmail.com">deborahhuda8@gmail.com</a>
            <a href="https://wa.me/6282144234649">+6282144234649</a>
          </div>
          <div className="flex items-center mt-[18px]">
            {/* <a href="" className="btn-icon me-[18px]" target="_blank">
              <FaTiktok />
            </a> */}
            <a
              href="https://www.linkedin.com/company/deborahtech/"
              className="btn-icon me-[18px]"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            {/* <a href="" className="btn-icon" target="_blank">
              <FaInstagram />
            </a> */}
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h5 className="font-semibold text-xl text-black">Quick Links</h5>
          <ul className="mt-[14px]">
            <li className="mb-6">
              <LinkTo to="service" text="Service" className="footer-link" />
            </li>
            <li className="mb-6">
              <LinkTo to="portfolio" text="Portfolio" className="footer-link" />
            </li>
            <li className="mb-6">
              <LinkTo to="about-us" text="About Us" className="footer-link" />
            </li>
            <li>
              <LinkTo to="contact" text="Contact Us" className="footer-link" />
            </li>
          </ul>
        </div>
        <div className="w-[298px] mt-8 lg:mt-0 flex flex-col">
          <h5 className="font-semibold text-xl text-black">Address</h5>
          <p className="mt-[14px] font-medium text-lg text-black">
            PT DEBORAH TEKNOLOGI BERJAYA
            <br /> <br />
            SOHO Collins Boulevard Collins Boulevard - F.O.R (SOHO) A 0206 Jl.
            MH. Thamrin Kav. 7 Kel. Panunggangan Kec. Pinang Kota Tangerang
            Provinsi Banten 15143
          </p>
          <div className="flex mt-3">
            <a
              href="https://g.page/r/Ce-xG0uPU54TEAI/review"
              target="_blank"
              className="btn-icon"
            >
              <FaMap />
            </a>
          </div>
        </div>
      </div>
      <h6 className="mt-[70px] text-inActive text-lg font-medium">
        © DeborahTech 2024. All rights reserved.
      </h6>
    </div>
  );
};

export default Footer;

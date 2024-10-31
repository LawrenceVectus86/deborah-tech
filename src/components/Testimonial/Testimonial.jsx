import Slider from "react-slick";
import { testimonialData } from "../../data/data";
import IconButton from "../Button/IconButton";
import TestimonialCard from "../Card/TestimonialCard";
import SectionHeader from "../Section/SectionHeader";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Testimonial = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="testimonial" className="mt-[89px] lg:mt-[123px]">
      <div className="flex justify-between items-center pe-5 lg:pe-[76px]">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="w-[55%]"
        >
          <SectionHeader
            buttonText="Testimonials"
            title={`See What Our customer`}
          />
        </motion.div>
        <div className="carousel-button inline-flex">
          <div className="me-[21px]">
            <IconButton onClick={previous}>
              <IoIosArrowBack size={24} />
            </IconButton>
          </div>
          <IconButton onClick={next}>
            <IoIosArrowForward size={24} />
          </IconButton>
        </div>
      </div>
      <div className="overflow-hidden mt-[35px] ms-2 lg:ms-[64px]">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <TestimonialCard
            data={testimonialData[0]}
            className="ms-3 me-[37px]"
          />
          <TestimonialCard data={testimonialData[1]} className="me-[37px]" />
          <TestimonialCard data={testimonialData[2]} />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

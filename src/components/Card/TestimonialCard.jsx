import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TestimonialCard = ({ data, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className={`testimonial-card bg-white  w-[250px] md:w-[410px] h-[356px]  py-[63px] px-10 mb-3 rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${className} `}
      >
        <p
          className="line-clamp-5 text-sm md:text-lg text-black font-normal cursor-pointer"
          onClick={handleOpen}
        >
          {data.desc}
        </p>
        <a
          href={data.user.link}
          target="_blank"
          className="user-testimonial flex items-center mt-10"
        >
          <img
            src={data.user.image}
            alt="user-image"
            className="rounded-full w-[40px] md:w-[60px] h-[40px] md:h-[60px] me-[10px]"
          />
          <div className="user-testimonial-meta">
            <h6 className="font-semibold text-lg md:text-xl text-black line-clamp-1">
              {data.user.name}
            </h6>
            <p className="text-base md:text-lg text-black line-clamp-2 mt-[5px]">
              {data.user.position}
            </p>
          </div>
        </a>
      </div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <div className="flex justify-between items-center">
            <h6 className="text-xl font-semibold">Testimonial</h6>
            <IoCloseOutline onClick={handleClose} />
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <a
              href={data.user.link}
              target="_blank"
              className="user-testimonial flex items-center mb-10"
            >
              <img
                src={data.user.image}
                alt="user-image"
                className="rounded-full w-[60px] h-[60px] me-[10px]"
              />
              <div className="user-testimonial-meta">
                <h6 className="font-semibold text-xl text-black line-clamp-1">
                  {data.user.name}
                </h6>
                <p className="text-lg text-black line-clamp-2 mt-[5px]">
                  {data.user.position}
                </p>
              </div>
            </a>
            <Typography
              className="leading-tight text-lg text-black font-normal cursor-pointer"
              onClick={handleOpen}
            >
              {data.desc}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

TestimonialCard.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default TestimonialCard;

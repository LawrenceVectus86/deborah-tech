import { Button } from "react-scroll";
import PropTypes from "prop-types";

const ButtonOutline = (props) => {
  const { to, text } = props;

  return (
    <Button
      to={to}
      className="bg-white border border-black text-black font-semibold text-lg py-[10px] px-[43px] rounded-full hover:border-primary hover:text-primary"
    >
      {text}
    </Button>
  );
};

ButtonOutline.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonOutline;

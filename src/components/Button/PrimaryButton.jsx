import { Button } from "react-scroll";
import PropTypes from "prop-types";

const PrimaryButton = (props) => {
  const { to, text } = props;
  return (
    <Button
      to={to}
      className="bg-primary text-white py-[15px] px-[54px] rounded-full font-bold"
    >
      {text}
    </Button>
  );
};

PrimaryButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PrimaryButton;

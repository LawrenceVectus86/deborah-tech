import { Link } from "react-scroll";
import PropTypes from "prop-types";

const LinkTo = ({ to, text, className, activeClass }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      hashSpy={true}
      duration={500}
      offset={-140}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
      activeClass={activeClass}
      className={className}
    >
      {text}
    </Link>
  );
};
LinkTo.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  activeClass: PropTypes.string,
};

export default LinkTo;

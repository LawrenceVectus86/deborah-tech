import PropTypes from "prop-types";
import LinkTo from "../Button/LinkTo";

const SectionHeader = ({ buttonText, title }) => {
  return (
    <div className="mx-5 lg:mx-[76px]">
      <LinkTo to="" text={buttonText} className="btn-outline-link" />
      <h1 className="pt-3 lg:pt-5 font-bold text-black text-2xl lg:text-3xl">
        {title}
      </h1>
    </div>
  );
};

SectionHeader.propTypes = {
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SectionHeader;

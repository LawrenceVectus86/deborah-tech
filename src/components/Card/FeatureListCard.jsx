import PropTypes from "prop-types";

const FeatureListCard = ({ text }) => {
  return (
    <div className="flex items-center text-base lg:text-xl font-medium mt-4">
      <span className="w-[15px] lg:w-[26.5px] h-1 bg-black rounded-full me-3"></span>
      {text}
    </div>
  );
};

FeatureListCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FeatureListCard;

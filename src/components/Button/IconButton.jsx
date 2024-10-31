import PropTypes from "prop-types";

const IconButton = ({ children, disabled = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-black w-10 lg:w-20 h-10 lg:h-20 flex items-center justify-center rounded-full hover:bg-primary hover:text-white hover:border-primary cursor-pointer disabled:cursor-not-allowed disabled:bg-blueAlice disabled:border-blueAlice disabled:text-black"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  // to: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default IconButton;

import PropTypes from "prop-types";

const InputField = ({
  title,
  name,
  placeholder,
  type = "text",
  errorMessage,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col justify-start">
      <label htmlFor="" className="text-[22px] font-semibold">
        {title} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="form-control mt-1"
        value={value}
        onChange={onChange}
        required
      />
      {errorMessage && (
        <span className="text-red-500 mt-2">{errorMessage}</span>
      )}
    </div>
  );
};

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;

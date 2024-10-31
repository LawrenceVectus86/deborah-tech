import PropTypes from "prop-types";

const CountCard = (props) => {
  const { data } = props;

  return (
    <div className="count-card flex flex-col items-center py-10 px-5 me-[14px] border-r-none lg:border-r border-transparent lg:border-borderColor last:border-none last:me-0">
      <div className="count-card-meta flex flex-col items-center ">
        <img
          src={data.icon}
          // className="w-[30px] lg:w-[70px] h-[30px] lg:h-[70px]"
        />
        <h5 className="text-sm lg:text-base pt-[15px] lg:pt-[10px] text-black font-medium text-center">
          {data.title}
        </h5>
      </div>
      <div className="count-card-c mt-[15px]">
        <h1 className="text-xl lg:text-[40px] text-primarySurface font-bold">
          {data.count} <span>{data.nth}</span>
        </h1>
      </div>
    </div>
  );
};
CountCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CountCard;

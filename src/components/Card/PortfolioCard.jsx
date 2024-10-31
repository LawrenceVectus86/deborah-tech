import PropTypes from "prop-types";

const PortfolioCard = ({ data }) => {
  return (
    <div className="flex flex-col h-[500px] md:h-600px] lg:h-[766px] w-full lg:w-[627px] mt-[46px]">
      <img
        src={data.image}
        className="w-full lg:w-[627px] h-[400px] md:h-[500px] lg:h-[627px] rounded-2xl object-fill"
      />
      <div className="text-start mt-3 lg:mt-6">
        <h6 className="font-bold text-black text-xl lg:text-2xl ">
          {data.name}
        </h6>
        <p className="text-sm lg:text-base mt-2 lg:mt-3">{data.description}</p>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PortfolioCard;

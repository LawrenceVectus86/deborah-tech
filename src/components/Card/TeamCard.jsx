import PropTypes from "prop-types";

const TeamCard = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      className="flex flex-col justify-end bg-white border border-teamBorder w-[298px] h-[505px] transform transition duration-300 hover:scale-110"
    >
      <img src={data.image} alt="team-image" className="header-img" />
      <div className="text-center ps-4 pe-6 pt-4 pb-[50px]">
        <div className="font-bold text-2xl text-black hover:text-primary">
          {data.name}
        </div>
        <p className="mt-1 text-primary font-medium text-base">
          {data.position}
        </p>
      </div>
    </a>
  );
};

TeamCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TeamCard;

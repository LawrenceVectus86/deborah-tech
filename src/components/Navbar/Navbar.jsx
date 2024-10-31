import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/logo-mobile.png";
import { navbarData } from "../../data/data";
import ButtonOutline from "../Button/ButtonOutline";
import LinkTo from "../Button/LinkTo";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ToggleMobileMenu } from "../../context/ToggleMobileMenu";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { show, setShow } = useContext(ToggleMobileMenu);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div>
      <div
        className={
          scroll
            ? " w-full fixed flex transition items-center ease-in-out duration-500 bg-white rounded-sm z-20"
            : "bg-transparent  w-full fixed transition ease-in-out duration-500 flex items-center z-20"
        }
      >
        <nav className="relative flex items-center justify-between px-5 md:px-10 lg:px-[76px] py-[18px] md:py-[24px] w-full">
          <Link to="home">
            <img
              src={logo}
              className="hidden lg:flex w-100 h-14 mr-2"
              alt="Logo"
            />
            <img
              src={mobileLogo}
              className="lg:hidden w-[50px] h-[50px]"
              alt="Logo"
            />
          </Link>
          <div className="hidden lg:flex items-center px-[43.5px] lg:px-2 ">
            {navbarData.map((item) => {
              return (
                <div key={item.id}>
                  <LinkTo
                    to={item.link}
                    text={item.name}
                    className="nav-link"
                    activeClass="active"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex">
              <ButtonOutline to="contact" text="Let's Talk" />
            </div>
            <div className="lg:hidden sm:ms-2">
              <button
                className="navbar-burger flex items-center text-primary"
                onClick={() => {
                  setShow(!show);
                  console.log(show);
                }}
              >
                {show == true ? (
                  <AiOutlineClose fontWeight="700" fontSize={24} />
                ) : (
                  <AiOutlineMenu fontWeight="700" fontSize={24} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

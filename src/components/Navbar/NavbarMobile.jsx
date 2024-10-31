import { useContext } from "react";
import { ToggleMobileMenu } from "../../context/ToggleMobileMenu";
import { navbarData } from "../../data/data";
import LinkTo from "../Button/LinkTo";

const NavbarMobile = () => {
  const { show } = useContext(ToggleMobileMenu);
  return show == true ? (
    <div
      id="cardContainer"
      className="fixed top-0 left-0 h-full w-80 mt-[85px] overflow-hidden bg-white shadow-lg transition-all duration-300 z-10"
    >
      <div className="w-full h-full px-8 py-3 relative">
        <div className="w-full h-auto flex flex-col gap-y-1 mt-6">
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
      </div>
    </div>
  ) : (
    ""
  );
};

export default NavbarMobile;

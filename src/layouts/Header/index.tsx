import { useLocation, Link } from "react-router-dom";
import NavItem from "./NavItem";

import Logo from "../../config/images/logo.png";
import { HeaderProps } from "../../utils/types";

const Header = ({
  companyName,
  phoneNumber,
  phoneBgColor,
  navLinks,
}: HeaderProps) => {
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 sticky-top">
      <div
        className="display-5 m-0 text-primary ms-lg-5"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Link to={"home"} className={`navbar-brand `}>
          <img src={Logo} alt="" style={{ width: "70px" }} />
        </Link>
        <span className="display-5 m-0 text-primary">
          {companyName.fPart}
          <span className="text-secondary">{companyName.lPart}</span>
        </span>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <>
            {navLinks?.map((item, index) => {
              return (
                <NavItem
                  key={index}
                  {...item}
                  isActive={
                    location.pathname.slice(1) === item.url ||
                    (!location.pathname.slice(1) && item.url === "home")
                  }
                />
              );
            })}
          </>
          <a
            href={`tel:${phoneNumber}`}
            className={`nav-item nav-link nav-contact ${phoneBgColor} text-white px-5 ms-lg-5`}
          >
            <i className="bi bi-telephone-outbound me-2"></i>
            {phoneNumber}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

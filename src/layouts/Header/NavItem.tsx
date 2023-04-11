import { Link } from "react-router-dom";
import { NavItemProps } from "../../utils/types";

const NavItem = ({ url, text, isActive, show, onClick }: NavItemProps) => {
  if (!show) return <></>;
  return (
    <Link
      to={url}
      className={`nav-item nav-link ${isActive && "active"}`}
      onClick={() => onClick(false)}
    >
      {text}
    </Link>
  );
};

NavItem.defaultProps = {
  isActive: false,
};

export default NavItem;

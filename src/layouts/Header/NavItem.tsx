import { NavItemProps } from "../../utils/types";
import { Link } from "react-router-dom";
const NavItem = ({ url, text, isActive, show }: NavItemProps) => {
  if (!show) return <></>;
  return (
    <Link to={url} className={`nav-item nav-link ${isActive && "active"}`}>
      {text}
    </Link>
  );
};

NavItem.defaultProps = {
  isActive: false,
};

export default NavItem;

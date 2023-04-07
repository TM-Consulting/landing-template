import { NavItemProps } from "../../utils/types";
const NavItem = ({ url, text, isActive, show }: NavItemProps) => {
  if (!show) return <></>;
  return (
    <a href={url} className={`nav-item nav-link ${isActive && "active"}`}>
      {text}
    </a>
  );
};

NavItem.defaultProps = {
  isActive: false,
};

export default NavItem;

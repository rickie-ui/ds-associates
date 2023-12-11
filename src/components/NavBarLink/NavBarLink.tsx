import { NavLink, useMatch } from "react-router-dom";
import { NavLinkProps } from "@/types/types";

const NavBarLink = ({ to, children }: NavLinkProps) => {
  const match = useMatch(to);
  const isActive = !!match;

  return (
    <NavLink
      to={to}
      className={`py-2 transition-all hover:opacity-60 ${
        isActive ? "text-primary" : ""
      }`}
    >
      {children}
    </NavLink>
  );
};

export default NavBarLink;

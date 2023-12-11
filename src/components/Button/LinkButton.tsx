import { Link } from "react-router-dom";
import { NavLinkProps } from "@/types/types";

type LinkButtonProps = {
  className?: string;
} & NavLinkProps;

const LinkButton = ({ children, to, className }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className={`inline-block bg-primary px-10 py-4 text-xl font-semibold text-secondary transition-all hover:opacity-75 ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;

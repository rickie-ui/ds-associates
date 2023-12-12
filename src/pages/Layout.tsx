import LinkButton from "@/components/Button/LinkButton";
import NavBarLink from "@/components/NavBarLink/NavBarLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/ds-logo.png";
import { Link, Outlet } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { linkRoutes } from "@/constants/routes";

const Layout = () => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const mobileStyles = `w-full py-2 text-primary text-center hover:opacity-60`;

  return (
    <>
      {isMediumDevice ? (
        <nav className="mx-auto flex h-28 w-9/12 items-center justify-between text-sm">
          <div className="flex items-center  font-montserrat ">
            <img src={Logo} alt="logo" className=" h-28" />
            <h2 className="text-lg opacity-60">
              D&S<p className="text-xs">Associates</p>
            </h2>
          </div>
          <div className="flex items-center gap-6 text-lg font-extralight">
            <NavBarLink to="/">Home</NavBarLink>
            <NavBarLink to="services">Services</NavBarLink>
            <NavBarLink to="about">About us</NavBarLink>
            <NavBarLink to="contact">Contact</NavBarLink>
          </div>
          <LinkButton to="contact">Contact Us</LinkButton>
        </nav>
      ) : (
        <div className="flex w-full items-center justify-between px-4">
          <div className="flex items-center  font-montserrat ">
            <img src={Logo} alt="logo" className="h-20" />
            <h2 className="hidden text-lg opacity-60">
              D&S<p className="text-xs">Associates</p>
            </h2>
          </div>
          <button
            className=" bg-secondary p-1.5 text-primary"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-8 w-10" />
          </button>
        </div>
      )}

      {/* mobile menu */}
      {!isMediumDevice && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-secondary drop-shadow-xl">
          {/* close Icon */}
          <div className=" flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-300" />
            </button>
          </div>
          {/* menu items */}

          <div className="flex flex-col items-center justify-center gap-5 text-lg text-gray-300">
            {linkRoutes.map(({ id, path, title }) => (
              <Link
                to={path}
                key={id}
                className={mobileStyles}
                onClick={() => setIsMenuToggled(false)}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

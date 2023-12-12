import Logo from "@/assets/ds-logo.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <section className="grid grid-cols-1 gap-4  px-4 py-20 md:px-52  lg:grid-cols-3 lg:gap-8 lg:px-64">
        <div>
          <div className="flex items-center  font-montserrat ">
            <img src={Logo} alt="logo" className=" h-28" />
            <h2 className="text-lg opacity-60">
              D&S<p className="text-xs">Associates</p>
            </h2>
          </div>
          <p className="my-6 text-base opacity-60">
            Ensuring compliance with current tax laws thus keeping our clients
            ahead of the curve.
          </p>

          <h2 className="my-4 text-lg font-semibold">HEADQUARTERS:</h2>
          <p className="text-base leading-relaxed opacity-60">
            Raja Building 2nd Floor <br /> Nairobi, Biashara Street
          </p>
          <div className="my-4 text-base leading-loose">
            <p>
              Phone: <span className="text-primary">+254 796 509788</span>
            </p>
            <p>
              Email:{" "}
              <span className="text-primary">derrickstonece16@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex h-28 items-center ">
            <div className=" border-l-8 border-double border-primary p-1.5 font-montserrat">
              Quick Links
            </div>
          </div>
          <div className=" my-6 leading-loose">
            <Link
              to="/"
              className="mb-6 flex items-center gap-4 text-base opacity-60 transition duration-500 hover:text-primary hover:opacity-100"
            >
              <FaLongArrowAltRight />
              Home
            </Link>{" "}
            <Link
              to="about"
              className="mb-6 flex items-center gap-4 text-base opacity-60 transition duration-500 hover:text-primary hover:opacity-100"
            >
              <FaLongArrowAltRight />
              About us
            </Link>{" "}
            <Link
              to="services"
              className="mb-6 flex items-center gap-4 text-base opacity-60 transition duration-500 hover:text-primary hover:opacity-100"
            >
              <FaLongArrowAltRight />
              Services
            </Link>{" "}
            <Link
              to="contact"
              className="mb-6 flex items-center gap-4 text-base opacity-60 transition duration-500 hover:text-primary hover:opacity-100"
            >
              <FaLongArrowAltRight />
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex h-28 items-center ">
            <div className=" border-l-8 border-double border-primary p-1.5 font-montserrat">
              Useful Links
            </div>
          </div>
          <div className=" my-6 leading-loose">
            <Link
              to="#"
              className="mb-6 flex items-center gap-4 text-base opacity-60 transition duration-500 hover:text-primary hover:opacity-100"
            >
              <FaLongArrowAltRight />
              Privacy Policy
            </Link>{" "}
            <Link
              to="#"
              className="mb-6 flex items-center gap-4 text-base opacity-60 transition duration-500 hover:text-primary hover:opacity-100"
            >
              <FaLongArrowAltRight />
              Terms and Conditions
            </Link>{" "}
            <Link
              to="#"
              className="mb-6 flex items-center gap-4 text-base opacity-60 transition duration-500 hover:text-primary hover:opacity-100"
            >
              <FaLongArrowAltRight />
              Disclaimer
            </Link>{" "}
            <Link
              to="#"
              className="mb-6 flex items-center gap-4 text-base opacity-60 transition duration-500 hover:text-primary hover:opacity-100"
            >
              <FaLongArrowAltRight />
              Support
            </Link>
            <Link
              to="#"
              className="mb-6 flex items-center gap-4 text-base opacity-60 transition duration-500 hover:text-primary hover:opacity-100"
            >
              <FaLongArrowAltRight />
              FAQ
            </Link>
          </div>
        </div>
      </section>

      <hr className=" mx-auto  w-8/12 border-white/40" />

      <div className="mt-10 pb-10 text-center text-base opacity-40">
        &copy; 2023. All Rights Reserved by D&S Associates
      </div>
    </div>
  );
};

export default Footer;

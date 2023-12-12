import { IoArrowBackCircleSharp } from "react-icons/io5";
import Button from "@/components/Button/LinkButton";
import notFound from "@/assets/notFound.png";

const NotFound = () => {
  const buttonStyles = `flex w-64 items-center justify-center gap-2 rounded-md border border-transparent bg-secondary  py-3 font-extralight text-white outline-none transition-all hover:border-secondary hover:bg-white hover:text-secondary block mx-auto whitespace-nowrap mt-14`;

  return (
    <section className="mx-auto  flex w-11/12 flex-col items-center justify-center py-4 lg:w-1/2">
      <img
        src={notFound}
        alt="not-found-image"
        className="mx-auto h-80 w-full object-cover object-center sm:w-[400px]"
      />
      <div>
        <h2 className="my-4 text-xl md:text-4xl">
          Oops, looks like the page is lost.
        </h2>
        <p className="mb-4 text-lg leading-8 opacity-80 md:text-xl">
          This is not a fault, just an accident that was not intentional.
        </p>
        <Button to="/" className={buttonStyles}>
          <IoArrowBackCircleSharp />
          Back to homepage
        </Button>
      </div>
    </section>
  );
};

export default NotFound;

import { services } from "@/constants/services";
import { useState } from "react";

const Services = () => {
  const initialDisplayCount = 6;
  const [displayCount, setDisplayCount] = useState<number>(initialDisplayCount);

  const handleShowMore = () => {
    setDisplayCount(displayCount + 3);
  };
  return (
    <div className=" mx-auto w-11/12 lg:w-3/4">
      <section className="group relative mx-auto flex h-72 w-full flex-col justify-center bg-[url('./assets/taxes1.jpg')] bg-cover bg-center text-center  text-white">
        <div className="absolute inset-0 bg-secondary opacity-70"></div>
        <div className="relative z-10 w-full">
          <h2 className="font-montserrat text-5xl">Our Services</h2>
          <p className="my-8 text-lg text-primary opacity-90">
            Home &gt; Services
          </p>
        </div>
      </section>

      <section className="my-24 w-full">
        <h2 className="text-center text-primary">Our services</h2>
        <p className=" my-3 text-center font-montserrat text-4xl lg:text-5xl">
          We Serve The Best Service
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 pb-14 first:bg-secondary first:text-white lg:grid-cols-3 lg:gap-10">
          {services
            .slice(0, displayCount)
            .map(({ id, title, description, icon: IconComponent }) => (
              <div
                key={id}
                className={`flex flex-col   items-center justify-evenly gap-6 border-2 p-4 transition duration-700 hover:border-secondary ${
                  id === 1
                    ? "group first:bg-secondary first:text-white"
                    : "group"
                }`}
              >
                <IconComponent className="h-16 w-16 text-primary brightness-95" />
                <h2 className="text-center font-montserrat text-2xl">
                  {title}
                </h2>
                <p className="text-center text-base opacity-70">
                  {description}
                </p>
                <a
                  href="#"
                  className="inline-block font-medium text-primary transition duration-1000 hover:-translate-y-4"
                >
                  Explore &gt;
                </a>
              </div>
            ))}
        </div>
        {displayCount < services.length && (
          <div className="flex justify-center pb-14">
            <button
              onClick={handleShowMore}
              className="inline-block bg-primary px-10 py-4 text-xl font-semibold text-secondary transition-all hover:opacity-75"
            >
              More Service
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;

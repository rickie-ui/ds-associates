import Video from "@/assets/about.mp4";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className=" mx-auto w-11/12 lg:w-3/4">
      <section className="group relative mx-auto flex h-72 w-full flex-col justify-center bg-[url('./assets/taxes1.jpg')] bg-cover bg-center text-center  text-white">
        <div className="absolute inset-0 bg-secondary opacity-70"></div>
        <div className="relative z-10 w-full">
          <h2 className="font-montserrat text-5xl">About Us</h2>
          <p className="my-8 text-lg text-primary opacity-90">
            Home &gt; About
          </p>
        </div>
      </section>

      <section className="mt-10 grid w-full grid-cols-1 gap-4 py-10  lg:mt-32 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-lg font-semibold text-primary">
            Who We Are
          </h2>
          <h2 className=" my-4 font-montserrat text-5xl">
            Experience When It Matters Most
          </h2>
          <p className=" text-base opacity-70">
            Leverage our extensive expertise in Accounting & Tax Services,
            cultivated through years of dedicated practice. Our seasoned
            professionals bring a wealth of knowledge to ensure precision,
            compliance, and strategic financial management. Trust in our proven
            track record as we apply our substantial experience to optimize your
            accounting and tax requirements.
          </p>

          <div className="my-6 flex  items-baseline justify-center gap-2">
            <div>
              <FaCheckCircle className="text-lg" />
            </div>
            <p className="text-base opacity-60">
              Proven Track Record: Choose a partner with a solid history of
              delivering precision, compliance, and strategic financial
              management.
            </p>
          </div>
          <div className="my-6 flex  items-baseline justify-center gap-2">
            <div>
              <FaCheckCircle className="text-lg" />
            </div>
            <p className="text-base opacity-60">
              Tailored Solutions: Experience customized solutions that cater
              specifically to your accounting and tax requirements, ensuring
              optimal outcomes.
            </p>
          </div>
          <div className="my-6 flex  items-baseline justify-center gap-2">
            <div>
              <FaCheckCircle className="text-lg" />
            </div>
            <p className="text-base opacity-60">
              Responsive Client Support: Enjoy prompt and responsive client
              support, ensuring your questions are addressed and your concerns
              are met with efficiency
            </p>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="min-h-[250px] w-full object-cover  lg:min-h-[600px] lg:w-11/12"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </section>
    </div>
  );
};

export default About;

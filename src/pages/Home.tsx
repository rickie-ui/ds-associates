import LinkButton from "@/components/Button/LinkButton";

const Home = () => {
  return (
    <section className="group relative min-h-screen bg-[url('./assets/taxes2.jpg')] bg-cover bg-center px-6 py-24 text-white lg:min-h-[84.3vh] lg:px-0">
      <div className="absolute inset-0 bg-secondary opacity-70"></div>
      <div className="relative z-10 w-full lg:ml-[17%] lg:w-2/5">
        <h2 className="font-montserrat text-5xl leading-tight  lg:text-6xl">
          Forward-Thinking Accounting & Tax Services
        </h2>
        <p className="my-8  text-lg opacity-90">
          Not only ensure compliance with current tax laws but also proactively
          anticipate future changes, keeping our clients ahead of the curve.
        </p>
        <LinkButton
          to="about"
          className="block w-full text-center  lg:inline-block lg:w-auto"
        >
          Get Started
        </LinkButton>
      </div>
    </section>
  );
};

export default Home;

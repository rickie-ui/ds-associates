import { TfiAlarmClock } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
import { IoIosPhonePortrait } from "react-icons/io";

const Contact = () => {
  return (
    <div className=" mx-auto w-11/12 lg:w-3/4">
      <section className="group relative mx-auto flex h-72 w-full flex-col justify-center bg-[url('./assets/taxes1.jpg')] bg-cover bg-center text-center  text-white">
        <div className="absolute inset-0 bg-secondary opacity-70"></div>
        <div className="relative z-10 w-full">
          <h2 className="fade-in-top font-montserrat text-5xl">Contact Us</h2>
          <p className="fade-in-bottom my-8 text-lg text-primary opacity-90">
            Home &gt; Contact
          </p>
        </div>
      </section>

      <section className="mx-2 my-20 grid grid-cols-1 gap-8 pb-14 lg:grid-cols-3 lg:gap-4 lg:pb-0">
        <div className="flex items-center gap-4 ">
          <div>
            <TfiAlarmClock className="text-primary" />
          </div>
          <div>
            <p className="font-montserrat text-lg">
              Mon - Sat: 8:00am - 5:00pm
            </p>
            <p className="text-base opacity-70">Saturday: 8:00am - 2:00pm</p>
            <p className="text-base opacity-70">Sunday Closed</p>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <div>
            <SlLocationPin className="text-primary" />
          </div>
          <div>
            <p className="font-montserrat text-lg">Raja Building 2nd Floor</p>
            <p className="text-base opacity-70">Nairobi, Biashara Street</p>
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <div>
            <IoIosPhonePortrait className="text-primary" />
          </div>
          <div>
            <p className="font-montserrat text-lg">+254 796 509788</p>
            <p className="text-base opacity-70">derrickstonece16@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

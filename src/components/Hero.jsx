
import profilePic from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="max-w-[1200px] mx-auto mb-8 md:mb-32 mt-28 xl:mt-32">
      <div className="flex items-center w-full flex-wrap sm:justify-center sm:items-center sm:px-5">
        <div className=" px-3 xl:w-1/2 sm:flex sm:flex-col items-center xl:items-start ">
          <p className="text-light font-medium text-xl">Hi 👋, i`m________</p>
          <h1 className="gradient-text font-bold text-5xl">Untung Budiman</h1>
          <TypeAnimation
            sequence={["Web Developer", 1000, "Graphic Design", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic text-tertiary text-3xl"
          />
          <p className="text-white mt-3 text-center xl:text-start">
          <span className="font-bold">Enthusiastic web developer, quick learner, easily adaptable, and enjoys new projects.</span> Strong team player with great communication. Confident in being a valuable asset to your team.
          </p>
          <div className="mt-5 flex gap-6">
            <div className="hover:scale-110 transition-transform duration-500">
              <a
                href="#contact"
                className="text-white bg-gradient-to-r from-[#216869] to-[#9cc5a1] py-2 px-6 rounded-md font-bold"
              >
                Hire Me!
              </a>
            </div>
            <div className="hover:scale-110 transition-transform duration-500">
              <a
                href="#contact"
                className="text-white bg-gradient-to-r from-[#216869] to-[#9cc5a1] py-2 px-6 rounded-md font-bold"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 right-0 flex justify-end md:mt-10 sm:mt-14 md:justify-center sm:justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="max-h-[480px] max-w-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

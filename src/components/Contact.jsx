import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TextGenerateEffect } from "./ui/text-generate-effect";

TypeAnimation;

const Contact = () => {

  const quote = [
    "Always keep learning, because the world will keep changing. ~ B.J. Habibie",
    "Programming is like art, and like any other art, it takes practice and dedication to master. ~ Edsger Dijkstra",
    "Learning programming is like learning a new language. The more you practice, the more fluent you become. ~ Dennis Ritchie",
    "Programming is not just about writing code, but also about understanding how the world works. ~ Bjarne Stroustrup",
    "The biggest mistake programmers can make is to think they know everything. ~ Guido van Rossum",
  ];

  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto mb-5 mt-28 xl:mt-14"
    >
      <div className="flex justify-center items-center text-center min-h-48 lg:min-h-28 mb-16 px-5 lg:px-2">
        <TextGenerateEffect sentences={quote} className="text-center"/>
      </div>
      

      <div className="flex flex-col lg:flex-row px-5 lg:px-0">
        <div className="lg:w-1/2 flex text-white mt-20">
          <div className="xl:w-2/3 md:w-1/2">
            <h1 className="gradient-text font-bold text-2xl">UntgBdmn__</h1>
            <p>
              Kulon Progo, Daerah Istimewa Yogyakarta <br />
              Indonesia
            </p>
            <p>
              budimanuntung14@gmail.com <br />
              +62 851 8480 8340
            </p>
            <div className=" pt-4">
              <div className="flex flex-row gap-3 mt-8 items-end">
                <a href="https://www.instagram.com/bdntcxz_/" target="_blank" className="text-white">
                  <AiFillInstagram className="text-3xl bg-gradient-to-br from-pink-600 to-purple-600 p-1 rounded-full hover:scale-125 transition-transform duration-300" />
                </a>
                <a href="https://github.com/untgbdmn" target="_blank" className="text-white">
                  <AiFillGithub className="text-3xl bg-black p-1 rounded-full hover:scale-125 transition-transform duration-300 " />
                </a>
                <a href="https://www.linkedin.com/in/untung-budiman" target="_blank" className="text-white">
                  <AiFillLinkedin className="text-3xl bg-blue-600 p-1 rounded-full hover:scale-125 transition-transform duration-300 " />
                </a>
                <a href="https://x.com/mantuairisc_" target="_blank" className="text-white">
                  <FaSquareXTwitter className="text-3xl bg-black p-1 rounded-full hover:scale-125 transition-transform duration-300 " />
                </a>
                <a href="mailto:budimanuntung14@gmail.com" target="_blank" className="text-white">
                  <MdEmail className="text-3xl bg-red-500 p-1 rounded-full hover:scale-125 transition-transform duration-300 " />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-1/2 flex text-end lg:text-center flex-col ">
            <h1 className="text-secondary font-bold text-xl">
              Quick Links
            </h1>
            <ul className="cursor-pointer text-white font-semibold text-base">
              <li className="hover:translate-x-3 transition-all duration-200 ease-linear hover:text-tertiary">
                <Link to="home" smooth={true} offset={50} duration={500}>
                  Home
                </Link>
              </li>
              <li className="hover:translate-x-3 transition-all duration-200 ease-linear hover:text-tertiary">
                <Link to="about" smooth={true} offset={50} duration={500}>
                  About
                </Link>
              </li>
              <li className="hover:translate-x-3 transition-all duration-200 ease-linear hover:text-tertiary">
                <Link to="skills" smooth={true} offset={50} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="hover:translate-x-3 transition-all duration-200 ease-linear hover:text-tertiary">
                <Link to="portofolio" smooth={true} offset={50} duration={500}>
                  Portofolio
                </Link>
              </li>
              <li className="hover:translate-x-3 transition-all duration-200 ease-linear hover:text-tertiary">
                <Link to="contact" smooth={true} offset={50} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="xl:w-1/2 text-white mt-20 border px-3 py-2 rounded-md bg-secondary bg-opacity-10 backdrop-blur-xl">
          <h1 className="text-2xl text-secondary font-bold">Get in touch</h1>
          <form action="https://api.web3forms.com/submit" method="POST">
            <div className="flex flex-col w-full gap-3">
            <input type="hidden" name="access_key" value="f04f151a-5214-4ecd-8883-c2e354e23521"/>
              <div className="flex flex-row gap-5">
              <div className="flex flex-col w-full">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full bg-tertiary rounded-md focus:outline-none bg-opacity-45 px-2 text-white"
              />
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full bg-tertiary rounded-md focus:outline-none bg-opacity-45 px-2 text-white"
              />
            </div>
              </div>
            <div className="flex-col flex gap-2 w-full h-full">
              <textarea name="message" placeholder="Message" id="message"className="resize-none bg-tertiary rounded-md focus:outline-none bg-opacity-45 px-2 text-white"></textarea>
            </div>
            <button className="bg-primary rounded px-4">Send to Me</button>
            </div>
          </form>
        </div>
      </div>
      <hr className="mt-4"/>
      <p className="text-white text-center text-base pt-2">&copy; 2024. <span className="text-tertiary font-bold">Untung Budiman</span>. All rights reserved. </p>
    </div>
  );
};

export default Contact;

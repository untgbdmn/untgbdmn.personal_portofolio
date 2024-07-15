import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoLaravel } from "react-icons/io5";


const Skills = () => {
  const divItems = [
    {element: (
      <div className="text-center flex flex-row text-orange-500 gap-5 items-center justify-center">
        <AiFillHtml5 className="text-orange-500 text-3xl"/>
        <p className="text-2xl font-bold">HTML</p>
      </div>
    ), background: "rgba(249, 115, 22, 0.15)  "},
    {element: (
      <div className="text-center flex flex-row text-blue-500 gap-5 items-center justify-center">
        <IoLogoCss3 className="text-blue-500 text-3xl"/>
        <p className="text-2xl font-bold">CSS</p>
      </div>
    ), background: "rgba(59, 130, 246, 0.15)"},

    {element: (
      <div className="text-center flex flex-row text-yellow-500 gap-5 items-center justify-center">
        <IoLogoJavascript className="text-yellow-500 text-3xl"/>
        <p className="text-2xl font-bold">JavaScript</p>
      </div>
    ), background: "rgba(234, 179, 8, 0.15)"},
    {element: (
      <div className="text-center flex flex-row text-cyan-500 gap-5 items-center justify-center">
        <RiTailwindCssFill className="text-cyan-500 text-3xl"/>
        <p className="text-2xl font-bold">Tailwind</p>
      </div>
    ), background: "rgba(6, 182, 212, 0.15)"},
    {element: (
      <div className="text-center flex flex-row text-blue-800 gap-5 items-center justify-center">
        <FaDatabase className="text-blue-800 text-3xl"/>
        <p className="text-2xl font-bold">Mysql</p>
      </div>
    ), background: "rgba(23, 37, 84, 0.15)"},
    {element: (
      <div className="text-center flex flex-row gap-5 items-center justify-center text-purple-800">
        <SiCanva className="text-3xl"/>
        <p className="text-2xl font-bold">Canva</p>
      </div>
    ), background: "rgba(126, 34, 206, 0.15)"},
    {element: (
      <div className="text-center flex flex-row gap-5 items-center justify-center text-sky-700">
        <IoLogoReact className="text-3xl"/>
        <p className="text-2xl font-bold">ReactJs</p>
      </div>
    ), background: "rgba(3, 105, 161, 0.15)"},
    {element: (
      <div className="text-center flex flex-row gap-5 items-center justify-center text-red-600">
        <IoLogoLaravel className="text-3xl"/>
        <p className="text-2xl font-bold">Laravel</p>
      </div>
    ), background: "rgba(220, 38, 38, 0.15)"},
  ];
  
  
  return (
    <div id="skills" className="max-w-[1200px] mx-auto mb-8 md:mb-32 mt-28 xl:mt-32 flex-col">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-center uppercase text-2xl font-extrabold mb-16 text-secondary">
        Skills
        </h1>
        <h2 className="text-2xl font-bold gradient-text text-center">Tech-Savvy Designer with Diverse Skills</h2>
        <p className="text-light text-base mt-7 text-center lg:max-w-4xl max-w-xl mb-10">I possess a versatile skillset in web development and graphic design. Proficient in HTML, CSS, JavaScript, MySQL, Laravel, React JS, and PHP, I craft visually appealing web pages and robust back-end applications. A quick learner with strong problem-solving and teamwork skills, I effectively communicate in English and Indonesian.</p>
      </div>
      <InfiniteMovingCards items={divItems} className="bg-transparent hover:scale-105 transition-transform duration-200 w-full" />
    </div>
  )
}

export default Skills

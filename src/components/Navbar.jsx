import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";


export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scroll, setScroll] = useState(false);
    const toggleNav = () => {
      setNav(!nav);
    };
    const closeNav = () => {
      setNav(false);
    };
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] transition-all duration-300 ${scroll ? "backdrop-blur-lg bg-primary bg-opacity-[15%] shadow-lg mt-2 border-0 rounded-2xl z-50" : "bg-transparent"}`}>
    <div className={`flex text-md font-bold justify-between items-center px-6 max-w-[1200px] mx-auto h-16`}>
        <a className="gradient-text cursor-pointer"><Link className="gradient-text" to="home" smooth={true} offset={50} duration={500}>__UntgBdmn</Link></a>
        {/* <Link className="gradient-text" to="home" smooth={true} offset={50} duration={500}>__UntgBdmn</Link> */}

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer text-slate-200">
            <li className="relative group">
                <Link to="about" smooth={true} offset={50} duration={500}>About</Link>
                <span className="absolute bottom-0 left-0 w-full h-1 background-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
            <li className="relative group">
                <Link to="skills" smooth={true} offset={50} duration={500}>Skills</Link>
                <span className="absolute bottom-0 left-0 w-full h-1 background-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
            <li className="relative group">
                <Link to="portofolio" smooth={true} offset={50} duration={500}>Portofolio</Link>
                <span className="absolute bottom-0 left-0 w-full h-1 background-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
            <li className="relative group">
                <Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link>
                <span className="absolute bottom-0 left-0 w-full h-1 background-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-30 text-white">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div className={nav
            ? "text-center fixed z-20 h-xl w-[400px] right-0 top-0 glass text-white pb-4"
            : "fixed right-[-100%] hidden"}>
                        <ul className="font-semibold text-xl space-y-8 mt-24 text-st">
          <li>
            <Link
              to="about"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="portofolio"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        </div>
    </div>
    </div>
  )
}

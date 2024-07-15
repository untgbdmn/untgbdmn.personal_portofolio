import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import pic1 from "../assets/porto/personal.png"
import pic2 from "../assets/porto/cvform.png"

const Portofolio = () => {
  return (
    <div id="portofolio" className="max-w-[1200px] mx-auto mb-8 md:mb-32 mt-36 xl:mt-48">
      <div className="">
        <h1 className="text-center uppercase text-2xl font-extrabold mb-16 text-secondary">Portofolio</h1>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-full leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Painting mesmerizing digital worlds, where lines of {""}
            <Highlight className="text-black dark:text-white">
              code transform into a captivating visual symphony.
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>

      <div className="flex justify-evenly flex-wrap">
        <div>
        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 bg-opacity-5 relative group/card dark:hover:shadow-2xl dark:hover:shadow-teal-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Personal Portofolio
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          This project is a personal portfolio website that I developed using React.js as the main framework and Tailwind CSS for styling. The website is designed to showcase skills and projects in a professional and attractive manner.
        </CardItem>
        <CardItem
          translateZ={100}
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src={pic1}
            className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href="#">Open Github</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
        </div>

        <div>
        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 bg-opacity-5 relative group/card dark:hover:shadow-2xl dark:hover:shadow-teal-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          CV Form
        </CardItem>
        <CardItem
          as="p"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          This project is a web application I developed to facilitate users in creating and managing their CV (Curriculum Vitae) digitally. Using Laravel 11 as the main backend framework and MySQL as the database. 
        </CardItem>
        <CardItem
          translateZ={100}
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src={pic2}
            className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href="#">Open Github</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;

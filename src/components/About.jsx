import pic from '../assets/pic.png'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div id='about' className='max-w-[1200px] mx-auto mb-8 md:mb-32  mt-36 xl:mt-5'>
        <h1 className='text-center uppercase text-2xl font-extrabold gradient-text mb-16'>About Me</h1>
      <div className="flex flex-col-reverse xl:flex-row sm:items-center">
        <div className='xl:w-1/3'>
            <img src={pic} alt="" className='max-w-[380px] max-h-[380px]' />
        </div>
        <div className='xl:w-2/3 pl-10 flex flex-col items-center sm:pl-0 sm:mb-24 mt-3'>
            <h1 className='text-tertiary uppercase text-md font-bold text-xl mb-2 xl:pt-20'>Description</h1>
            <h1 className='text-light text-2xl font-extrabold'><span className='text-secondary text-3xl'>Web Developer</span> & Graphic Design</h1>
            <p className='text-base text-light text-center mt-3 sm:px-10'>
            I am Untung Budiman, a graduate of vocational school with expertise in design, web programming, and basic networking. During my internship as a Network Engineer at PT Gagas Mitra Jaya, I was responsible for network device installation, configuration, performance monitoring, analysis, and overall management. I have a strong interest in pursuing a career in IT, particularly as a web developer.
            </p>
            <div className='flex flex-row mt-8 gap-5 border-t-2 pt-6'>
                <a href="https://www.instagram.com/bdntcxz_/" target='_blank' className='text-white'>
                    <AiFillInstagram className='text-4xl bg-gradient-to-br from-pink-600 to-purple-600 p-1 rounded-full hover:scale-125 hover:rotate-90 transition-transform duration-300'/>
                </a>
                <a href="https://github.com/untgbdmn" target='_blank' className='text-white'>
                    <AiFillGithub className='text-4xl bg-black p-1 rounded-full hover:scale-125 hover:rotate-45 transition-transform duration-300 ' />
                </a>
                <a href="https://www.linkedin.com/in/untung-budiman" target='_blank' className='text-white'>
                    <AiFillLinkedin className='text-4xl bg-blue-600 p-1 rounded-full hover:scale-125 hover:rotate-45 transition-transform duration-300 ' />
                </a>
                <a href="https://x.com/mantuairisc_" target='_blank' className='text-white'>
                    <FaSquareXTwitter className='text-4xl bg-black p-1 rounded-full hover:scale-125 hover:rotate-45 transition-transform duration-300 ' />
                </a>
                <a href="mailto:budimanuntung14@gmail.com" target='_blank' className='text-white'>
                    <MdEmail className='text-4xl bg-red-500 p-1 rounded-full hover:scale-125 hover:rotate-45 transition-transform duration-300 ' />
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

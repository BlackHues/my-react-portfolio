import HeroImage from '../assets/heroImage.JPG';
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from 'react-scroll';


  
const Home = () => {

  return (
    <div name="home" className='md:h-screen bg-gradient-to-b from-black to-gray-800 text-white flex flex-col justify-center items-center'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-4'>
        <div className='flex flex-col justify-center text-center md:text-left md:mr-10'>
        <h2 className='text-4xl sm:text-7xl font-bold text-left'>
          I'm a Full Stack Developer
        </h2>
          <p className='text-gray-500 py-4 max-w-md text-justify'>
            I am Arjun Kumar H, I'm from Kollam, Kerala. With a B.Tech in mechanical engineering and 1 year of experience as a Python Developer (Django) at Futuro IT Solutions Pvt Ltd. Currently my aim is to work in a well known organization and contribute my skills. My passion for react.js made me focused on React and i'm self learning and doing projects on it as well.
          </p>
          <div>
            <Link to="portfolio" smooth duration={300} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300'>
                <RxDoubleArrowRight size={18} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-5/6 md:w-3/5' />
        </div>
      </div>    
    </div>
  );
};

export default Home;
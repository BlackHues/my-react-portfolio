import React from 'react'
import HeroImage from '../assets/heroImage.JPG'
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full px-4 md:flex-row' >
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a React JS Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Worked at Futuro IT Solutions at Ernakulam for 1 year as Python Developer, where i used Django Frameworks to create responsive web applications with both front and backends. Before coming to software field i was working as Technician for IFB Home Appliances & Services at Trivandrum for 2 years and another 1 year as NDT Engineer in L.G Inspection Services at Chennai
                </p>
            <div>
                <Link to="portfolio" smooth duration={300} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio 
                    <span className='group-hover:rotate-90 duration-300'>
                    <RxDoubleArrowRight size={18} className='ml-1'/>
                    </span>
                </Link>
            </div>
            </div>
                <div>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-5/6 md:w-3/5'   />
                </div>
            </div>    
        </div>
  );
};

export default Home

import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-5 text-justify'>
            I'm Arjun Kumar H, I completed my Bachelor's Degree in Mechanical Engineering (2016) from Younus Institute Of Technology; Kannanalloor, Kollam. After College did Technical Course in QA&QC (2016) at Blitz Academy, Kollam  and got placed as NDT Engineer (2017-2018) at L.G Inspection Services , Chennai. 
            Later came back to Kollam, for family reasons and joined at IFB Home Appliances & Services, Paripally as a Technician (2019-2021). At covid time learned Python-Django from Youtube, and did 1 year internship as Python Developer (2022-2023) at Futuro IT Solutions, Ernakulam</p>
        <br />
        <p className='text-xl text-justify'>
            My family consists of Mother, Elder Brother and Myself. My hobbies are Photography, Drawing, Bike ride, Travelling, etc. I can speak Tamil (Native), English (Fluent) and Malayalam (Fluent). I have passion in self-learning and ready to face any obstacles and clear it. I'm currently looking for a job in React Domain.
        </p>
      </div>
    </div>
  )
}

export default About

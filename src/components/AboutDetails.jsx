/* eslint-disable react/no-unescaped-entities */
import dammy from '../assets/DamiPhoto.jpg'

const AboutDetails = () => {
  return (
    <>
   
    <div className="about-details w-4/5 m-auto flex flex-col lg:flex-row justify-center  gap-4 pb-8 border-b">
        <div className="left w-2/5">
            <img src={dammy} alt="" width="290rem" />
        </div>

        <div className="right w-full lg:w-3/5">
            <div>
                <h2 className='text-[2rem] lg:text-[3.2rem] font-bold'>Welcome to Dammy Bytes!</h2>

                <p className='text-[1.2rem]'>Hi I'm Dammy, the creator and author of Dammy Bytes. I'm passionate about technology, coding, and everything in between. With a strong background in web development and a drive to stay at the forefront of the tech space, I've built this blog to share my journey, insights, and knowledge with fellow tech enthusiasts.
                </p>
                <br />

                <h2 className='text-[1.5rem] font-bold'>
                    My Tech Journey
                </h2>

                <p className='text-[1.2rem]'>
                    My journey into the world of technology began with a curiosity for how things work under the hood. From tinkering with code to building full-fledged applications, I've grown into a developer who thrives on solving complex problems and bringing innovative ideas to life. Over the years, I've honed my skills in HTML, CSS, JavaScript, and React, among other technologies.
                </p>

                <br />

                <h2 className='text-[1.5rem] font-bold'>Why Dammy Bytes?</h2>

                <p className='text-[1.2rem]'>
                    Dammy Bytes is more than just a blog—it's a space where I connect with like-minded individuals, share valuable resources, and explore the ever-evolving landscape of technology. Whether you're a seasoned developer or just starting, my goal is to provide content that resonates with you, challenges you to grow, and keeps you engaged with the latest in tech.
                </p>
                    

            </div>
        </div>      
    </div>

    <div className="benefits mt-10 m-auto w-4/5 text-center border-b">
        <h2 className='text-[2.5rem] font-bold mb-2'>What You'll Find Here</h2>
        
        <ul className='text-[1.3rem] w-4/5 m-auto'>
                <li><span className='font-semibold'>In-Depth Tutorials</span>: Step-by-step guides to help you navigate various aspects of web development.</li>
                <li><span className='font-semibold'>Tech Insights:</span> My take on the latest trends, tools, and technologies in the industry.</li>
                <li><span className='font-semibold'>Personal Stories:</span> Reflections on my experiences, both successes and challenges, in the tech world.</li>
                <li><span className='font-semibold'>Project Showcases:</span> A look at some of the projects I've worked on, with insights into the process and lessons learned.</li>
        </ul>
         
        


        <h2 className='text-[2.5rem] font-bold mt-16 border-t pt-6'>
            Let's Connect
        </h2>

        <p className='text-[1.3rem] mb-16'>
            I'm always excited to connect with others who share my passion for tech. Whether you have a question, want to collaborate, or just want to chat, feel free to reach out! You can find me on LinkedIn, Twitter, or drop me an email at [damilolaoni07@gmail.com].
        </p>
    </div>
    </>
  )
}

export default AboutDetails

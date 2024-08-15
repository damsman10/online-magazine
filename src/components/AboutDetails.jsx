/* eslint-disable react/no-unescaped-entities */
import dammy from '../assets/DamiPhoto.jpg'

const AboutDetails = () => {
  return (
    <div className="about-details w-4/5 m-auto flex justify-center gap-8 border border-black my-[8rem] ">
        <div className="left w-2/5">
            <img src={dammy} alt="" width="300rem" />
        </div>

        <div className="right w-3/5">
            <div>
                <h2 className='text-[3.5rem] font-bold'>Welcome to Dammy Bytes!</h2>

                <p className='text-[1.4rem]'>Hi I'm Dammy, the creator and author of Dammy Bytes. I'm passionate about technology, coding, and everything in between. With a strong background in web development and a drive to stay at the forefront of the tech space, I've built this blog to share my journey, insights, and knowledge with fellow tech enthusiasts.
                </p>

                <h2>
                    My Tech Journey
                </h2>

                <p className='text-[1.4rem]'>
                    My journey into the world of technology began with a curiosity for how things work under the hood. From tinkering with code to building full-fledged applications, I've grown into a developer who thrives on solving complex problems and bringing innovative ideas to life. Over the years, I've honed my skills in HTML, CSS, JavaScript, and React, among other technologies.
                </p>
                    



            </div>
        </div>      
    </div>
  )
}

export default AboutDetails

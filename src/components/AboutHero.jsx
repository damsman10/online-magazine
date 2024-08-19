/* eslint-disable react/prop-types */

import abouthero from '../assets/aboutbg.jpg'

const AboutHero = (props) => {
  return (
    <div className="w-full h-[30vh] lg:h-[40vh] mb-8 flex justify-center items-center " style={{backgroundImage: `url(${abouthero})`}}>
        <h1 className='text-[white] text-[2rem] lg:text-[4rem]'>{props.text}</h1>
        
      
    </div>
  )
}

export default AboutHero

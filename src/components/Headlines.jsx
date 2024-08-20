/* eslint-disable react/no-unescaped-entities */
import Button from "./Button"
import mb from '../assets/mb.jpg'
import DamiPhoto from '../assets/DamiPhoto.JPG'

const Headlines = () => {
    
  return (
    <div className="flex flex-col lg:flex-row my-16 justify-between m-auto w-4/5 gap-4">
        <div className="left-head flex flex-col-reverse lg:flex-row justify-between w-full lg:w-2/4 bg-[#d9dce4]">
            
            <div className="text p-7 bg-[#e7ebee] w-full lg:w-2/3 text-center lg:text-left">
                <h3 className="font-bold text-[0.8rem]">ABOUT ME</h3>
                <h5 className="my-5 font-bold text-[1.5rem]">Hi to everyone. <br /> My name is Dammy!</h5>
                <p className="mb-6 leading-8 w-[90%]">I am the Chief Editor at Dammy Bytes. Dammy Bytes is a daily updated tech blog aiming to inspire and inform readers on events, and trends in the IT Sphere </p>
                <Button bg="white" text="READ MORE" />
            </div>

            <div className="image h-[20vh] lg:h-full w-full lg:w-1/3 bg-cover bg-center" style={{backgroundImage: `url(${DamiPhoto})`}}>

            </div>
        </div>




        <div className="middle-head w-full lg:w-[22%] bg-cover bg-center flex flex-row lg:flex-col">
            <div className="top w-[50%] lg:w-[100%] lg:h-[57%]" style={{backgroundImage: `url(${mb})`}}>
                
            </div>
            <div className="bottom h-[43%] bg-[#3F505A] p-6">
                <h3 className="text-[white] text-xl mb-4">Web Dev category</h3>
                <p className="text-[white] text-sm leading-6">The concept of web development is shaped by things with meaning.</p>
            </div>
        </div>

        <div className="right-head w-full lg:w-[22%] bg-[#3F505A] p-10 text-center">
            <p className="text-center font-bold text-[white] text-[0.8rem]">INSPIRATION</p>
            <h2 className="text-center text-[1.3rem] text-[white] my-6">Inspiration category</h2>
            <p className="text-center text-[white] leading-8 mb-8">Coming from two different cultures has been instrumental in how we've approached</p>
            <Button color="white" text="READ MORE"/>
        </div>
      
    </div>
  )
}

export default Headlines

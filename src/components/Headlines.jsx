/* eslint-disable react/no-unescaped-entities */
import Button from "./Button"
import dammy from '../assets/DamiPhoto.JPG'
import mb from '../assets/mb.jpg'

const Headlines = () => {
  return (
    <div className="flex my-16 justify-between m-auto w-4/5 h-96">
        <div className="left-head flex justify-between w-2/4 bg-[#d9dce4]">
            
            <div className="text p-7 bg-[#e7ebee] w-2/3">
                <h3 className="font-bold">ABOUT ME</h3>
                <h5 className="my-5 font-bold text-[1.5rem]">Hi to everyone. <br /> My name is Dammy!</h5>
                <p className="mb-6 leading-8 w-4/5">I am the Chief Editor at Dammy Bytes. Dammy Bytes is a daily updated tech blog aiming to inspire and inform readers on events, and trends in the IT Sphere </p>
                <Button bg="white" text="READ MORE" />
            </div>

            <div className="image w-1/3 bg-cover bg-center" style={{backgroundImage: `url(${dammy})`}}>

            </div>
        </div>

        <div className="middle-head w-[22%] bg-cover bg-center">
            <div className="top h-[57%]" style={{backgroundImage: `url(${mb})`}}>
                
            </div>
            <div className="bottom h-[43%] bg-[#3F505A] p-6">
                <h3 className="text-[white] text-xl mb-4">Web Dev category</h3>
                <p className="text-[white] text-sm">The concept of web development is shaped by things with meaning.</p>
            </div>
        </div>

        <div className="right-head w-[22%] bg-[#3F505A] p-10 text-center">
            <p className="text-center font-bold text-[white] text-[0.8rem]">INSPIRATION</p>
            <h2 className="text-center text-[1.3rem] text-[white] my-6 px-12">Inspiration category</h2>
            <p className="text-center text-[white] leading-8 mb-8">Coming from two different cultures has been instrumental in how we've approached</p>
            <Button color="white" text="READ MORE"/>
        </div>
      
    </div>
  )
}

export default Headlines

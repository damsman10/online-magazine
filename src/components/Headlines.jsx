/* eslint-disable react/no-unescaped-entities */
import Button from "./Button"
import dammy from '../assets/DamiPhoto.JPG'
import mb from '../assets/mb.jpg'

const Headlines = () => {
  return (
    <div className="flex my-16 justify-between m-auto w-4/5 h-96">
        <div className="left-head flex justify-between w-2/4 bg-[#d9dce4]">
            
            <div className="text p-7 bg-[#c8deeb] w-2/3">
                <h3 className="font-bold">ABOUT ME</h3>
                <h5>Hi to everyone. My name is Dammy!</h5>
                <p>I am the Chief Editor at Dammy Bytes. Dammy Bytes is a daily updated tech blog aiming to inspire and inform readers on events, and trends in the IT Sphere </p>
                <Button text="READ MORE" />
            </div>

            <div className="image w-1/3 bg-cover bg-center" style={{backgroundImage: `url(${dammy})`}}>

            </div>
        </div>

        <div className="middle-head w-[22%] bg-cover bg-center">
            <div className="top h-[57%]" style={{backgroundImage: `url(${mb})`}}>
                
            </div>
            <div className="bottom h-[43%] bg-[#3F505A] p-6">
                <h3>Travel category</h3>
                <p>The concept of travel is shaped by things with meaning.</p>
            </div>
        </div>

        <div className="right-head w-[22%] bg-[#3F505A] p-10 text-center">
            <p className="text-center">INSPIRATION</p>
            <h2 className="text-center">Inspiration category</h2>
            <p className="text-center">Coming from two different cultures has been instrumental in how we've approached</p>
            <Button text="READ MORE"/>
        </div>
      
    </div>
  )
}

export default Headlines

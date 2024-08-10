/* eslint-disable react/no-unescaped-entities */
import Button from "./Button"
import dammy from '../assets/DamiPhoto.JPG'

const Headlines = () => {
  return (
    <div className="flex my-16 justify-between m-auto w-4/5 h-96">
        <div className="left-head flex justify-between w-2/4 bg-[#d5dddd98]">
            
            <div className="text p-7 bg-#F7F7F7 w-2/3">
                <h3 className="font-bold">ABOUT ME</h3>
                <h5>Hi to everyone. My name is Dammy!</h5>
                <p>I am the Chief Editor at Dammy Bytes. Dammy Bytes is a daily updated tech blog aiming to inspire and inform readers on events, and trends in the IT Sphere </p>
                <Button text="READ MORE" />
            </div>

            <div className="image w-1/3 bg-cover bg-center" style={{backgroundImage: `url(${dammy})`}}>

            </div>
        </div>

        <div className="middle-head w-[22%] border border-black">
            <div className="top">

            </div>
            <div className="bottom">
                <h3>Travel category</h3>
                <p>The concept of travel is shaped by things with meaning.</p>
            </div>
        </div>

        <div className="right-head w-[22%] border border-black">
            <p>INSPIRATION</p>
            <h3>Inspiration category</h3>
            <p>Coming from two different cultures has been instrumental in how we've approached</p>
            <Button text="READ MORE"/>
        </div>
      
    </div>
  )
}

export default Headlines

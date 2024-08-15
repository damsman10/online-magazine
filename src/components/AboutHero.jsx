
import abouthero from '../assets/aboutbg.jpg'

const AboutHero = () => {
  return (
    <div className="w-full h-[40vh] mb-8 flex justify-center items-center " style={{backgroundImage: `url(${abouthero})`}}>
        <h1 className='text-[white] text-[4rem]'>About Me</h1>
        
      
    </div>
  )
}

export default AboutHero

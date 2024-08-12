/* eslint-disable react/no-unescaped-entities */
import '../index.css'
import Button from '../components/Button'


const Header = () => {
  return (
    <div className='flex justify-between items-center w-4/5 m-auto py-10 border-b-2'>
      <div className="left-header">
        <h1 className='font-bold text-4xl text-[3rem] font-[grenze]'>{`Dammy <Bytes>`}</h1>
        <p className='tagline text-gray-500 font-[grenze]'>Bytes of Wisdom for Tomorrow's Tech Leaders</p>
      </div>

      <div className="right-header">
        <Button text="SUBSCRIBE" />
      </div>
    </div>
  )
}

export default Header

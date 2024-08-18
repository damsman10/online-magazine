/* eslint-disable react/no-unescaped-entities */
import '../index.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center w-4/5 m-auto py-5 lg:py-10 border-b-2'>
      <div className="left-header">
        <h1 className='font-bold text-[2.5rem] text-center font-[grenze]'><Link to={'/'}>{`Dammy <Bytes>`}</Link></h1>
        <p className='tagline hidden lg:block text-gray-500 font-[grenze]'>Bytes of Wisdom for Tomorrow's Tech Leaders</p>
      </div>

      <div className="right-header hidden lg:block">
        <Button text="SUBSCRIBE" />
      </div>
    </div>
  )
}

export default Header

/* eslint-disable react/no-unescaped-entities */
import '../index.css'
import Button from './Button'


const Header = () => {
  return (
    <div className='flex justify-between items-center w-4/5 m-auto py-14 border-b-2'>
      <div className="left-header">
        <h1 className='font-bold text-4xl'>Dammy's Delight</h1>
        <p>Tagline goes here</p>
      </div>

      <div className="right-header">
        <Button />
      </div>
    </div>
  )
}

export default Header

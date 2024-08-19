/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const BigCard = (props) => {
  return (
    <div className="post flex flex-col justify-between h-[35rem] sm:w-[26rem] md:w-[30rem] lg:w-[39rem] mb-1">
        <div className="top h-[73%] bg-contain" >
        <Link to={`post/${props.slug}`}>
            <img className='object-cover' src={props.pic} alt="" /></Link>
        </div>

        <Link to={`post/${props.slug}`}>
        <div className="bottom text-center h-[27%]">
            <p className='text-[0.8rem] my-3 text-[#9C9793]'>{props.category}</p>
            <h2 className='my-2 sm:text-[1.0rem] md:text-[1.8rem]'>{props.title}</h2>
            <p className='text-sm text-[#A2A591] font-bold'>{props.date}</p>
        </div></Link>
      
    </div>
  )
}

export default BigCard

/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const SmallCard = (props) => {
  return (
    // we are not destructuring our props

    <div className="w-[18rem] md:w-[22rem] h-[23rem] flex flex-col mb-12">
      <Link to={`post/${props.slug}`}>
        <div className="top h-[55%] bg-cover bg-center" style={{backgroundImage: `url(${props.image})`}}>
            {/* <img src={props.image} width="50rem" alt="" /> */}
        </div>

        <div className="botton h-[45%] text-center py-4">
            <p className="category text-[#A2A591] my-[0.1rem] text-[0.8rem] font-bold">{props.category}</p>
            <h3 className="title font-bold my-2">{props.title}</h3>
            <p className="date text-[#9C9793] text-sm font-semibold">{props.date}</p>
        </div>
      </Link>
    </div>
  )
}

export default SmallCard

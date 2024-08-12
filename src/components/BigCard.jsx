/* eslint-disable react/prop-types */


const BigCard = (props) => {
  return (
    <div className="post flex flex-col justify-between h-[35rem] w-[46rem] mb-1">
        <div className="top h-[73%] bg-cover" style={{backgroundImage: `url(${props.pic})`}}>
            {/* <img className='object-cover' src={pic} alt="" /> */}
        </div>

        <div className="bottom text-center h-[27%]">
            <p className='text-[0.8rem] my-3 text-[#9C9793]'>{props.category}</p>
            <h2 className='my-2 text-[1.8rem]'>{props.title}</h2>
            <p className='text-sm text-[#A2A591] font-bold'>{props.date}</p>
        </div>
      
    </div>
  )
}

export default BigCard

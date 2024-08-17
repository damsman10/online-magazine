/* eslint-disable react/prop-types */


const SmallCard = (props) => {
  return (
    <div className="w-[18rem] md:w-[22rem] h-[23rem] flex flex-col mb-12">
        <div className="top h-[55%] bg-cover bg-center" style={{backgroundImage: `url(${props.image})`}}>
            {/* <img src={props.image} width="50rem" alt="" /> */}
        </div>

        <div className="botton h-[45%] text-center py-4">
            <p className="category text-[#A2A591] my-[0.1rem] text-[0.8rem] font-bold">{props.category}</p>
            <h3 className="title font-bold my-2">{props.title}</h3>
            <p className="date text-[#9C9793] text-sm font-semibold">{props.date}</p>
        </div>
      
    </div>
  )
}

export default SmallCard

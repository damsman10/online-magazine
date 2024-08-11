/* eslint-disable react/prop-types */


const SmallCard = (props) => {
  return (
    <div className="w-[22rem] h-[18rem] flex flex-col border border-black mb-12">
        <div className="top h-[70%] bg-cover bg-center border border-black" style={{backgroundImage: `url(${props.image})`}}>
            {/* <img src={props.image} width="50rem" alt="" /> */}
        </div>

        <div className="botton h-[40%] text-center">
            <p className="category text-[#A2A591]">{props.category}</p>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
        </div>
      
    </div>
  )
}

export default SmallCard

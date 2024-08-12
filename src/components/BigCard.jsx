import pic from '../assets/featuredimages/webdev.jpg'

const BigCard = () => {
  return (
    <div className="post flex flex-col justify-between h-[35rem] w-[46rem] border border-black">
        <div className="top h-[75%] bg-cover border border-black" style={{backgroundImage: `url(${pic})`}}>
            {/* <img className='object-cover' src={pic} alt="" /> */}
        </div>

        <div className="bottom text-center h-[25%]">
            <p className='text-[0.8rem] my-2 text-[#9C9793]'>INSPIRATION</p>
            <h2 className='my-2 text-[2rem]'>Beauty Treatments Worth Traveling For</h2>
            <p className='text-sm text-[#A2A591]'>MAY 11, 2016</p>
        </div>
      
    </div>
  )
}

export default BigCard

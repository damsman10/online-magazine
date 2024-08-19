/* eslint-disable react/no-unescaped-entities */
import BigCard from "./BigCard"
import Posts from "../Data File/AllPostsData"


const EditorPicks = () => {
  return (
    <div className="picks w-4/5 m-auto text-center pb-6 border-b">
        <p className="text-[#9C9793] text-[0.8rem] mt-12">BEST POSTS FROM DAMMY</p>
        <p className="my-4">EDITOR'S PICKS</p>
        
        <div className="picks flex flex-col lg:flex-row gap-4 lg:justify-center 2xl:justify-between items-center md:flex-wrap">
        {Posts.map((post) => (
          <BigCard 
            key={post.id}
            slug={post.slug}
            pic={post.image}
            category={post.category}
            title={post.title}
            date={post.date}
          />
        ))}
            
            {/* <BigCard pic={feature} date="MAY 11, 2016" 
            title="Beauty Treatments Worth Traveling For" 
            category="INSPIRATION" 
            />

            <BigCard pic={feature} date="MAY 11, 2016" 
            title="Beauty Treatments Worth Traveling For" 
            category="INSPIRATION" 
            />

            <BigCard pic={feature} date="MAY 11, 2016" 
            title="Beauty Treatments Worth Traveling For" 
            category="INSPIRATION" 
            />

            <BigCard pic={feature} date="MAY 11, 2016" 
            title="Beauty Treatments Worth Traveling For" 
            category="INSPIRATION" 
            /> */}

        </div>
      
    </div>
  )
}

export default EditorPicks

import SmallCard from "./SmallCard"
import posts from "../Data File/TopPostsData"

const TopPosts = () => {
  return (
    <div className="popular w-4/5 m-auto pb-1 border-b-2">
        <p className="text-center mt-10 text-[0.8rem] text-[#A2A591]">MOST POPULAR POSTS</p>
        <h3 className="text-center my-4">TOP POSTS</h3>
        <div className="cards my-2 flex flex-col lg:flex-row justify-between items-center gap-2">

          {posts.map((post) => (
            <SmallCard 
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              date={post.date}
            />
          ))}

          {/* <SmallCard image={webdev}
            category="INSPIRATION"
            title="The Basics of Web Development: Where to Start?"
            date="MARCH 10, 2023"
          />

          <SmallCard image={frontend}
            category="WEB DEV"
            title="Understanding the Differences Between Frontend and Backend Development"
            date="APRIL 12, 2024"
          
          /> */}

          {/* <SmallCard image={devtools}
            category="WEB DEV"
            title="10 Essential Tools for Modern Web Developers"
            date="JUNE 8, 2022"
          
          />
          
          <SmallCard image={reactimg}
            category="WEB DEV"
            title="Why Learn React in 2024?"
            date="FEBRUARY 18, 2024"
          
          /> */}

        </div>
      
    </div>
  )
}

export default TopPosts

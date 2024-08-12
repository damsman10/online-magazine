import SmallCard from "./SmallCard"
import webdev from '../assets/featuredimages/webdev.jpg'
import frontend from '../assets/featuredimages/frontend.jpg'
import devtools from '../assets/featuredimages/devtools.jpg'
import reactimg from '../assets/featuredimages/reactjsimg.jpg'


const TopPosts = () => {
  return (
    <div className="popular w-4/5 m-auto pb-1 border-b-2">
        <p className="text-center mt-10 text-[0.8rem] text-[#A2A591]">MOST POPULAR POSTS</p>
        <h3 className="text-center my-4">TOP POSTS</h3>
        <div className="cards my-2 flex justify-between items-center gap-8">

            <SmallCard image={webdev}
             category="INSPIRATION"
             title="The Basics of Web Development: Where to Start?"
             date="MARCH 10, 2023"
             />

            <SmallCard image={frontend}
             category="WEB DEV"
             title="Understanding the Differences Between Frontend and Backend Development"
             date="APRIL 12, 2024"
            
            />

            <SmallCard image={devtools}
             category="WEB DEV"
             title="10 Essential Tools for Modern Web Developers"
             date="JUNE 8, 2022"
            
            />
            
            <SmallCard image={reactimg}
             category="WEB DEV"
             title="Why Learn React in 2024?"
             date="FEBRUARY 18, 2024"
            
            />

        </div>
      
    </div>
  )
}

export default TopPosts

import SmallCard from "./SmallCard"
import dammy from '../assets/DamiPhoto.JPG'

const TopPosts = () => {
  return (
    <div className="popular w-4/5 m-auto">
        <p className="text-center">MOST POPULAR POSTS</p>
        <h3 className="text-center">TOP POSTS</h3>
        <div className="cards flex justify-between items-center gap-8">
            <SmallCard image={dammy}
             category="INSPIRATION"
             title="The Basics of Web Development: Where to Start?"
             date="MARCH 10, 2016"/>
             
            <SmallCard image={dammy} />
            <SmallCard image={dammy} />
            <SmallCard image={dammy} />

        </div>
      
    </div>
  )
}

export default TopPosts

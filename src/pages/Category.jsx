import { useParams } from "react-router-dom";
import posts from "../Data File/AllPostsData";
import AboutHero from "../components/AboutHero";

const Category = () => {
    const { category } = useParams(); // Get the category from the URL params
  const filteredPosts = posts.filter(post => post.category === category); // Filter posts by category

  if (filteredPosts.length === 0) {
    return <div>No posts available in this category.</div>;
  }

  return (
    
    <div className="category-page">
      <AboutHero text={category.charAt(0).toUpperCase() + category.slice(1)} />
      <h1 className="text-3xl font-bold"></h1>
      <div className="w-4/5 m-auto">      
        <div className="posts-list w-[70rem]  flex flex-col lg:flex-row justify-between gap-8">
          {filteredPosts.map(post => (
            <div key={post.slug} className="post-item w-[55%]">
              <img className="h-[15rem]" src={post.image} alt="" />
              <h2 className="font-bold text-xl my-2">{post.title}</h2>
              <p className="mb-3">{post.excerpt}</p>
              <a className="font-bold bg-[#cecece] py-2 px-5 rounded-lg" href={`/post/${post.slug}`}>Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Category;
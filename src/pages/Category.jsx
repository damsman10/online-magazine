import { useParams } from "react-router-dom";
import posts from "../Data File/AllPostsData";

const Category = () => {
    const { category } = useParams(); // Get the category from the URL params
  const filteredPosts = posts.filter(post => post.category === category); // Filter posts by category

  if (filteredPosts.length === 0) {
    return <div>No posts available in this category.</div>;
  }

  return (
    <div className="category-page">
      <h1 className="text-3xl font-bold">{category}</h1>
      <div className="posts-list">
        {filteredPosts.map(post => (
          <div key={post.slug} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={`/posts/${post.slug}`}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Category;
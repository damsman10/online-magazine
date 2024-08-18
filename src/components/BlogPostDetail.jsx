import { useParams } from "react-router-dom";
import posts from "../Data File/TopPostsData";

const BlogPostDetail = () => {
  const { slug } = useParams(); 
  const post = posts.find(p => p.slug === slug); //find post by slug

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post-detail lg:w-[70%] w-full m-auto">
      <p className="text-sm text-gray-500">{post.category}</p>
      <h1 className="text-[1.5rem] md:text-[3rem] font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <div className="post-image my-4 flex justify-center">
        <img src={post.image} alt={post.title} />
      </div>
      <div
        className="post-content text-justify text-[1.3rem] leading-8 mt-10"
        //rendering the content with dangerouslySetHTML instead of  <p>{post.content}</p>
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </div>
  );
};

export default BlogPostDetail;

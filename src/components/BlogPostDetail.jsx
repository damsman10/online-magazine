import { useParams } from "react-router-dom"
import posts from "../Data File/TopPostsData";

const BlogPostDetail = () => {
    const { slug } = useParams(); 
    const post = posts.find(p => p.slug === slug); //find post by slug

    if (!post) {
        return <div>Post not found</div>
    }

  return (
    <div className="post-detail w-[70%] m-auto">
        <h1 className="text-[3rem] font-bold text-center">{post.title}</h1>
        <p className="text-sm text-gray-500 text-center">{post.date} | {post.category}</p>
        <div className="post-image my-4 flex justify-center">
            <img src={post.image} alt={post.title} />
        </div>
        <div className="post-content text-justify text-[1.3rem] leading-8 mt-10">
            <p>{post.content}</p>
        </div>
      
    </div>
  )
}

export default BlogPostDetail

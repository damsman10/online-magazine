import Aside from "../components/Aside"
import BlogPostDetail from "../components/BlogPostDetail"
import Navigation from "../components/Navigation"
import Header from "../sticky/Header"


const BlogPost = () => {
  return (
    <div>
        <Header />
        <Navigation />
        <div className="flex justify-center gap-4 mt-10 m-auto w-4/5">
          <BlogPostDetail />
          <aside className="w-[18.75] hidden lg:block">
            <Aside />
          </aside>
        </div>
    </div>
  )
}

export default BlogPost

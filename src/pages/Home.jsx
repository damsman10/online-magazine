import EditorPicks from "../components/EditorPicks";
import Headlines from "../components/Headlines";
import Navigation from "../components/Navigation"
import Newsletter from "../components/Newsletter";
import TopPosts from "../components/TopPosts";
import Welcome from "../components/Welcome";
import Footer from "../sticky/Footer";



const Home = () => {
  return (
    <div>
        <Navigation />
        <Headlines />
        <Welcome />
        <TopPosts />
        <EditorPicks />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home;

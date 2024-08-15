import EditorPicks from "../components/EditorPicks";
import Headlines from "../components/Headlines";
import Navigation from "../components/Navigation"
import Newsletter from "../components/Newsletter";
import TopPosts from "../components/TopPosts";
import Welcome from "../components/Welcome";
import Header from "../sticky/Header";
import Top from "../sticky/Top";


const Home = () => {
  return (
    <div>
        <Top />
        <Header />
        <Navigation />
        <Headlines />
        <Welcome />
        <TopPosts />
        <EditorPicks />
        <Newsletter />
    </div>
  )
}

export default Home;

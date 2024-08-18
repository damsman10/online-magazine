import EditorPicks from "../components/EditorPicks";
import Headlines from "../components/Headlines";
import Newsletter from "../components/Newsletter";
import TopPosts from "../components/TopPosts";
import Welcome from "../components/Welcome";


const Home = () => {
  return (
    <div>
        <Headlines />
        <Welcome />
        <TopPosts />
        <EditorPicks />
        <Newsletter />
    </div>
  )
}

export default Home;

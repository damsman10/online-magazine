import Headlines from "../components/Headlines";
import Navigation from "../components/Navigation"
import TopPosts from "../components/TopPosts";
import Welcome from "../components/Welcome";



const Home = () => {
  return (
    <div>
        <Navigation />
        <Headlines />
        <Welcome />
        <TopPosts />
    </div>
  )
}

export default Home;

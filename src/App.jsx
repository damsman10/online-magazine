import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from './sticky/Footer';
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';
import Header from './sticky/Header';



const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/post/:slug" element={<BlogPost />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />

      </div>
    </Router>
  )
}

export default App

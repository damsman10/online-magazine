import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from './sticky/Footer';
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';
import Header from './sticky/Header';
import Inspiration from './pages/Inspiration';
import Contact from './pages/Contact';
import Training from './pages/Training';
import Navigation from './components/Navigation';
import WebDev from './pages/WebDev';



const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/inspiration" element={<Inspiration />}></Route>
            <Route path="/webdev" element={<WebDev />}></Route>
            <Route path="/training" element={<Training />}></Route> 
            <Route path="/post/:slug" element={<BlogPost />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />

      </div>
    </Router>
  )
}

export default App

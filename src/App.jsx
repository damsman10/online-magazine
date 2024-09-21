import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Footer from './sticky/Footer';
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';
import Header from './sticky/Header';
import Category from './pages/Category';
import Contact from './pages/Contact';
import Training from './pages/Training';
import Navigation from './components/Navigation';



const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/category/:category" element={<Category />}></Route>
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

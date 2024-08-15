import AboutDetails from "../components/AboutDetails"
import AboutHero from "../components/AboutHero"
import Navigation from "../components/Navigation"
import Newsletter from "../components/Newsletter"
import Header from "../sticky/Header"


const About = () => {
  return (
    <div>
        <Header />
        <Navigation />
        <AboutHero />
        <AboutDetails />
        <Newsletter />
    </div>
  )
}


export default About

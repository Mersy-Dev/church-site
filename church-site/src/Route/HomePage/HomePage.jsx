import Hero from '../../Components/Hero/Hero'
import Activities from '../../Components/Activities/Activities'
import Worship from '../../Components/Worship/Worship';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Word from '../../Components/Word/Word';
import '../../App.css';


const HomePage = () => {
  return (
    <div>
        <Hero />
        <Word />
        <Activities />
        <Worship />
        <Contact />
        <Footer /> 
    </div>
  )
}

export default HomePage

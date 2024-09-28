import Activities from '../../Components/Activities/Activities'
import Worship from '../../Components/Worship/Worship';
import Contact from '../../Components/Contact/Contact';
import Word from '../../Components/Word/Word';
import '../../App.css';
import Hero from "../../Components/Hero/Hero";


const HomePage = () => {
  return (
    <div>
        <Hero />
        <Word />
        <Activities />
        <Worship />
        <Contact />
    </div>
  )
}

export default HomePage

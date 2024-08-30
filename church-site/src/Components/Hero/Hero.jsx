import './hero.css';
import { Link } from 'react-router-dom';
import vid from '../../assets/hero.mp4'



const Hero = () => {
    return (
        <>
            <section className='hero-container' id='home'>
                <div className="socials">
                    
                </div>
                <div className='container'>
                    <video className="video-background" autoPlay loop muted>
                        <source src={vid} type="video/mp4" />
                        {/* Your browser does not support the video tag. */}
                    </video>
                    <div className="text-overlay">
                        <h1>Welcome to Word House</h1>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Hero
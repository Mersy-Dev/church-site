import signs from '../../assets/signs.jpeg'
import './signsWonder.css'


const SignsWonders = () => {
  return (
    <div className="signs-hero">
        <div className="hero-container">
            <div className="signs-hero-img">
                <img src={signs} alt="" />
                <h2>SIGNS AND WONDERS</h2>
            </div>
        </div>
    </div>
  )
}

export default SignsWonders

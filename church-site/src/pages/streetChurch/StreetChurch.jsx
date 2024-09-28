import street from '../../assets/street.jpeg'
import './streetChurch.css';

const StreetChurch = () => {
  return (
    <div className='stree-hero'>
        <div className="hero-container">
            <div className="street-hero-img">
                <img src={street} alt="" />
                <h2>STREET CHURCH</h2>
            </div>
        </div>
    </div>
  )
}

export default StreetChurch

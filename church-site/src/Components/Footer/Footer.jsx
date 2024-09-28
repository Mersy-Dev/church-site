
import { Link } from 'react-router-dom';
import './footer.css';



const Footer = () => {
  return (
    <>
        <div className="containerr">
            <div className="foot_wrapper">
                <div className="sides">
                   <a href=""><li>Help</li></a> 
                    <ul>
                        <a href=""><li>Pray for me</li></a>
                        <a href=""><li>I want to be saved </li></a>
                    </ul>
                </div>
                <div className="sides">
                 <a href=""><li>Resources</li></a> 
                    <ul>
                        <a href=""><li>Videos</li></a>
                        <a href=""><li>Images</li></a>
                        <a href=""><li>Audios</li></a>
                        <a href=""><li>Blog</li></a>
                        <a href=""><li>Radio</li></a>


                    </ul>
                </div>
                <div className="sides">
                <a href=""><li>Ministries</li></a> 
                    <ul>
                        <Link to="/streetchurch"><li>Street Church</li></Link>
                        <Link to="/metro"><li>Metro Meet</li></Link>
                        <Link to="/shiftingTurnings"><li>Shifting & Turnings </li></Link>
                        <Link to="/signs"><li>Signs & Wonders </li></Link>


                    </ul>
                </div>
                <div className="sides">
                <a href=""><li>About</li></a> 
                    <p>WORD HOUSE is a Young People's Church of The Men of Issachar Vision Inc.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer   
import { useState } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";
import "./header.css"
import logo from "../../assets/mivwh-logo.PNG"




const Header = () => {
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    // Toogle Menu
    const [Mobile, setMobile] = useState(false)

    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} width={150} alt='' />
                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            <li>
                                <a href='#ministries'>Our Ministries</a>
                                <ul className="dropdown-content">
                                    <li><a href='#fun'>Metro Meet</a></li>
                                    <li><a href='#fact'>Street Church</a></li>
                                    <li><a href='#fact'>Shifting & Turning</a></li>
                                    <li><a href='#fact'>Signs & Wonders</a></li>

                                </ul>
                            </li>
                            <li>
                                <a href='#about'>About Us</a>
                            </li>
                            <li>
                                <a href='#new'>I'm New</a>
                            </li>
                            <li>
                                <a href='#resources'>Resources</a>
                                <ul className='dropdown-contents'>
                                    <li><a href='#audio'>Audio</a></li>
                                    <li><a href='#blog'>Blog</a></li>
                                    <li><a href='#video'>video</a></li>
                                    <li><a href='#image'>Image</a></li>
                                    <li><a href='#radio'>Radio</a></li>


                                </ul>
                            </li>
                            <li>
                                <a href='#contact'>Contact Us</a>
                            </li>
                            <a href="give" target="_blank">
                                <button className='home-btn'>
                                    Give
                                </button>
                            </a>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <FaTimes className="close home-btn" /> : <FaBars className="open" />}
                        </button>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header
import './contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
        <section>
            <div className="contact containers">
                <h1>OUR <span>CONTACT</span></h1>

               <div className="holder">
                    <div className="icons">
                        
                        <div className="icon-items first">
                            <FaPhoneAlt className='ic' />
                            <h4>+234 8163047854</h4>
                        </div>
                        <div className="icon-items">
                            <IoMdMail className='ic' />
                            <h4>mivwordhouse.com@gmail.com</h4>
                        </div>

                    </div>
                    <div className="map"></div>
               </div>
            </div>

        </section>
    </>
  )
}

export default Contact
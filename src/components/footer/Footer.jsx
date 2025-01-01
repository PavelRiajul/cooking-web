import "./Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import logo from "../../../public/assets/nav-hero/Foodieland..png"
const Footer = () => {
  return (
    <>
    <div className="container footer">
        <div className="first-section">
        <div className="logo">
            <img src={logo} alt="" />
            <p className="logo-text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        <div className="nav">
            <ul>
                <li><a href="#">Recipes</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </div>
        </div>
        <div className="second-section">
            <div className="copy-text">
            @2020 Flowbase.Powered by <span className="f-span"><a href="#">Webflow</a></span>
            </div>
             <div className="social-icon">
                        <div className="icons">
                        <a href="#">
                            <FaFacebook/>
                        </a>
                        <a href="#">
                        <FaInstagram/>
                        </a>
                        <a href="#">
                            <FaTwitter/>
                        </a>
                        </div>
                    </div>
        </div>
    </div>
    </>
  )
}

export default Footer
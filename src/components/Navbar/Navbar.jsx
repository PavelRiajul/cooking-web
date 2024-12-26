import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <header>
        {/* logo */}
        <div className="logo">
           <a href="#">
           <img src="/src/assets/Foodieland..png" alt="" />
           </a>
        </div>

        {/* menu items */}
        <nav className="nav_items">
           <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#home">Recipes</a></li>
            <li><a href="#home">Blog</a></li>
            <li><a href="#home">Contact</a></li>
            <li><a href="#home">About us</a></li>
           </ul>
        </nav>

        {/* social icons */}
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
    </header>
    </>
  )
}
export default Navbar
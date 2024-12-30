import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <header>
        {/* logo */}
        <Link to={"/"}>
        <div className="logo">
           <a href="#">
           <img src="/src/assets/Foodieland..png" alt="" />
           </a>
        </div>
        </Link>
        

        {/* menu items */}
        <nav className="nav_items">
           <ul>
            <Link to={"/"}><li><a href="#home">Home</a></li></Link>
            <Link to={"/recipes"}><li><a href="#home">Recipes</a></li></Link>
            <Link to={"/blog"}><li><a href="#home">Blog</a></li></Link>
            <Link to={"/contact"}><li><a href="#home">Contact</a></li></Link>
            <Link to={"/about"}><li><a href="#home">About us</a></li></Link>
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
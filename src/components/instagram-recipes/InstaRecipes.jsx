import { FaInstagram } from "react-icons/fa"
import "./InstaRecipes.css"
import instaImg1 from "../../../public/assets/insta-image/Post.png"
import instaImg2 from "../../../public/assets/insta-image/Post (1).png"
import instaImg3 from "../../../public/assets/insta-image/Post (2).png"
import instaImg4 from "../../../public/assets/insta-image/Post (3).png"
const InstaRecipes = () => {
  return (
    <>
    <div className=" insta-recipes">
        <div className="recipes-headings">
        <h1 className="recipe-heading">Cheek out @foodieland on Instagram</h1>
        <p className="recipe-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem perferendis porro vitae minima velit cumque nesciunt, placeat debitis quas, amet mollitia!</p>
        </div>

        {/* insta-cards */}
        <div className=" insta-cards">
            <div className="insta-card">
                <img src={instaImg1} alt="" />
            </div>
            <div className="insta-card">
                <img src={instaImg2} alt="" />
            </div>
            <div className="insta-card">
                <img src={instaImg3} alt="" />
            </div>
            <div className="insta-card">
                <img src={instaImg4} alt="" />
            </div>
        </div>
        <div className="insta-btn">
            <a className="btn-insta" href="#">Visit Our Instagram
            <FaInstagram/>
            </a>
            
        </div>
    </div>
    </>
  )
}

export default InstaRecipes
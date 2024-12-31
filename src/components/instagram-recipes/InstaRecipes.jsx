import { FaInstagram } from "react-icons/fa"
import "./InstaRecipes.css"

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
                <img src="/public/assets/insta-image/Post.png" alt="" />
            </div>
            <div className="insta-card">
                <img src="/public/assets/insta-image/Post (1).png" alt="" />
            </div>
            <div className="insta-card">
                <img src="/public/assets/insta-image/Post (2).png" alt="" />
            </div>
            <div className="insta-card">
                <img src="/public/assets/insta-image/Post (3).png" alt="" />
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
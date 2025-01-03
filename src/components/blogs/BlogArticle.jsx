import { Link } from "react-router-dom"
import "./BlogArticle.css"
import blogImg1 from "../../../public/assets/blog-image/Mask Group.png"
import blogImg2 from "../../../public/assets/blog-image/Mask Group (1).png"
import blogImg3 from "../../../public/assets/blog-image/Mask Group (2).png"
import blogImg4 from "../../../public/assets/blog-image/Mask Group (3).png"
import blogImg5 from "../../../public/assets/blog-image/Mask Group (4).png"
import blogImg6 from "../../../public/assets/blog-image/Mask Group (5).png"
import blogImg7 from "../../../public/assets/blog-image/Mask Group (6).png"
import blogImg8 from "../../../public/assets/blog-image/Mask Group (7).png"
import blogImg9 from "../../../public/assets/blog-image/Mask Group (8).png"
import adsImg from "../../../public/assets/recipes-categories/Ads.png"
import ellipseIm1 from "../../../public/assets/blog-image/Ellipse 2.png"
import ellipseIm2 from "../../../public/assets/blog-image/Ellipse 2 (1).png"
import ellipseIm3 from "../../../public/assets/blog-image/Ellipse 2 (2).png"
import ellipseIm4 from "../../../public/assets/blog-image/Ellipse 2 (3).png"
import ellipseIm5 from "../../../public/assets/blog-image/Ellipse 2 (4).png"
import ellipseIm6 from "../../../public/assets/blog-image/Ellipse 2 (5).png"
const BlogArticle = () => {
  return (
    <>
    <div className="container blogs-articles">
    <div className="recipes-headings" id="blog-heading">
            <h1 className="recipe-heading">Blog & Article</h1>
            <p className="recipe-text" id="blog-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore distinctio voluptatibus deserunt totam a nemo culpa tempora!</p>

            
        <div className="search-input" id="input-search">
           <input className="input-search" id="input" type="text" placeholder="Your email address..." />
           <button className="search-btn" id="btn-search"><a href="#">Search</a></button>
        </div>
         </div>
         {/* blog articles category */}
         <Link to={"/blogpost"}>
         <div className="container articles-categories">
           {/* articles cards */}
           <div className="article-cards">
           <div className="article-card">
            <div className="article-image">
                <img src={blogImg1} alt="" />
            </div>
            <div className="article-descriptions">
                <h2 className="article-name">Crochet Projects for Noodle Lovers</h2>
                <p className="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti quas quo reiciendis atque inventore ipsam quam laborum.</p>

                <div className="ellips-dates">
                    <div className="ellips">
                        <img src={ellipseIm1} alt="" />
                        <h4 className="ellips-heading">Wade Warren</h4>
                        <span className="border"></span>
                    </div>
                    <div className="date">
                        <h5 className="date-heading">12 November 2021</h5>
                    </div>
                </div>
            </div>
         </div>

         <div className="article-card">
            <div className="article-image">
                <img src={blogImg2} alt="" />
            </div>
            <div className="article-descriptions">
                <h2 className="article-name">10 Vegetarian Recipes To Eat This Month</h2>
                <p className="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti quas quo reiciendis atque inventore ipsam quam laborum.</p>

                <div className="ellips-dates">
                    <div className="ellips">
                        <img src={ellipseIm2} alt="" />
                        <h4 className="ellips-heading">Wade Warren</h4>
                        <span className="border"></span>
                    </div>
                    <div className="date">
                        <h5 className="date-heading">12 November 2021</h5>
                    </div>
                </div>
            </div>
         </div>
         <div className="article-card">
            <div className="article-image">
                <img src={blogImg3} alt="" />
            </div>
            <div className="article-descriptions">
              <h2 className="article-name">Full Guide to Becoming a Professional Chef</h2>
                <p className="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti quas quo reiciendis atque inventore ipsam quam laborum.</p>

                <div className="ellips-dates">
                    <div className="ellips">
                        <img src={ellipseIm3} alt="" />
                        <h4 className="ellips-heading">Wade Warren</h4>
                        <span className="border"></span>
                    </div>
                    <div className="date">
                        <h5 className="date-heading">12 November 2021</h5>
                    </div>
                </div>
            </div>
         </div>
         <div className="article-card">
            <div className="article-image">
                <img src={blogImg4} alt="" />
            </div>
            <div className="article-descriptions">
                <h2 className="article-name">Simple & Delicious Vegetarian Lasagna</h2>
                <p className="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti quas quo reiciendis atque inventore ipsam quam laborum.</p>

                <div className="ellips-dates">
                    <div className="ellips">
                        <img src={ellipseIm4} alt="" />
                        <h4 className="ellips-heading">Wade Warren</h4>
                        <span className="border"></span>
                    </div>
                    <div className="date">
                        <h5 className="date-heading">12 November 2021</h5>
                    </div>
                </div>
            </div>
         </div>
         <div className="article-card">
            <div className="article-image">
                <img src={blogImg5} alt="" />
            </div>
            <div className="article-descriptions">
                <h2 className="article-name">Plantain and Pinto Stew with Aji Verde</h2>
                <p className="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti quas quo reiciendis atque inventore ipsam quam laborum.</p>

                <div className="ellips-dates">
                    <div className="ellips">
                        <img src={ellipseIm5} alt="" />
                        <h4 className="ellips-heading">Wade Warren</h4>
                        <span className="border"></span>
                    </div>
                    <div className="date">
                        <h5 className="date-heading">12 November 2021</h5>
                    </div>
                </div>
            </div>
         </div>
         <div className="article-card">
            <div className="article-image">
                <img src={blogImg6} alt="" />
            </div>
            <div className="article-descriptions">
                <h2 className="article-name">We're Hiring a Communications Assistant!</h2>
                <p className="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti quas quo reiciendis atque inventore ipsam quam laborum.</p>

                <div className="ellips-dates">
                    <div className="ellips">
                        <img src={ellipseIm6} alt="" />
                        <h4 className="ellips-heading">Wade Warren</h4>
                        <span className="border"></span>
                    </div>
                    <div className="date">
                        <h5 className="date-heading">12 November 2021</h5>
                    </div>
                </div>
            </div>
         </div>
           </div>
           {/* sidebar articles */}
           <div className="sidebar-articles">
            <h2 className="sidebar-heading">Tasty Recipes</h2>
            <div className="sidebar-article-category">
                <div className="sidebar-article">
                <div className="sidebar-article-image">
                    <img src={blogImg7} alt="" />
                  </div>
                  <div className="sidebar-article-des">
                  <h2 className="sidebar-article-heading">Chicken Meatballs with Cream Cheese</h2>
                  <h5 className="sidebar-article-text">By Andreas Paula</h5>
                  </div>
                </div>
                <div className="sidebar-article">
                <div className="sidebar-article-image">
                    <img src={blogImg8} alt="" />
                  </div>
                  <div className="sidebar-article-des">
                  <h2 className="sidebar-article-heading">Traditional Bolognaise Ragu</h2>
                  <h5 className="sidebar-article-text">By Andreas Paula</h5>
                  </div>
                </div>
                <div className="sidebar-article">
                <div className="sidebar-article-image">
                    <img src={blogImg9} alt="" />
                  </div>
                  <div className="sidebar-article-des">
                  <h2 className="sidebar-article-heading">Pork and Chive Chinese Dumplings</h2>
                  <h5 className="sidebar-article-text">By Andreas Paula</h5>
                  </div>
                </div>
            </div>
            <div className="sidebar-image">
                <img src={adsImg} alt="" />
            </div>
           </div>
        </div>
         </Link>
    </div>
    </>
  )
}
export default BlogArticle
import "./Categories.css"
import categoryImg1 from "../../../public/assets/categories-cards/image 25.png"
import categoryImg2 from "../../../public/assets/categories-cards/image 20.png"
import categoryImg3 from "../../../public/assets/categories-cards/image 21.png"
import categoryImg4 from "../../../public/assets/categories-cards/image 22.png"
import categoryImg5 from "../../../public/assets/categories-cards/image 23.png"
import categoryImg6 from "../../../public/assets/categories-cards/image 24.png"
const Categories = () => {
  return (
    <>
    <div className="container categories">
        <div className="caption-category">
        <h1 className="heading-categories">Categories</h1>
        <div className="view-all-btn">
            <a href="#">View All Categories</a>
        </div>
    </div>
        {/* cards-categories */}
        <div className="cards">
            <div className="card" id="card1">
                <div className="card-img">
                    <img src={categoryImg1} alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card2">
                <div className="card-img">
                    <img src={categoryImg2} alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card3">
                <div className="card-img">
                    <img src={categoryImg3} alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card4">
                <div className="card-img">
                    <img src={categoryImg4} alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card5">
                <div className="card-img">
                    <img src={categoryImg5} alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card6">
                <div className="card-img">
                    <img src={categoryImg6} alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
        </div>
    </div>
    </>
  )
}
export default Categories
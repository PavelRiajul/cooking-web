import "./Categories.css"

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
                    <img src="/public/assets/categories-cards/image 25.png" alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card2">
                <div className="card-img">
                    <img src="/public/assets/categories-cards/image 20.png" alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card3">
                <div className="card-img">
                    <img src="/public/assets/categories-cards/image 21.png" alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card4">
                <div className="card-img">
                    <img src="/public/assets/categories-cards/image 22.png" alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card5">
                <div className="card-img">
                    <img src="/public/assets/categories-cards/image 23.png" alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
            <div className="card" id="card6">
                <div className="card-img">
                    <img src="/public/assets/categories-cards/image 24.png" alt="" />
                </div>
                <h3>Breakfast</h3>
            </div>
        </div>
    </div>
    </>
  )
}
export default Categories
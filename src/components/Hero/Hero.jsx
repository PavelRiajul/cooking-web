import "./Hero.css"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="left-box"></div>
        <div className=" container hero-container">
            {/* hero text */}
            <div className="hero-text">
                <div className="group-img">
                   <img src="/public/assets/Group 828.png" alt="" />
                </div>
                <div className="badge-image">
                    <img src="/public/assets/Badge.png" alt="" />
                </div>
               <h1 className="heading">Spicy delicious chicken wings</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis tempora provident saepe cum, suscipit esse velit similique earum ?</p>
               <div className="btn-group">
                <a className="btn" href="#">
                    <img src="/public/assets/Timer.png" alt="" />
                    30 Minutes</a>
                <a className="btn" href="#">
                    <img src="/public/assets/ForkKnife.png" alt="" />
                    Chicken</a>
               </div>
               <div className="ellipes-btn">
                  <div className="ellipes">
                    <img src="/public/assets/Ellipse 2.png" alt="" />
                  </div>
                  <div className="view-btn">
                    <a href="#">View Recipes </a>
                    <img src="/public/assets/PlayCircle.png" alt="" />
                  </div>
               </div>
            </div>
            {/* hero-images */}
            <div className="hero-image">
                <img src="/public/assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png" alt="" />
            </div>
        </div>
        <div className="right-box"></div>
      </div>
    </>
  )
}
export default Hero
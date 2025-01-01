import "./Hero.css"
import heroImage  from"../../../public/assets/nav-hero/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png"
import groupImage from "../../../public/assets/nav-hero/Group 828.png"
import badgeImage from "../../../public/assets/nav-hero/Badge.png"
import timerImg from "../../../public/assets/nav-hero/Timer.png"
import forkKnifeImg from "../../../public/assets/nav-hero/ForkKnife.png"
import ellipseImg from "../../../public/assets/nav-hero/Ellipse 2.png"
import playCircle from "../../../public/assets/nav-hero/PlayCircle.png"
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="left-box"></div>
        <div className=" container hero-container">
            {/* hero text */}
            <div className="hero-text">
                <div className="group-img">
                   <img src={groupImage} alt="" />
                </div>
                <div className="badge-image">
                    <img src={badgeImage} alt="" />
                </div>
               <h1 className="heading">Spicy delicious chicken wings</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis tempora provident saepe cum, suscipit esse velit similique earum ?</p>
               <div className="btn-group">
                <a className="btn" href="#">
                    <img src={timerImg} alt="" />
                    30 Minutes</a>
                <a className="btn" href="#">
                    <img src={forkKnifeImg} alt="" />
                    Chicken</a>
               </div>
               <div className="ellipes-btn">
                  <div className="ellipes">
                    <img src={ellipseImg} alt="" />
                  </div>
                  <div className="view-btn">
                    <a href="#">View Recipes </a>
                    <img src={playCircle} alt="" />
                  </div>
               </div>
            </div>
            {/* hero-images */}
            <div className="hero-image">
                <img src={heroImage} alt="" />
            </div>
        </div>
        <div className="right-box"></div>
      </div>
    </>
  )
}
export default Hero
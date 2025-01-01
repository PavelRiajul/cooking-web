import "./RecipesCategories.css"
import heartImg1 from "../../../public/assets/recipes-categories/Group 852 (1).png"
import heartImg2 from "../../../public/assets/recipes-categories/Group 852.png"
import adsImg from "../../../public/assets/recipes-categories/Ads.png"

import maskGroup1 from "../../../public/assets/recipes-categories/Mask Group.png"
import maskGroup2 from "../../../public/assets/recipes-categories/Mask Group (6).png"
import maskGroup3 from "../../../public/assets/recipes-categories/Mask Group (1).png"
import maskGroup4 from "../../../public/assets/recipes-categories/Mask Group (2).png"
import maskGroup5 from "../../../public/assets/recipes-categories/Mask Group (3).png"
import maskGroup6 from "../../../public/assets/recipes-categories/Mask Group (4).png"
import maskGroup7 from "../../../public/assets/recipes-categories/Mask Group (5).png"
import maskGroup8 from "../../../public/assets/recipes-categories/Mask Group (6).png"
import timerImg from "../../../public/assets/nav-hero/Timer.png"
import forkKnifeImg from "../../../public/assets/nav-hero/ForkKnife.png"
const RecipesCategories = () => {
  return (
    <>
    <div className="container recipes-categories">
         <div className="recipes-headings">
            <h1 className="recipe-heading">Simple and tasty recipes</h1>
            <p className="recipe-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere consequuntur perspiciatis rem ab quasi ipsum distinctio maiores mollitia facilis?</p>
         </div>

         {/* recipes-cards */}
         <div className="recipes-cards">
            <div className="recipe-card" id="recipe-card-1">
                <div className="recipe-image">
                    <div className="herat-img">
                        <img src={heartImg2} alt="" />
                    </div>
                    <img src={maskGroup1} alt="" />
                </div>
                <div className="recipe-descriptions">
                    <h2 className="recipe-name">Big Juicy Wagyu Beef Cheeseburger</h2>
                    <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkKnifeImg} alt="" />
                            Snack</span>
                    </div>
                </div>
            </div>
            <div className="recipe-card" id="recipe-card-2">
                <div className="recipe-image">
                <div className="herat-img">
                        <img src={heartImg1} alt="" />
                    </div>
                    <img src={maskGroup2} alt="" />
                </div>
                <div className="recipe-descriptions">
                    <h2 className="recipe-name">Big Juicy Wagyu Beef Cheeseburger</h2>
                    <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkKnifeImg} alt="" />
                            Snack</span>
                    </div>
                </div>
            </div>
            <div className="recipe-card" id="recipe-card-3">
                <div className="recipe-image">
                <div className="herat-img">
                        <img src={heartImg1} alt="" />
                    </div>
                    <img src={maskGroup3} alt="" />
                </div>
                <div className="recipe-descriptions">
                    <h2 className="recipe-name">Big Juicy Wagyu Beef Cheeseburger</h2>
                    <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkKnifeImg} alt="" />
                            Snack</span>
                    </div>
                </div>
            </div>
            <div className="recipe-card" id="recipe-card-4">
                <div className="recipe-image">
                <div className="herat-img">
                        <img src={heartImg2} alt="" />
                    </div>
                    <img src={maskGroup4} alt="" />
                </div>
                <div className="recipe-descriptions">
                    <h2 className="recipe-name">Big Juicy Wagyu Beef Cheeseburger</h2>
                    <div className="recipe-btn-group">
                        <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkKnifeImg} alt="" />
                            Snack</span>
                    </div>
                </div>
            </div>
            <div className="recipe-card" id="recipe-card-5">
                <div className="recipe-image">
                <div className="herat-img">
                        <img src={heartImg1} alt="" />
                    </div>
                    <img src={maskGroup5} alt="" />
                </div>
                <div className="recipe-descriptions">
                    <h2 className="recipe-name">Big Juicy Wagyu Beef Cheeseburger</h2>
                    <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkKnifeImg} alt="" />
                            Snack</span>
                    </div>
                </div>
            </div>
            <div className="recipe-card" id="recipe-card-6">
                <div className="recipe-image">
                    <img src={adsImg} alt="" />
                </div>
            </div>
            <div className="recipe-card" id="recipe-card-7">
                <div className="recipe-image">
                <div className="herat-img">
                        <img src={heartImg2} alt="" />
                    </div>
                    <img src={maskGroup6} alt="" />
                </div>
                <div className="recipe-descriptions">
                    <h2 className="recipe-name">Big Juicy Wagyu Beef Cheeseburger</h2>
                    <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkKnifeImg} alt="" />
                            Snack</span>
                    </div>
                </div>
            </div>
            <div className="recipe-card" id="recipe-card-8">
                <div className="recipe-image">
                <div className="herat-img">
                        <img src={heartImg1} alt="" />
                    </div>
                    <img src={maskGroup7} alt="" />
                </div>
                <div className="recipe-descriptions">
                    <h2 className="recipe-name">Big Juicy Wagyu Beef Cheeseburger</h2>
                    <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkKnifeImg} alt="" />
                            Snack</span>
                    </div>
                </div>
            </div>
            <div className="recipe-card" id="recipe-card-9">
                <div className="recipe-image">
                <div className="herat-img">
                        <img src={heartImg1} alt="" />
                    </div>
                    <img src={maskGroup8} alt="" />
                </div>
                <div className="recipe-descriptions">
                    <h2 className="recipe-name">Big Juicy Wagyu Beef Cheeseburger</h2>
                    <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkKnifeImg} alt="" />
                            Snack</span>
                    </div>
                </div>
            </div>
         </div>
    </div>
    </>
  )
}

export default RecipesCategories
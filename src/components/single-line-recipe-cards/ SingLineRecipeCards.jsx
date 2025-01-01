import "./SingLineRecipeCards.css"
import timerImg from "../../../public/assets/nav-hero/Timer.png"
import forkknife from "../../../public/assets/nav-hero/ForkKnife.png"
import heartImg1 from "../../../public/assets/recipes-categories/Group 852 (1).png"
import heartImg2 from "../../../public/assets/recipes-categories/Group 852.png"
import groupImg1 from "../../../public/assets/recipes-cards/Mask Group.png"
import groupImg2 from "../../../public/assets/recipes-cards/Mask Group (1).png"
import groupImg3 from "../../../public/assets/recipes-cards/Mask Group (2).png"
import groupImg4 from "../../../public/assets/recipes-cards/Mask Group (3).png"
const  SingLineRecipeCards = () => {
  return (
    <>
    <div className="container singleLineRecipeCards">
    <div className="recipes-headings">
            <h1 className="recipe-heading" id="single-line-card-heading">You may like these recipe too</h1>
         </div>
             {/* cards-recipes */}
       <div className="cards-recipes">
        <div className="card-recipe">
            <div className="card-image">
            <div className="herat-img">
                        <img src={heartImg2} alt="" />
                    </div>
                <img src={groupImg1} alt="" />
            </div>
            <div className="card-recipes-descriptions">
              <h2 className="card-recipe-name">Mixed Tropical Fruit Salad with Superfood Boosts</h2>
              <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkknife} alt="" />
                            Snack</span>
                    </div>
            </div>
        </div>
        <div className="card-recipe">
            <div className="card-image">
            <div className="herat-img">
                        <img src={heartImg1} alt="" />
                    </div>
                <img src={groupImg2} alt="" />
            </div>
            <div className="card-recipes-descriptions">
              <h2 className="card-recipe-name">Mixed Tropical Fruit Salad with Superfood Boosts</h2>
              <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkknife} alt="" />
                            Snack</span>
                    </div>
            </div>
        </div>
        <div className="card-recipe">
            <div className="card-image">
            <div className="herat-img">
                        <img src={heartImg2} alt="" />
                    </div>
                <img src={groupImg3} alt="" />
            </div>
            <div className="card-recipes-descriptions">
              <h2 className="card-recipe-name">Mixed Tropical Fruit Salad with Superfood Boosts</h2>
              <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkknife} alt="" />
                            Snack</span>
                    </div>
            </div>
        </div>
        <div className="card-recipe">
            <div className="card-image">
            <div className="herat-img">
                        <img src={heartImg1} alt="" />
                    </div>
                <img src={groupImg4} alt="" />
            </div>
            <div className="card-recipes-descriptions">
              <h2 className="card-recipe-name">Mixed Tropical Fruit Salad with Superfood Boosts</h2>
              <div className="recipe-btn-group">
                    <span><img src={timerImg} alt="" />
                            30 Minutes</span>
                        <span> <img src={forkknife} alt="" />
                            Snack</span>
                    </div>
            </div>
        </div>
       </div>
    </div>
    </>
  )
}
export default  SingLineRecipeCards
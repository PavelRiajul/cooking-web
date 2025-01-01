import "./RecipesCards.css"
import recipeCard1 from "../../../public/assets/recipes-cards/Mask Group.png"
import recipeCard2 from "../../../public/assets/recipes-cards/Mask Group (1).png"
import recipeCard3 from "../../../public/assets/recipes-cards/Mask Group (2).png"
import recipeCard4 from "../../../public/assets/recipes-cards/Mask Group (3).png"
import recipeCard5 from "../../../public/assets/recipes-cards/Mask Group (4).png"
import recipeCard6 from "../../../public/assets/recipes-cards/Mask Group (5).png"
import recipeCard7 from "../../../public/assets/recipes-cards/Mask Group (6).png"
import recipeCard8 from "../../../public/assets/recipes-cards/Mask Group (7).png"

import heartImg1 from "../../../public/assets/recipes-categories/Group 852 (1).png"
import heartImg2 from "../../../public/assets/recipes-categories/Group 852.png"
import timerImg from "../../../public/assets/nav-hero/Timer.png"
import forkknife from "../../../public/assets/nav-hero/ForkKnife.png"
const RecipesCards = () => {
  return (
    <>
    <div className="container recipesCards">
       <div className="recipe-cards-heading">
        <h2 className="heading-recipes">Try this delicious recipe<br/> to make your day</h2>
        <p className="text-recipe">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere animi, adipisci tenetur dolorem porro tempora quasi eius officia eum odio quidem.</p>
       </div>
       {/* cards-recipes */}
       <div className="cards-recipes">
        <div className="card-recipe">
            <div className="card-image">
            <div className="herat-img">
                        <img src={heartImg2} alt="" />
                    </div>
                <img src={recipeCard1} alt="" />
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
                <img src={recipeCard2} alt="" />
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
                <img src={recipeCard3} alt="" />
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
                <img src={recipeCard4} alt="" />
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
                <img src={recipeCard5} alt="" />
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
                <img src={recipeCard6} alt="" />
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
                <img src={recipeCard7} alt="" />
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
                <img src={recipeCard8} alt="" />
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

export default RecipesCards
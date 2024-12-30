import "./SingLineRecipeCards.css"

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
                        <img src="/src/assets/recipes-categories/Group 852.png" alt="" />
                    </div>
                <img src="/src/assets/recipes-cards/Mask Group.png" alt="" />
            </div>
            <div className="card-recipes-descriptions">
              <h2 className="card-recipe-name">Mixed Tropical Fruit Salad with Superfood Boosts</h2>
              <div className="recipe-btn-group">
                    <span><img src="/src/assets/Timer.png" alt="" />
                            30 Minutes</span>
                        <span> <img src="/src/assets/ForkKnife.png" alt="" />
                            Snack</span>
                    </div>
            </div>
        </div>
        <div className="card-recipe">
            <div className="card-image">
            <div className="herat-img">
                        <img src="/src/assets/recipes-categories/Group 852 (1).png" alt="" />
                    </div>
                <img src="/src/assets/recipes-cards/Mask Group (1).png" alt="" />
            </div>
            <div className="card-recipes-descriptions">
              <h2 className="card-recipe-name">Mixed Tropical Fruit Salad with Superfood Boosts</h2>
              <div className="recipe-btn-group">
                    <span><img src="/src/assets/Timer.png" alt="" />
                            30 Minutes</span>
                        <span> <img src="/src/assets/ForkKnife.png" alt="" />
                            Snack</span>
                    </div>
            </div>
        </div>
        <div className="card-recipe">
            <div className="card-image">
            <div className="herat-img">
                        <img src="/src/assets/recipes-categories/Group 852.png" alt="" />
                    </div>
                <img src="/src/assets/recipes-cards/Mask Group (2).png" alt="" />
            </div>
            <div className="card-recipes-descriptions">
              <h2 className="card-recipe-name">Mixed Tropical Fruit Salad with Superfood Boosts</h2>
              <div className="recipe-btn-group">
                    <span><img src="/src/assets/Timer.png" alt="" />
                            30 Minutes</span>
                        <span> <img src="/src/assets/ForkKnife.png" alt="" />
                            Snack</span>
                    </div>
            </div>
        </div>
        <div className="card-recipe">
            <div className="card-image">
            <div className="herat-img">
                        <img src="/src/assets/recipes-categories/Group 852 (1).png" alt="" />
                    </div>
                <img src="/src/assets/recipes-cards/Mask Group (3).png" alt="" />
            </div>
            <div className="card-recipes-descriptions">
              <h2 className="card-recipe-name">Mixed Tropical Fruit Salad with Superfood Boosts</h2>
              <div className="recipe-btn-group">
                    <span><img src="/src/assets/Timer.png" alt="" />
                            30 Minutes</span>
                        <span> <img src="/src/assets/ForkKnife.png" alt="" />
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
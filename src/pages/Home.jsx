import Categories from "../components/categories/Categories"
import CherfSection from "../components/cherf-section/CherfSection"
import Hero from "../components/Hero/Hero"
import InstaRecipes from "../components/instagram-recipes/InstaRecipes"
import Navbar from "../components/Navbar/Navbar"
import RecipesCategories from "../components/recipes/RecipesCategories"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Categories/>
        <RecipesCategories/>
        <CherfSection/>
        <InstaRecipes/>
    </div>
  )
}
export default Home